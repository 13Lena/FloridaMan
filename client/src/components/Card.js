import React, { Component } from "react";
import { Grid, Image, GridColumn, GridRow, Button, Icon, Modal } from "semantic-ui-react";
import ArticlePop from "./ArticlePop";
import API from "../utils/API";

class Card extends Component {
  state = {
    open: false,
    upvote: 0,
    downvote: 0,
    hasClicked: false
  }

  saveFavorite = (event) => {
    const {value} = event.target;
    console.log(value)
    API.saveFavorite({
      _id: value
    })
    .catch(err => console.log(err))
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
    this.show();
  }

  handleUpIncrement = id => {
    if (!this.state.hasClicked) {
      console.log(id);
      let count = this.state.upvote + 1;
      API.upVote(id, { upvote: count })
        .then(() => this.setState({ upvote: this.state.upvote + 1, hasClicked: true }))


        .catch(err => console.log(err))
        .then(this.props.loadArticles)
        .catch(err => console.log(err))
    }
  };

  handleDownIncrement = id => {
    if (!this.state.hasClicked) {
      console.log(id);
      let count = this.state.downvote + 1;
      API.downVote(id, { downvote: count })
        .then(() => this.setState({ downvote: this.state.downvote + 1, hasClicked: true }))
        .catch(err => console.log(err))
        .then(this.props.loadArticles)
        .catch(err => console.log(err))
    }
  };

  render() {

    return (
      <Grid>
        <GridRow>
          <GridColumn width={6}>
            <Image src={this.props.imgUrl} rounded />
          </GridColumn>
          <GridColumn width={10}>
            <h3>{this.props.headline}</h3>
            <Modal
              size={'small'}
              trigger={<Button
                size='medium'
                color='teal'
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
            <Modal.Actions>


          return (
          <Grid>
              <GridRow>
                  <GridColumn width={6}>
                    <Image src={this.props.imgUrl} rounded />
                  </GridColumn>
                  <GridColumn width={10}>
                    <h3>{this.props.headline}</h3>          
                    <Modal 
                      size={'small'} 
                      trigger={<Button 
                                  size='medium'
                                  color='teal' 
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
                        id={this.props.id}
                        saveFavorite={this.saveFavorite}
                        imgUrl={this.props.imgUrl}
                        headline={this.props.headline}
                        body={this.props.body}
                        upvote={this.props.upvote}
                        downvote={this.props.downvote}
                        />
                        
                     </Modal>
                     <Modal.Actions>
                                               
                      <div class="ui labeled right floated button" tabindex="0" >
                        <div class="ui tiny orange button" 
                        onClick={() => this.handleDownIncrement(this.props.id)}>
                        <i class="arrow circle down icon"></i>Dislike
                        </div>
                <a className="ui basic left pointing orange label">{this.state.downvote}
                </a>
              </div>
              <div className="ui labeled right floated button" tabIndex="0">
                <div className="ui tiny teal button"
                  onClick={() => this.handleUpIncrement(this.props.id)}>
                  <i className="arrow circle up icon"></i>like
                        </div>
                <a className="ui basic teal left pointing label">{this.state.upvote}</a>
              </div>

            </Modal.Actions>
          </GridColumn>
        </GridRow>
      </Grid>
    );
  }
}

export default Card; 