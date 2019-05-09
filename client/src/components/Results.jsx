import React, { Component } from "react";
import Card from "./Card";
import { Grid, GridColumn } from "semantic-ui-react";
import { AutoSizer, List } from "react-virtualized";

class Results extends Component {
  render() {
    const dataObject = this.props;
    const dataArray = dataObject.articleData;
    console.log(dataArray.length);
    return (
      <AutoSizer style={{ height: "83vh" }}>
        {({ height, width }) => (
          <List
            height={height}
            rowCount={dataArray.length}
            rowHeight={250}
            overscanRowCount={10}
            rowRenderer={({ index, key, style }) => {
              const data = dataArray[index];
              let left = data.left;
              let right = data.right;
              if (data.right) {
                return (
                  <Grid style={style} key={data.key}>
                    <Grid.Row>
                      <GridColumn width={1} />
                      <Grid.Column width={7}>
                        <Card
                          tags={left.meta_tags}
                          imgUrl={
                            left.image_url ||
                            "https://images-na.ssl-images-amazon.com/images/I/71Y7JseBYYL._SX466_.jpg"
                          }
                          headline={left.headline}
                          body={left.body}
                          upvote={left.upvote}
                          downvote={left.downvote}
                          id={left._id}
                        />
                      </Grid.Column>
                      <Grid.Column width={7}>
                        <Card
                          tags={right.meta_tags}
                          imgUrl={
                            right.image_url ||
                            "https://images-na.ssl-images-amazon.com/images/I/71Y7JseBYYL._SX466_.jpg"
                          }
                          headline={right.headline}
                          body={right.body}
                          upvote={right.upvote}
                          downvote={right.downvote}
                          id={right._id}
                        />
                      </Grid.Column>
                      <GridColumn width={1} />
                    </Grid.Row>
                  </Grid>
                );
              } else {
                return (
                  <Grid style={style} key={data.key}>
                    <Grid.Row>
                      <GridColumn width={1} />
                      <Grid.Column width={7}>
                        <Card
                          tags={left.meta_tags}
                          imgUrl={left.image_url}
                          headline={left.headline}
                          upvote={left.upvote}
                          downvote={left.downvote}
                          id={left._id}
                        />
                      </Grid.Column>
                      <GridColumn width={1} />
                    </Grid.Row>
                  </Grid>
                );
              }
            }}
            width={width}
          />
        )}
      </AutoSizer>
  
    );
  }
}

export default Results;
