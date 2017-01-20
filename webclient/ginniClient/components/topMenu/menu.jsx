import React from 'react';
import {
    Grid,
    Dropdown,
    Menu,
    Image,
    Popup,
    Rating,
    Icon
} from 'semantic-ui-react';
import {Link} from 'react-router';
import CardExampleContentBlock from '../rightBar/sharedfiles';
export default class TopMenu extends React.Component {
  constructor(){
    super();
  }
handle=()=>{
  console.log("asds");
}
    render() {
        return (
            <Menu style={{width:'100%',backgroundColor:'#d2e2e4',marginTop:'50px'}}>
                <Grid container columns={3}>
                    <Grid.Column width={4}>
                        <Image src={'../../images/Genie_avatar.jpg'} avatar/>
                        <span>Genie</span> {/*Show the bot name here*/}
                        <Popup trigger={< Rating icon = 'heart' size = 'small' />}>
                            Mark as Favorite
                        </Popup>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Menu.Menu>
                            <div className='ui  aligned category search item'>
                                <div className='ui transparent icon input'>
                                    <input className='prompt' type='text' placeholder='Search conversation...'/>
                                    <i className='search link icon'/>
                                </div>
                                <div className='results'></div>
                            </div>
                        </Menu.Menu>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Menu.Menu position='right'>
                        <Dropdown as={Menu.Item} icon='share alternate' simple>
                            <Dropdown.Menu>
                                <Dropdown.Item><Icon color='green' name='whatsapp'/>Whats app</Dropdown.Item>
                                <Dropdown.Item><Icon color='blue' name='facebook f'/>Facebook</Dropdown.Item>
                                <Dropdown.Item><Icon color='blue' name='twitter'/>Twitter</Dropdown.Item>
                                <Dropdown.Item><Icon color='red' name='google plus official'/>Google</Dropdown.Item>
                                <Dropdown.Item><Icon name='clipboard'/>Copy to Clip Board</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                            <Dropdown as={Menu.Item} icon='settings' simple>
                                <Dropdown.Menu>
                                    <Dropdown.Item><Icon color='green' name='refresh'/>Refresh Chat</Dropdown.Item>
                                    <Dropdown.Item><Icon color='red' name='delete'/>Clear History</Dropdown.Item>
                                    <Dropdown.Item><Icon color='olive' name='alarm mute outline'/>set youself to away</Dropdown.Item>
                                    <Dropdown.Item><Icon color='orange' name='help'/>Help & feedback</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item><Icon color='red' name='bug'/>Report the Bot</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as={Menu.Item} icon='detective' simple >
                                <Dropdown.Menu onClick={this.handle}>
                                    <Dropdown.Item ><Icon color='violet' name='tasks'/>To Do List</Dropdown.Item>
                                    <Dropdown.Item><Icon color='yellow' name='empty star'/>Starred Chats</Dropdown.Item>
                                    <Dropdown.Item><Icon color='purple' name='file'/>Files Shared</Dropdown.Item>
                                    <Dropdown.Item><Icon color='teal' name='file code outline'/>View Snippets</Dropdown.Item>
                                    <Dropdown.Item><Icon color='red' name='fa'/>Flagged tasks</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Menu>
                    </Grid.Column>
                </Grid>
            </Menu>
        );
    }
}
