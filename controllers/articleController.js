const db = require("../models");
const vo = require("vo");
const Nightmare = require("nightmare");
const nightmare = Nightmare({
  show: true
});

module.exports = {
  // this needs editing
  findAll: function (req, res) {
    db.Book
      .find(req.query)
      .sort({
        date: -1
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // this also needs editing
  findById: function (req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create: function (req, res) {
  //   db.Book
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function (req, res) {
  //   db.Book
  //     .findOneAndUpdate({
  //       _id: req.params.id
  //     }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function (req, res) {
  //   db.Book
  //     .findById({
  //       _id: req.params.id
  //     })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // Hopefully these work like this
  scrapeUrls: function () {
    vo(this.FMurlGrabber)()
  },
  scrapeArticles: function (urlHolder) {
    vo(this.mainFMScrape)(urlHolder)
  },
  FMurlGrabber: function* () {
    let urlHolder = [];
    for (let i = 1; i < 12; i++) {
      let url = "";
      if (i === 1) {
        url = "https://floridaman.com/"
      } else {
        url = "https://floridaman.com/page/" + i
      }
      var scraper = yield nightmare.goto(url)
        .wait(1000)
        .evaluate(function () {
          let scrapedUrls = []
          let elArr = document.querySelectorAll(".entry-title")
          if (i === 1) {
            for (let i = 0; i < elArr.length; i++) {
              scrapedUrls.push(elArr[i].querySelector("a").href);
            }
          } else {
            for (let i = 3; i < elArr.length; i++) {
              scrapedUrls.push(elArr[i].querySelector("a").href);
            }
          }
          return scrapedUrls;
        }).then(function (response) {
          for (let i = 0; i < response.length; i++) {
            urlHolder.push(response[i])
          }
        })
    }
    console.log(urlHolder)

  },
  mainFMScrape: function* (url) {

    let example = [];
    for (let i = 0; i < url.length; i++) {
      var scraping = yield nightmare.goto(url[i])
        .wait(2000)
        .evaluate(function () {
          let imgEl = document.querySelectorAll(".g1-frame-inner");
          let image
          if (!imgEl[0].querySelector(".lazyloaded")) {
            image = "";
          } else {
            image = imgEl[0].querySelector(".lazyloaded").getAttribute("data-src")
          }
          let bodyEl = document.querySelector(".entry-content");
          let bodyArr = bodyEl.querySelectorAll("p");
          let body = "";
          for (let i = 0; i < bodyArr.length; i++) {
            body += `${bodyArr[i].innerText}\n\n`;
          }
          let urlEl;
          if (!bodyEl.querySelector("a")) {
            urlEl = "url[i]";
          } else {
            urlEl = bodyEl.querySelector("a").href;
          }
          let tagsHeaderEl = document.querySelector(".entry-header-01");
          let tagsElArr = tagsHeaderEl.querySelectorAll(".entry-category");
          let tagsArr = [];
          for (let i = 0; i < tagsElArr.length; i++) {
            tagsArr.push(tagsElArr[i].querySelector("span").innerText);
          }
          let obj = {
            headline: document.querySelector("h1").innerHTML,
            pub_date: document.querySelector(".entry-date").innerHTML,
            image_url: image,
            body: body,
            url: urlEl,
            meta_tags: tagsArr,
            upvote: 0,
            downvote: 0
          };
          return obj;
        }).then(function (response) {
          // ***This is where we push JSON into an array to prep it for POST (then eventual AJAX calls)***
          // jsonArr.push(response);
          // console.log(response);
          // example.push(response.headline);
          db.Article.create(response)
            .then(function (dbArticle) {
              // View the added result in the console
              console.log(dbArticle);
            })
            .catch(function (err) {
              // If an error occurred, log it
              console.log(err);
            });
        });
    };
    console.log(example);
    yield nightmare.end();
    // return jsonArr;
  }

};