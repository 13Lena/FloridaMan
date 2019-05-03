import React from "react";
import { Grid, Image, GridColumn, GridRow } from 'semantic-ui-react'
// import API from "../utils/API";
function Card() {

        return(
          <Grid>
              <GridRow>
                  <GridColumn width={6}>
                    <Image src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555426693/shape/mentalfloss/rickrollheader.png" />
                  </GridColumn>
                  <GridColumn width={10}>
                    <p>News Story Headline Crap</p>
                  </GridColumn>
              </GridRow>
          </Grid> 
        );

}

export default Card; 