import React, { Component} from "react";
import { Grid, Image, GridColumn, GridRow, Button, Icon, Modal } from 'semantic-ui-react'
import ArticlePop from "./ArticlePop"
// import API from "../utils/API";

class Card extends Component {
  state = {
    open: false
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  handleItemClick = () => {
    // this.setState({ open: true });
    this.show();
  }

        render (){
          return (
          <Grid>
              <GridRow>
                  <GridColumn width={6}>
                    <Image src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555426693/shape/mentalfloss/rickrollheader.png" />
                  </GridColumn>
                  <GridColumn width={10}>
                    <p>News Story Headline Crap</p>
                    <p>     Maybe summary, maybe not</p>
                    <Modal 
                      size={'medium'} 
                      trigger={<Button 
                                  inverted color='teal' 
                                  animated='fade'
                                  onClick={this.handleItemClick}>
                                    <Button.Content visible>Read More</Button.Content>
                                    <Button.Content hidden>
                                      <Icon name='eye' />
                                    </Button.Content>
                                </Button>} 
                      onClose={this.close} 
                      open={this.state.open}>
                        <ArticlePop />
                     </Modal>
                  </GridColumn>
              </GridRow>
          </Grid> 
        );
    }
}

export default Card; 