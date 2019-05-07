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
        return axios.post("/api/users/" + id);
    },
    upVote: (id, count)=>{
        return axios.put("/api/articles/vote/"  + id, count);
    },
    downVote: (id, count)=>{
        return axios.put("/api/articles/vote/" + id, count);
    }

}
