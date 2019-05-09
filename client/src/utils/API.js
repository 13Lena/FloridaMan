import axios from "axios";

export default {
    getArticles: () => {
        return axios.get("/api/articles");
    },

    getOneArticle: (id) => {
        return axios.get("/api/articles/" + id);
    },

    getFilteredArticles: (tag) => {
        return axios.get("/api/articles/" + tag.toUpperCase());
    },

    favorite: (id) => {
        return axios.post("/api/user/" + id);
    },

    getFavorites: username => {
        return axios.get("/api/user/favorite-articles/" + username);
    },

    upVote: (id, count) => {
        return axios.put("/api/articles/vote/" + id, count);
    },

    downVote: (id, count) => {
        return axios.put("/api/articles/vote/" + id, count);
    },

    login: function (loginInfo) {
        return axios.post("/api/user/login", loginInfo);
    },

    signup: signupInfo => {
        return axios.post("/api/user/signup", signupInfo);
    },

    saveFavorite: (favData) => {
        console.log(favData)
        return axios.put(`/api/user/favorite/${favData._id}/${favData.username}`);
    },

    isLoggedIn: function () {
        return axios.get("/api/user/favorites")
    },

    isAdmin: function () {
        return axios.get("/api/user/logout")
    },

    logout: function () {
        return axios.get("/api/user/logout")
    }
}