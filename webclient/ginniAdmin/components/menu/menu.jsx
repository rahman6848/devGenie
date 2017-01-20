import React, {Component} from 'react';
import Content from '../sideBarPusherContent/content';
import TopMenuBot from './topmenubot'
import {
    Sidebar,
    Segment,
    Button,
    Menu,
    Image,
    Icon,
    Header,
    Grid,
    Divider,
    Dropdown,
    Card,
    Feed
} from 'semantic-ui-react';

export default class SidebarBot extends Component {


    constructor(){
      super();
      this.state={
        activeItem:'Build'
      }
    }


    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    render() {
        const activeItem = this.state.activeItem;
        return (
            <div style={{
                height: '100%'
            }}>
                <Sidebar as={Menu} className='fixed' animation='slide along' width='thin' visible={true} icon='labeled' vertical inverted>
                    <Menu.Item name='Ginni'>
                        <h3>Ginni</h3>
                        <Image src='../../images/logo.png' avatar/>
                    </Menu.Item>
                    <Menu.Item name='SetupAi' active={activeItem === 'SetupAi'} onClick={this.handleItemClick}>
                        <Icon name='book'/>
                        Set up AI
                    </Menu.Item>
                    <Menu.Item name='BroadCast' active={activeItem === 'BroadCast'} onClick={this.handleItemClick}>
                        <Icon name='announcement'/>
                        BroadCast
                    </Menu.Item>
                    <Menu.Item name='Users' active={activeItem === 'Users'} onClick={this.handleItemClick}>
                        <Icon name='users'/>
                        Users
                    </Menu.Item>
                    <Menu.Item name='Analyze' active={activeItem === 'Analyze'} onClick={this.handleItemClick}>
                        <Icon name='spy'/>
                        Analyze
                    </Menu.Item>
                    <Menu.Item name='UseTheBot' active={activeItem === 'UseTheBot'} onClick={this.handleItemClick}>
                        <Icon name='book'/>
                        Use the bot
                    </Menu.Item>

                </Sidebar>
                <Sidebar.Pusher style={{
                    width: '90%',
                    height:'100%'
                }}>
                    <Segment style={{
                        'margin-top': '0px',
                        'padding': '0px',
                        height:'100%'
                    }}>
                      <TopMenuBot/>
                      <div style={{'background-color':'#f3f2f2',height:'100%'}}>
                            <Content sidebarItemSelected={activeItem}/>
                      </div>
                        </Segment>
                    </Sidebar.Pusher>
                </div>
              );
            }
          }
