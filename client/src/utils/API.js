import axios from "axios";

export default {
    getArticles: () => {
        return axios.get("/api/articles");
    },
    getArticles:(id) => {
        return axios.get("/api/articles/" + id);
    },
    // searchAr: (title) => {
    //     return axios.post("/search", {title: title});
    // },
    favorite: (id) => {
        return axios.post("/api/users", id);
    },
    upVote: (id)=>{
        return axios.post("api/articles/vote", id);
    },
    downVote: (id)=>{
        return axios.post("api/articles/vote", id);
    }

}
