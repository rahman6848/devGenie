import React from 'react';
import {Menu,Input,Feed,Dropdown,Icon} from 'semantic-ui-react';
export default class Navbar extends React.Component{
constructor(){

	super();

}


render()
{

return(


<Menu  fixed='top' style={{backgroundColor:'#2ca589'}}>
<Menu.Menu position='right'>
<Menu.Item>
 <Feed>
        <Feed.Event>
          <Feed.Label image='../../images/avatar.png' />
         <Dropdown as={Menu.Item} text="I am Bot User" simple >

         <Dropdown.Menu>
         <Dropdown.Item><Icon color='grey' name='user'/>View Profile</Dropdown.Item>
            <Dropdown.Item><Icon color='black' name='setting'/>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Icon color='blue' name='discussions'/>Help & feedback</Dropdown.Item>
            <Dropdown.Item><h5><Icon color='red' name='shutdown'/>Log out</h5></Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>

          </Feed.Event>
          </Feed>
</Menu.Item>
</Menu.Menu>
      </Menu>



);
}
  }
