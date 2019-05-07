import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Results from "../components/Results";
import API from "../utils/API"
import Background from "../images/welcome-to-florida-1.jpg"
import { Grid, GridColumn, Header, Image } from "semantic-ui-react";
import Card from "../components/Card"
import "./styles.css"



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
            
       <div>
           <Grid>
               <Grid.Row>
                   <GridColumn width={3}></GridColumn>
                   <Grid.Column width={10}>
                        <Header as='h1' textAlign='center' attached>
                        FLORIDA MAN
                            <Header.Subheader>Worlds Worst Super Hero</Header.Subheader>
                        </Header>
                        <Card attached
                            // tags={meta_tags}
                            // imgUrl={image_url}
                            // headline={headline}
                            // body={body} 
                            />
                   </Grid.Column>
                   <GridColumn width={3}></GridColumn>
               </Grid.Row>
           </Grid>
       </div>

        )}

}
// <Results articleData={this.state.articleData} />

export default Favorites;