import React, { Component } from "react";
import Results from "../components/Results"
import API from "../utils/API"
import "./styles.css"



class Main extends Component {

    state = {
        articleData: []
    }

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = tag => {
        if (!tag) {
            API.getArticles()
                .then(res => {
                    const dataToBeMapped = [];
                    for (let i = 0; i < res.data.length; i += 2) {
                        let tempObject = { left: res.data[i], right: res.data[i + 1], key: i }
                        dataToBeMapped.push(tempObject)
                    }
                    this.setState({ articleData: dataToBeMapped })
                })
                .catch(err => console.log(err))
        } else {
            API.getFilteredArticles(tag)
            .then(res => {
                const dataToBeMapped = [];
                for (let i = 0; i < res.data.length; i += 2) {
                    let tempObject = { left: res.data[i], right: res.data[i + 1], key: i }
                    dataToBeMapped.push(tempObject)
                }
                this.setState({ articleData: dataToBeMapped })
            }).catch(err => console.log(err))
        };
    };

    componentDidUpdate(prevProps){
        if (prevProps.category !== this.props.category) {
        this.loadArticles(this.props.category)
        }
    };

    render() {
        return (
            
            <Results articleData={this.state.articleData} />
        );
    }
};

export default Main;