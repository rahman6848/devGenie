import React from 'react';
import {
    Card,
    Rating,
    Grid,
    List,
    Image,
    Header,
    Menu,
    Button,
    Divider
} from 'semantic-ui-react';
import {Link} from 'react-router';
import Carousel from 'nuka-carousel';
export default class AdminWelcomePage extends React.Component {
    render() {
        return (
            <div style={{
                background: 'black'
            }}>
            <Menu  fixed='top' style={{background:'black'}}><Menu.Item style={{color:'white'}}><h2 style={{fontFamily:'monospace'}}>GENIE</h2></Menu.Item>
            <Menu.Menu style={{marginLeft:'35%'}}><Menu.Item style={{color:'white'}}><h2 style={{fontFamily:'monospace'}}>CODE ASSISTANT</h2></Menu.Item></Menu.Menu>
            <Menu.Menu position='right'>
            <Menu.Item>
            <Button  basic color='olive' >Login</Button>&nbsp;&nbsp;&nbsp;&nbsp;
             <Button  basic color='teal'>Signup</Button>

            </Menu.Item>
            </Menu.Menu>
                  </Menu>

                <Grid divided="vertically">

                    <Grid.Column width={3}></Grid.Column>
                    <Grid.Column width={10}>
                        <Grid.Row>
                            <h1>hi</h1>
                            <Carousel slidesToShow={1} cellSpacing={10}>

                                <img src="../images/bot3.jpg"/>
                                <img src="../images/bot2.jpg"/>
                                <img src="../images/bot1.jpg"/>
                                <img src="../images/bot.jpg"/>
                                <img src="../images/bot4.jpg"/>
                            </Carousel>

                        </Grid.Row><br/><br/>
                        <Card.Group >
                            <Card style={{
                                background: 'black',
                                width: '32%'
                            }}>
                                <Card.Content>
                                    <Card.Header style={{
                                        color: 'white'
                                    }}>
                                        React Bot
                                    </Card.Header>
                                    <Card.Description style={{
                                        color: 'white'
                                    }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                            <Card style={{
                                background: 'black',
                                width: '32%'
                            }}>
                                <Card.Content>
                                    <Card.Header style={{
                                        color: 'white'
                                    }}>
                                        Express Bot
                                    </Card.Header>
                                    <Card.Description style={{
                                        color: 'white'
                                    }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                            <Card style={{
                                background: 'black',
                                width: '31%'
                            }}>
                                <Card.Content>
                                    <Card.Header style={{
                                        color: 'white'
                                    }}>
                                        Java Bot
                                    </Card.Header>
                                    <Card.Description style={{
                                        color: 'white'
                                    }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                        <br/>
                        <h2 style={{
                            color: 'white'
                        }}>Genie [ The code Assistant ] :</h2>
                        <p style={{
                            color: 'white',
                            marginLeft: '10%'
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                        <h2 style={{
                            color: 'white'
                        }}>Knowledge Base :</h2>
                        <p style={{
                            color: 'white',
                            marginLeft: '10%'
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                        <h2 style={{
                            color: 'white'
                        }}>Artificial Intelligence :</h2>
                        <p style={{
                            color: 'white',
                            marginLeft: '10%'
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <br/>
                        <Divider/>

                        <h4 style={{
                            color: 'white'
                        }}>About</h4>
                        <p style={{
                            color: 'white',
                            size: 2
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                    </Grid.Column>
                    <Grid.Row></Grid.Row>
                </Grid>
            </div>
        );
    }
}
