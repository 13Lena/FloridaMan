import React from "react";
import { Button, Header, Image } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Modal } from "semantic-ui-react";


function ArticlePop () {
    return(

            <div>
                <Modal.Content image>
                  <Image wrapped size='medium' src='https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555349001/shape/mentalfloss/screen_shot_2016-02-04_at_4.43.43_pm.png' />
                  <Modal.Description>
                    <Header>Headline will go here</Header>
                    <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
                    <p>the full story goes here</p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button 
                    color='blue'
                    content='Like'
                    icon='thumbs up'
                    label={{ basic: true, color: 'blue', pointing: 'left', 
                      //content:'314'
                      }}>
                  </Button>
                  <Button
                    color='red'
                    content='Dislike'
                    icon='thumbs down'
                    label={{as: 'a', basic:'true', color: 'red', pointing: 'left',
                      //content: '974'
                    }}>
                  </Button>
                </Modal.Actions>
            </div> 
    )
}

export default ArticlePop; 