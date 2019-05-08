import React from "react";
import { Button, Header, Image } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Modal } from "semantic-ui-react";


function ArticlePop (props) {


    return(

            <div style={{padding: "15px"}}>
                <Modal.Content image>
                  <Image size='large' centered src={props.imgUrl} rounded style={{paddingBottom: "15px"}}/>
                  <Modal.Description >
                    <Header as='h1'>{props.headline}</Header>
                    <h3 style={{paddingBottom: "15px"}}>{props.body}</h3>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    color='teal'
                    content='Like'
                    icon='arrow circle up'
                    label={{ basic: true, color: 'teal', pointing: 'left', content:'314'}}>
                  </Button>
                  <Button
                    color='orange'
                    content='Dislike'
                    icon='arrow circle down'
                    label={{as: 'a', basic:'true', color: 'orange', pointing: 'left',content: '974'}}>
                  </Button>
                </Modal.Actions>
            </div> 
    )
}

export default ArticlePop; 