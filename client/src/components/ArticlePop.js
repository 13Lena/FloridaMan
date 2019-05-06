import React from "react";
import { Button, Header, Image } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Modal } from "semantic-ui-react";


function ArticlePop (props) {
    return(

            <div style={{padding: "15px"}}>
                <Modal.Content image>
                  <Image wrapped size='medium' src={props.imgUrl} />
                  <Modal.Description>
                    <Header>{props.headline}</Header>
                    <p>{props.body}</p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button 
                    color='blue'
                    content='Upvote'
                    icon='thumbs up'
                    label={{ basic: true, color: 'blue', pointing: 'left', content:'314'}}>
                  </Button>
                  <Button
                    color='red'
                    content='Downvote'
                    icon='thumbs down'
                    label={{as: 'a', basic:'true', color: 'red', pointing: 'left',content: '974'}}>
                  </Button>
                </Modal.Actions>
            </div> 
    )
}

export default ArticlePop; 