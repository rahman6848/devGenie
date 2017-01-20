import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import react from './ginniAdmin/components/menu/menu';
import AdminHome from './ginniAdmin/components/home/home';
import adminProfile from './ginniAdmin/components/admin/adminProfile'
import userHome from './ginniClient/components/home/home';
import SharedFiles from './ginniClient/components/rightBar/sharedfiles'
import StarredCharts from './ginniClient/components/rightBar/starredcharts'
import ToDoList from './ginniClient/components/rightBar/todolist'
import MenuItem from './ginniClient/components/rightBar/menuitem'
import SearchPage from './ginniClient/components/home/searchPage';
import Carousel from './applicationHome/carousel'

injectTapEventPlugin();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={AdminHome}/>
        <Route path='/react' component={react}/>
        <Route path='/a' component={Carousel}/>
          <Route path='/client' component={SearchPage}/>
          <Route path='/sharedfiles' target='/' component={SharedFiles}/>
      </Router>
,document.getElementById('mountapp')
 );
