import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Results from "../components/Results";
import API from "../utils/API"
// import { Grid, GridColumn, Header, Image } from "semantic-ui-react";
import "./styles.css"



class Favorites extends Component {

    state = {
        articleData: [],
        isLoggedIn: sessionStorage.loggedIn
    }
    
    componentDidMount() {

        API.getFavorites(sessionStorage.username)
            .then(res => {
                const dataToBeMapped = [];
                console.log(res.data.favs)
                for (let i = 0; i < res.data.favs.length; i+=2) {
                    let tempObject = {left: res.data.favs[i], right: res.data.favs[i+1], key: i}
                    dataToBeMapped.push(tempObject)
                }
                this.setState({ articleData: dataToBeMapped });
            }
                )
            .catch(err => console.log(err))
        
    }

    render() {
        return(
            
       <div>
            <Results username={sessionStorage.loggedIn} articleData={this.state.articleData} />
       </div>

        )}

}
// <Results articleData={this.state.articleData} />

export default Favorites;