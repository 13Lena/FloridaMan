import React, { Component } from "react";
import Card from "./Card";
import { Grid, GridColumn } from 'semantic-ui-react';


class Results extends Component {

    render() {
        const dataObject = this.props;
        const dataArray = dataObject.articleData;
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

                        <Card tags={left.meta_tags} 
                        imgUrl={left.image_url || "https://images-na.ssl-images-amazon.com/images/I/71Y7JseBYYL._SX466_.jpg" } 
                        headline={left.headline} body={left.body} 
                        upvote={left.upvote} downvote={left.downvote} 
                        id={left._id}
                        username={this.props.username}
                        />
                    </Grid.Column>
                    <Grid.Column  width={7}>
                        <Card tags={right.meta_tags} 
                        imgUrl={right.image_url || "https://images-na.ssl-images-amazon.com/images/I/71Y7JseBYYL._SX466_.jpg"} 
                        headline={right.headline} body={right.body} 
                        upvote={right.upvote} 
                        downvote={right.downvote} 
                        id={right._id}
                        username={this.props.username}
                        />

                    </Grid.Column>
                    <GridColumn width={1}></GridColumn>
                </Grid.Row>
                )
                } else {
                return ( 
                    <Grid.Row key={data.key}>
                        <GridColumn width={1}></GridColumn>
                        <Grid.Column width={7}>
                            <Card tags={left.meta_tags} 
                            imgUrl={left.image_url} 
                            headline={left.headline} 
                            upvote={left.upvote} 
                            downvote={left.downvote} id={left._id}
                            username={this.props.username}
                            />
                        </Grid.Column>
                        <GridColumn width={1}></GridColumn>
                    </Grid.Row>
                    )
                }}) : (<></>)}
            </ Grid>
        )
    };

}

export default Results; 