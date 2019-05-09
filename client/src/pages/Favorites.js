import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, GridColumn, Header } from "semantic-ui-react";
import Card from "../components/Card"
import "./styles.css"
import { AutoSizer, List } from "react-virtualized";



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
        const dataObject = this.props;
        const dataArray = dataObject.articleData;
        return(
            <AutoSizer style={{ height: "83vh"}}>
                {({ height, width }) => (
                    <List
                        height={height}
                        rowCount={dataArray.length}
                        rowHeight={250}
                        overscanRowCount={10}
                        rowRender={({ index, key, style }) => {
                            const data = dataArray[index];  
                                <Grid style={style} key={data.key}>
                                    <Grid.Row>
                                        <GridColumn width={3}></GridColumn>
                                        <Grid.Column width={10}>
                                                <Header as='h1' textAlign='center' attached>
                                                FLORIDA MAN
                                                    <Header.Subheader>Worlds Worst Super Hero</Header.Subheader>
                                                </Header>
                                                <Card attached                                                        // tags={meta_tags}
                                                    // imgUrl={image_url}
                                                    // headline={headline}
                                                    // body={body} 
                                                    />
                                        </Grid.Column>
                                        <GridColumn width={3}></GridColumn>
                                    </Grid.Row>
                                  </Grid>
                    }}
                    width={width}            
                />                
              )}  
            </AutoSizer>
        );
    }
}

export default Favorites;