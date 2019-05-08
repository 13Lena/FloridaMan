import axios from "axios";


export default {
    getArticles: () => {
        return axios.get("/api/articles");
    },
    getOneArticle:(id) => {
        return axios.get("/api/articles/" + id);
    },
    getFilteredArticles:(tag) => {
        return axios.get("/api/articles/" + tag.toUpperCase());
    },
    // searchAr: (title) => {
    //     return axios.post("/search", {title: title});
    // },
    favorite: (id) => {
        return axios.post("/api/user/" + id);
    },
    upVote: (id, count)=>{
        return axios.put("/api/articles/vote/"  + id, count);
    },
    downVote: (id, count)=>{
        return axios.put("/api/articles/vote/" + id, count);
    },

    login: function(loginInfo) {
        console.log(loginInfo)
        return axios.post("/api/user/login", loginInfo);
      },

    signup: signupInfo => {
        console.log(signupInfo)
        return axios.post("/api/user/signup", signupInfo);
    }, 

    isLoggedIn: function() {
        return axios.get("/api/user/favorites")
    },

    isAdmin: function() {
        return axios.get("/api/user/logout")
    },

    logout: function() {
        return axios.get("/api/user/logout")
    }
}
