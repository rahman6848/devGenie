import React from 'react';
import ReactDOM from 'react-dom';
import AssistantUserView from './assistantUserView';
import AssistantGinniView from './assistantGinniView';
import {Input, Form, Divider, Segment, Container} from 'semantic-ui-react';
import {Scrollbars} from 'react-custom-scrollbars';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class AssistantChatContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            messages: [< AssistantGinniView />]
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    componentDidMount() {

        // Scroll to the bottom on initialization
        var len = this.state.messages.length - 1;
        const node = ReactDOM.findDOMNode(this['_div' + len]);
        if (node) {
            node.scrollIntoView();
        }
    }

    componentDidUpdate() {
        // Scroll as new elements come along
        var len = this.state.messages.length - 1;
        const node = ReactDOM.findDOMNode(this['_div' + len]);
        if (node) {
            node.scrollIntoView();
        }
    }

    handleUserInput(e) {
        e.preventDefault();
        let message = {};
        message.value = ReactDOM.findDOMNode(this.refs.userInput).value;
        message.date = new Date().toLocaleString();
        message.user = 'You';
        this.state.messages.push(message);
        let msgs = this.state.messages;
        ReactDOM.findDOMNode(this.refs.userInput).value = ''
        this.setState({messages: msgs});
    }

    render() {
        let messages = this.state.messages.map((msg, index) => {
            return (
                <div><ReactCSSTransitionGroup transitionName = "example"
                         transitionAppear = {true} transitionAppearTimeout = {500}
                         transitionEnter = {false} transitionLeave = {false}>

                    <AssistantUserView key={index} msgDate={msg.date} userName={msg.user} userMessage={msg.value}/>
                    <AssistantGinniView ref={(ref) => this['_div' + index] = ref}/>
</ReactCSSTransitionGroup>
                </div>
            );
        });

        return (
          <div>

            <Segment floated='left' size='large' width={'100%'} inverted raised style={{marginTop:'0px'}}>
                <Segment style={{backgroundImage:"url('../../images/chatbackground.jpeg')"}}>
                    <Scrollbars renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{
                        display: "none"
                    }}/>} autoHeight autoHeightMin={400}>
                         {messages}
                    </Scrollbars>
                </Segment>

                    <Form onSubmit={this.handleUserInput}>
                        <input autoComplete="off" type='text'  autoHeight name='userInput' ref='userInput' placeholder='enter your question'/>
                    </Form>

            </Segment>



            </div>
        );
    }
}
