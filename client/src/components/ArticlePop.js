import React from "react";
import { Button, Header, Image } from 'semantic-ui-react'
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
                    value={props.id}
                    color='orange'
                    content='Favorite This'
                    icon='star'
                    onClick={props.saveFavorite}
                    >
                  </Button> 
                </Modal.Actions>
            </div> 
    )
}

export default ArticlePop; 