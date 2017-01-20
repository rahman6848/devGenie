import React from 'react';
import {
    Segment,
    Button,
    Menu,
    Image,
    Icon,
    Header,
    Divider,
    Dropdown,
    Grid,
    Rail,
    Label,
    Accordion,
    Card,
    List,
    Progress
} from 'semantic-ui-react';
import Link from 'react-router';
const trigger = (
    <span>
        <Header as='h2' inverted>
            <Image shape='circular' src='http://semantic-ui.com/images/avatar2/large/patrick.png' inverted/> {' '}Patrick
        </Header>
    </span>
)
export default class FrontPage extends React.Component {
    render() {
        return (

            <div style={{
                backgroundImage: "url('../../images/front.jpg')"
            }}>

                <Grid fluid>

                    <Grid.Row>
                        <Menu attached='top' borderless={true} inverted>
                            <Menu.Item position='left'>
                                <h2>GENIE</h2>
                            </Menu.Item>
                            <Menu.Item></Menu.Item>
                            <Menu.Item position='right'>
                                <Label color='red' circular size='mini'>3</Label>
                                <Dropdown icon='flag'>
                                    <Dropdown.Menu pointing='left'>
                                        <Dropdown.Item>

                                            <h4>You have 3 tasks</h4>
                                            <Divider/>
                                            New Queries to be answered<br/><br/>32%<Progress percent={32} color='red' size='tiny'/>
                                            <Divider/>
                                            Queries to be approved<br/><br/>86%<Progress percent={86} color='yellow' size='tiny'/>
                                            <Divider/>
                                            Bot training<br/><br/>45%<Progress percent={45} color='blue' size='tiny'/>

                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item></Menu.Item>
                            <Menu.Item >
                                <Label color='yellow' size='mini'>3</Label>
                                <Dropdown icon='alarm outline'>
                                    <Dropdown.Menu pointing='left'>
                                        <Dropdown.Item>

                                            <h4>You have 5 notifications</h4>
                                            <Divider/>
                                            <Header as='h4'>

                                                <Header.Content>
                                                    <Icon name='users' color='red' size='huge'/>{' '}
                                                    1 new member joined today
                                                </Header.Content>
                                            </Header>
                                            <Divider/>
                                            <Header as='h4'>

                                                <Header.Content>
                                                    <Icon name='user' color='yellow' size='huge'/>{' '}
                                                    You have changed your username
                                                </Header.Content>
                                            </Header>
                                            <Divider/>
                                            <Header as='h4'>

                                                <Header.Content>
                                                    <Icon name='warning circle' color='blue' size='huge'/>{' '}
                                                    25 questions are to be approved
                                                </Header.Content>
                                            </Header>

                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>

                            <Menu.Item></Menu.Item>
                            <Menu.Item></Menu.Item>
                            <Menu.Menu>
                                <Dropdown trigger={trigger} position='left' icon={null}>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='Your profile' icon='user'/>
                                        <Dropdown.Item text='Help' icon='help'/>
                                        <Dropdown.Item text='Settings' icon='settings'/>
                                        <Divider/>
                                        <Dropdown.Item text='Sign Out' icon='sign out'/>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Menu>
                        </Menu>
                    </Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row>
                        <Divider horizontal fluid inverted>WELCOME ADMIN</Divider>
                    </Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}></Grid.Column>
                        <Grid.Column width={10}>
                            <Card.Group itemsPerRow={3}>
                                <Card>
                                    <Card.Content>
                                        <a href="#/react">
                                            <Image src='../../images/react.jpg' size='massive' avatar/>
                                            React Bot</a>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <a href=" ">
                                            <Image src='../../images/express.png' size='massive' avatar/>
                                            Express Bot
                                        </a>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <a href=" ">
                                            <Image src='../../images/node.jpg' size='massive' avatar/>
                                            Node Bot
                                        </a>
                                    </Card.Content>
                                </Card>

                                <Card>
                                    <Card.Content>
                                        <a href=" ">
                                            <Image src='../../images/java.png' size='massive' avatar/>
                                            Java Bot
                                        </a>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Image src='../../images/javascript.png' size='massive' avatar/>
                                        <a href=" ">
                                            JavaScript Bot
                                        </a>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Icon name='plus' size='huge'></Icon>
                                        <a>Add Bot</a>
                                    </Card.Content>
                                </Card>
                            </Card.Group>
                        </Grid.Column>
                        <Grid.Column width={3}></Grid.Column>
                    </Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row></Grid.Row>
                </Grid>
            </div>

        );
    }
}
