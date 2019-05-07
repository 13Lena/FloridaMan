import axios from "axios";

export default {
    getArticles: () => {
        return axios.get("/api/articles");
    },
    getOneArticle:(id) => {
        return axios.get("/api/articles/" + id);
    },
    // searchAr: (title) => {
    //     return axios.post("/search", {title: title});
    // },
    favorite: (id) => {
        return axios.post("/api/user", id);
    },
    upVote: (id)=>{
        return axios.post("api/articles/vote", id);
    },
    downVote: (id)=>{
        return axios.post("api/articles/vote", id);
    },

    login: function(loginInfo) {
        return axios.post("/api/user/login", loginInfo);
      },

    signup: signupInfo => {
        return axios.post("/api/user/signup", signupInfo);
    }

}
