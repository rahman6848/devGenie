import React from 'react';
import {Feed, Icon, Card} from 'semantic-ui-react';

export default class AssistantView extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    return (
      <Card className='assistantView' style={{backgroundColor:'#efebe5'}}>

    <Feed >
        <Feed.Event>
            <Feed.Label image='../../images/avatar.png'/>
            <Feed.Content>
                <Feed.Summary date={this.props.msgDate} user={this.props.userName}/>
                <Feed.Extra text>
                    {this.props.userMessage}
                </Feed.Extra>
                <Feed.Meta>

                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
    </Feed>

    </Card>
);
}
}
