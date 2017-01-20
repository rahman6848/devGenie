import React from 'react';
import {
    Menu,
    Input,
    Feed,
    Dropdown,
    Image,
    Button
} from 'semantic-ui-react';
export default class HomeNavbar extends React.Component {
    constructor() {

        super();

    }

    render()
    {

        return (

            <Menu fixed='top' style={{
                background: 'black'
            }}>
                <Menu.Item style={{
                    color: 'white'
                }}>
                    <h2 style={{
                        fontFamily: 'monospace'
                    }}>GENIE</h2>
                </Menu.Item>
                <Menu.Menu style={{
                    marginLeft: '35%'
                }}>
                    <Menu.Item style={{
                        color: 'white'
                    }}>
                        <h2 style={{
                            fontFamily: 'monospace'
                        }}>CODE ASSISTANT</h2>
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button basic color='olive'>Login</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button basic color='teal'>Signup</Button>

                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}
