import React from "react";
import Card from "./Card"
import { Grid, Image, GridColumn } from 'semantic-ui-react'
// import API from "../utils/API";


function Results() {

        return(
            <Grid>
                <Grid.Row>
                    <GridColumn width={1}></GridColumn>
                    <Grid.Column  width={7}>
                        <Card />
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                    <GridColumn width={1}></GridColumn>
                </Grid.Row>

                <Grid.Row>
                    <GridColumn width={1}></GridColumn>
                    <Grid.Column width={7}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                    <GridColumn width={1}></GridColumn>
                </Grid.Row>
            </Grid>
        );

}

export default Results; 