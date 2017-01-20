import React from 'react'
import {Sidebar, Menu,Grid,Input,Feed,Card,Dropdown,Button,Rating,Image} from 'semantic-ui-react';
import {Link} from 'react-router';
export default class ClientSidebar extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
                        <Grid>

                            <Sidebar as={Menu} animation='scale down' visible={true} icon='labeled' vertical  style={{backgroundColor:'#2ca589'}}>
                            <Image  size='tiny' src='../../images/Genie_avatar.jpg' avatar/><br/>

                            <Input icon='search' iconPosition='left' className='search' placeholder="search bot" />
                                <div>
                                <Card style={{width:'75%',marginLeft:'10%',height:60,marginTop:'15%',backgroundColor:'teal'}}>
                                <Card.Content>
                                 <Feed>
                                    <Feed.Event>
                                      <Feed.Label image='../../images/react.png' />
                                      <Feed.Content >
                                        <Feed.Summary><Link to='/' style={{color:'white'}} style={{color:'white'}}>React</Link>
                                        </Feed.Summary><Dropdown fluid simple>
                                        <Dropdown.Menu>
                                         <Dropdown.Item>
                                          <Button circular style={{color:'black',backgroundColor:'#19e0ea'}} size='mini'>use</Button>
                                         </Dropdown.Item>
                                        <Rating icon='star'  defaultRating={4} maxRating={5} size='mini' clearable style={{marginLeft:'8%'}}/>

                                          </Dropdown.Menu>
                                          </Dropdown>

                                      </Feed.Content>
                                    </Feed.Event>
                                    </Feed>
                                    </Card.Content>
                                    </Card>
                                <Card style={{width:'75%',marginLeft:'10%',height:60,marginTop:'15%',backgroundColor:'teal'}}>
                                    <Card.Content>
                                    <Feed>
                                    <Feed.Event>
                                      <Feed.Label image='../../images/express.png' />
                                      <Feed.Content>
                                        <Feed.Summary><Link to='/' style={{color:'white'}}>Express</Link>
                                        </Feed.Summary> <Dropdown fluid simple>
                                        <Dropdown.Menu>
                                         <Dropdown.Item>
                                         <Button circular style={{color:'black',backgroundColor:'#19e0ea'}} size='mini'>use</Button>
                                         </Dropdown.Item>
                                        <Rating icon='star'  defaultRating={4} maxRating={5} size='mini' clearable style={{marginLeft:'8%'}}/>


                                          </Dropdown.Menu>
                                          </Dropdown>

                                      </Feed.Content>
                                    </Feed.Event>
                                    </Feed>
                                    </Card.Content>
                                    </Card>
                                <Card style={{width:'75%',marginLeft:'10%',height:60,marginTop:'15%',backgroundColor:'teal'}}>
                                    <Card.Content>

                                    <Feed>
                                    <Feed.Event>
                                      <Feed.Label image='../../images/node.jpg' />
                                      <Feed.Content>
                                        <Feed.Summary><Link to='/' style={{color:'white'}}>Node</Link>
                                        </Feed.Summary> <Dropdown fluid simple>
                                        <Dropdown.Menu>
                                         <Dropdown.Item>
                                         <Button circular style={{color:'black',backgroundColor:'#19e0ea'}} size='mini'>use</Button>
                                         </Dropdown.Item>
                                        <Rating icon='star'  defaultRating={3} maxRating={5} size='mini' clearable style={{marginLeft:'8%'}}/>


                                          </Dropdown.Menu>
                                          </Dropdown>

                                      </Feed.Content>
                                    </Feed.Event>
                                    </Feed>
                                    </Card.Content>
                                    </Card>

                                    <Card style={{width:'75%',marginLeft:'10%',height:60,marginTop:'15%',backgroundColor:'teal'}}>
                                    <Card.Content>

                                    <Feed>
                                    <Feed.Event>
                                      <Feed.Label image='../../images/java.png' />
                                      <Feed.Content>
                                        <Feed.Summary><Link to='/' style={{color:'white'}}>Java</Link>
                                        </Feed.Summary> <Dropdown fluid simple>
                                        <Dropdown.Menu >
                                         <Dropdown.Item>
                                         <Button circular style={{color:'black',backgroundColor:'#19e0ea'}} size='mini'>use</Button>
                                         </Dropdown.Item>
                                        <Rating icon='star'  defaultRating={3} maxRating={5} size='mini' clearable style={{marginLeft:'8%'}}/>


                                          </Dropdown.Menu>
                                          </Dropdown>

                                      </Feed.Content>
                                    </Feed.Event>
                                    </Feed>


                                </Card.Content>
                                    </Card>

                                    <Card style={{width:'75%',marginLeft:'10%',height:60,marginTop:'15%',backgroundColor:'teal'}}>
                                    <Card.Content>

                                    <Feed>
                                    <Feed.Event>
                                      <Feed.Label image='../../images/js.png' />
                                      <Feed.Content>
                                        <Feed.Summary><Link to='/' style={{color:'white'}}>JavaScript</Link>
                                        </Feed.Summary> <Dropdown fluid simple>
                                        <Dropdown.Menu>
                                         <Dropdown.Item>
                                         <Button circular style={{color:'black',backgroundColor:'#19e0ea'}} size='mini'>use</Button>
                                         </Dropdown.Item>
                                        <Rating icon='star'  defaultRating={2} maxRating={5} size='mini' clearable style={{marginLeft:'8%'}}/>

                                          </Dropdown.Menu>
                                          </Dropdown>

                                      </Feed.Content>
                                    </Feed.Event>
                                    </Feed>

                                </Card.Content>
                                    </Card>
                                    </div>
                            </Sidebar>
                       </Grid>

                  );
                }
              }
