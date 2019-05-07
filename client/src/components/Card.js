import React, { Component} from "react";
import { Grid, Image, GridColumn, GridRow, Button, Icon, Modal } from 'semantic-ui-react'
import ArticlePop from "./ArticlePop"
import API from "../utils/API";
// import API from "../utils/API";

class Card extends Component {
  state = {
    open: false,
    upvote:0,
    downvote:0
  }
  

  
    componentDidMount(){
      this.setState({ 
        upvote: this.props.upvote, 
        downvote: this.props.downvote
    })}
    
  




  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  handleItemClick = () => {
    // this.setState({ open: true });
    this.show();
  } 

    handleUpIncrement = id => {
      console.log(id);
      let count = this.state.upvote + 1;
      API.upVote(id, {upvote: count})
      .then(() => this.setState({ upvote: this.state.upvote + 1 }))
      

      .catch(err =>console.log(err))
      .then(this.props.loadArticles)
      .catch(err =>console.log(err))
      
    };
    
    handleDownIncrement = id => {
      console.log(id);
      let count = this.state.downvote + 1;
      API.downVote(id, {downvote: count})
      .then(() => this.setState({ downvote: this.state.downvote + 1 }))
      

      .catch(err =>console.log(err))
      .then(this.props.loadArticles)
      .catch(err =>console.log(err))
      
    };
    


    // handleDownIncrement = id => {
    //   console.log(id);
    //   API.downVote(id)
    //   .then(() => this.setState({ downvote: this.state.downvote + 1 }))
    //   .catch(err =>console.log(err))
    // };
    

    

        render (){

          // console.log(this.props)
          return (
          <Grid>
              <GridRow>
                  <GridColumn width={6}>
                    <Image src={this.props.imgUrl} />
                    <Modal.Actions>
                    

          <div class="ui labeled button" tabIndex="0">
             <div class="ui teal button" 
             onClick={() => this.handleUpIncrement(this.props.id)}>
             <i class="thumbs up icon"></i>Upvote
             </div>
             <a class="ui basic teal left pointing label">{this.state.upvote}</a>
          </div>
            
          <div class="ui labeled button" tabindex="0" >
             <div class="ui orange button" 
             onClick={() => this.handleDownIncrement(this.props.id)}>
             <i class="thumbs down icon"></i>Downvote
             </div>
             <a class="ui basic left pointing orange label">{this.state.downvote}
             </a>
          </div>
          
                  {/* <span><Button 
                    color='blue'
                    content='Upvote'
                    icon='thumbs up'
                    label={{ basic: true, color: 'blue', pointing: 'left', content:'500'}}
                    onClick={this.handleUpIncrement}>
                  </Button>
                  <Button
                    color='red'
                    content='Downvote'
                    icon='thumbs down'
                    label={{as: 'a', basic:'true', color: 'red', pointing: 'left', content:'500'}}
                    onClick={this.handleDownIncrement}>
                  </Button></span> */}
                </Modal.Actions>
                  </GridColumn>
                  <GridColumn width={10}>
                    <h3>{this.props.headline}</h3>
                    
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
                        <ArticlePop 
                        imgUrl={this.props.imgUrl}
                        headline={this.props.headline}
                        body={this.props.body}
                        upvote={this.props.upvote}
                        downvote={this.props.downvote}
                        />
                        
                     </Modal>
                     
                  </GridColumn>
              </GridRow>
          </Grid> 
        );
    }
}

export default Card; 