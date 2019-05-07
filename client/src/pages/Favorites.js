import React, { Component } from "react";
import Results from "../components/Results"
import API from "../utils/API"

class Favorites extends Component {

    // state = {
    //     articleData: []
    // }
    
    // componentDidMount() {
    //     API.getArticles()
    //         .then(res => {
    //             const dataToBeMapped = [];
    //             for (let i = 0; i < res.data.length; i+=2) {
    //                 let tempObject = {left: res.data[i], right: res.data[i+1], key: i}
    //                 dataToBeMapped.push(tempObject)
    //             }
    //             this.setState({ articleData: dataToBeMapped })
    //         }
    //             )
    //         .catch(err => console.log(err))
    // }

    render() {
        return(
            // <Results articleData={this.state.articleData} />
       <div>
           some stuff
       </div>
        )}

}

export default Favorites;