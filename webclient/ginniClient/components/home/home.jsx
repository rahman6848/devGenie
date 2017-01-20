import React from 'react';
import {Grid,Dropdown,Menu} from 'semantic-ui-react';
import AssistantChatContainer from '../interaction/assistantChatContainer';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <AssistantChatContainer/>
          </div>
        );
    }
}
