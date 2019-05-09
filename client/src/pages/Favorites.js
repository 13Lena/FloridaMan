import React, { Component } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
// import { Header } from "semantic-ui-react";
import Card from "../components/Card"
import "./styles.css"
import { AutoSizer, List } from "react-virtualized";
import API from "../utils/API"



class Favorites extends Component {

    state = {
        articleData: [],
        isLoggedIn: sessionStorage.loggedIn
    }

    componentDidMount() {

        API.getFavorites(sessionStorage.username)
            .then(res => {
                const dataToBeMapped = [];
                for (let i = 0; i < res.data.favs.length; i++) {
                    dataToBeMapped.push(res.data.favs[i])
                }
                this.setState({ articleData: dataToBeMapped });
            })
            .catch(err => console.log(err));
    }

    render() {
        const dataArray = this.state.articleData;
        return (
            <>
                {/* <Header as='h1' textAlign='center' attached>
                    Favorites
                </Header> */}
            <AutoSizer style={{ height: "83vh" }}>
                {({ height, width }) => (
                    <List
                        height={height}
                        rowCount={dataArray.length}
                        rowHeight={250}
                        overscanRowCount={10}
                        rowRenderer={({ index, key, style }) => {
                            const data = dataArray[index];
                            if (data) {
                                console.log(data.meta_tags)
                                return (
                                    <Grid style={style} key={data.key}>
                                        <Grid.Row>
                                            <GridColumn width={3}></GridColumn>
                                            <Grid.Column width={10}>
                                                <Card attached
                                                    tags={data.meta_tags}
                                                    imgUrl={
                                                        data.image_url ||
                                                        "https://images-na.ssl-images-amazon.com/images/I/71Y7JseBYYL._SX466_.jpg"
                                                    }
                                                    headline={data.headline}
                                                    body={data.body}
                                                    upvote={data.upvote}
                                                    downvote={data.downvote}
                                                    id={data._id}
                                                />
                                            </Grid.Column>
                                            <GridColumn width={3}></GridColumn>
                                        </Grid.Row>
                                    </Grid>
                                )
                            }
                        }}
                        width={width}
                    />
                )}
            </AutoSizer>
            </>
        );
    }
}

export default Favorites;