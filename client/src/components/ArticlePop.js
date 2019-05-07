import React from "react";
import { Button, Header, Image } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Modal } from "semantic-ui-react";


function ArticlePop (props) {


    return(

            <div style={{padding: "15px"}}>
                <Modal.Content image>
                  <Image wrapped size='small' src='https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555349001/shape/mentalfloss/screen_shot_2016-02-04_at_4.43.43_pm.png' />
                  <Modal.Description>
                    <Header>{props.headline}</Header>
                    <p>{props.body}</p>
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