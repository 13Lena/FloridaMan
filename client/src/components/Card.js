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
                    <Image src={this.props.imgUrl} />
                  </GridColumn>
                  <GridColumn width={10}>
                    <h3>{this.props.headline}</h3>
                    {/* <p>News Story Headline Crap</p>
                    <p>     Maybe summary, maybe not</p> */}
                    <Modal 
                      size={'small'} 
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
                        <ArticlePop up />
                     </Modal>
                  </GridColumn>
              </GridRow>
          </Grid> 
        );
    }
}

export default Card; 