import React from 'react';
import {Grid,Segment} from 'semantic-ui-react';
import AssistantView from '../interaction/assistantChatContainer';
import TopMenu from '../topMenu/menu';
import Navbar from '../navBar/navbar';
import Sidebar from '../leftbar/sidebar';
import RightBarHome from '../rightBar/rightbarHome';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import StarredCharts from '../rightBar/starredcharts'
import ToDoList from '../rightBar/todolist'
import MenuItem from '../rightBar/menuitem'
export default class SearchPage extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div style={{backgroundImage:"url('../../images/screen2.png')"}}>
      <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false}>

      <Grid>
      <Grid.Row>
      <Navbar />
      </Grid.Row>
      <Grid.Row>
      <Sidebar />

      <Grid.Column width={11} style={{paddingLeft:'25%'}}>
      <Grid.Row>
      <TopMenu />
      </Grid.Row>
      <Grid.Row>
      <AssistantView />
      </Grid.Row>
      </Grid.Column>
      <Grid.Column width={5} style={{paddingTop:'4%'}}>
      <RightBarHome />
      </Grid.Column>
      </Grid.Row>
      </Grid>
      </ReactCSSTransitionGroup>
      </div>

    );
  }
}
