import React, { Component } from "react";
import Card from "./Card"
import { Grid, GridColumn } from 'semantic-ui-react'
import API from "../utils/API";


class Results extends Component {

    render() {
        const dataObject = this.props;
        const dataArray = dataObject.articleData;
        console.log("It won't let me commit because it says theres nothing to commit so here's a console.log")

        return(
            <Grid>
                {dataArray ? dataArray.map(data => {
                    let left = data.left;
                    let right = data.right;

                    if (data.right) {
                    return ( 
                <Grid.Row key={data.key}>
                    <GridColumn width={1}></GridColumn>
                    <Grid.Column width={7}>
                        <Card tags={left.meta_tags} imgUrl={left.image_url} headline={left.headline} body={left.body} upvote={left.upvote} downvote={left.downvote}/>
                    </Grid.Column>
                    <Grid.Column  width={7}>
                        <Card tags={right.meta_tags} imgUrl={right.image_url} headline={right.headline} body={right.body} upvote={right.upvote} downvote={right.downvote} />
                    </Grid.Column>
                    <GridColumn width={1}></GridColumn>
                </Grid.Row>
                )
            } else {
                return ( 
                    <Grid.Row key={data.key}>
                        <GridColumn width={1}></GridColumn>
                        <Grid.Column width={7}>
                            <Card tags={left.meta_tags} imgUrl={left.image_url} headline={left.headline} body={left.body} upvote={left.upvote} downvote={left.downvote} />
                        </Grid.Column>
                        <GridColumn width={1}></GridColumn>
                    </Grid.Row>
                    )
            }}) : (<></>)}
            </Grid>
        )};

}

export default Results; 
