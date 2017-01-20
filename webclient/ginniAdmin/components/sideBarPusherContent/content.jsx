import React from 'react';
import BuildAi from '../buildAi/questionSetDisplay';
import BroadCast from '../broadcast/broadcast';
import Users from '../users/users';
import Analytics from '../Analytics/info';

export default class Content extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
      switch(this.props.sidebarItemSelected){
        case 'Build':{
        return  <BuildAi/>
        }
        case 'SetupAi':{
        return  <BuildAi/>
        }
        case 'BroadCast':{
        return  <BroadCast/>
        }
        case 'Users':{
        return  <Users/>
        }
        case 'Analyze':{
        return  <Analytics/>
        }
        case 'UseTheBot':{
        return  <BuildAi/>
        }
      }
  }
}
