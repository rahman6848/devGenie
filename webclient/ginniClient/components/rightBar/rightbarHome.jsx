import React from 'react';
import {Grid,Dropdown,Menu,Accordion,Icon,Card} from 'semantic-ui-react';
import AssistantChatContainer from '../interaction/assistantChatContainer';
import SharedFiles from './sharedfiles';
import ToDoList from './todoList';
import StarredCharts from './starredcharts';
export default class RightBarHome extends React.Component {
    render() {
        return (
            <Card>
      <Card.Content>

        <Card.Description><Accordion>
          <Accordion.Title>
            <Icon name='dropdown' />
            Shared Files
          </Accordion.Title>
          <Accordion.Content>
            <SharedFiles />
          </Accordion.Content>
          <Accordion.Title>
            <Icon name='dropdown' />
            To Do List
          </Accordion.Title>
          <Accordion.Content>
            <ToDoList />
          </Accordion.Content>
          <Accordion.Title>
            <Icon name='dropdown' />
            Starred Chats
          </Accordion.Title>
          <Accordion.Content>
            <StarredCharts />
          </Accordion.Content>
        </Accordion></Card.Description>
      </Card.Content>
    </Card>

        );
    }
}
