import React from 'react';
import {
    Container,
    Header,
    Divider,
    Card,
    Button,
    Image,
    TextArea,
    Grid,
    Segment,
    Icon,
    Label
} from 'semantic-ui-react';
import Config from '../../../../config/url';
import QuestionsAnswer from './questionsAnswer';
import AddQuestionAnswerSet from './addQuestionsAnswerSet';

export default class QuestionSetDisplay extends React.Component {

    constructor() {
        super();
        this.addNewQuestionAnswerSet = this.addNewQuestionAnswerSet.bind(this); //function to add a new AI rule block to screen
        this.removeQuestionAnswerSet = this.removeQuestionAnswerSet.bind(this);
        this.state = {
            questionsAnswerSet: []
        }
    }
    //component did mount function here we will be making an ajax call to fetch existing question in Graph database
    /*componentDidMount(){
      let url =Config.url+'/getQASets';
      Axios.get(url).
      then((response)=>{

      }).
      catch(()=>{

      });
    }*/
    // handler called by addQuestionAnswerSet to pass id and re render display
    addNewQuestionAnswerSet(id){
      this.state.questionsAnswerSet.push(<QuestionsAnswer questionsAnswerSetID={id} handlerRemoveQuestionAnswerSet={this.removeQuestionAnswerSet}/>);
      this.setState({questionsAnswerSet:this.state.questionsAnswerSet})
    }
    removeQuestionAnswerSet(index) {
        this.state.questionsAnswerSet.splice(index, 1);
        this.setState({questionsAnswerSet: this.state.questionsAnswerSet}); //re render after remving an rule block
    }
    render() {
        let questionsAnswerSet = this.state.questionsAnswerSet.map(function(questionsSet, index) {
            return questionsSet
        });
        return (
            <Grid style={{
                width: '95%',
                margin: 'auto'
            }}>
                <Grid.Row columns={1}>
                    <div style={{
                        width: '100%'
                    }}>
                        <h2>Add Intelligence</h2>
                        <p>It is a set of questions and the corresponding bot replies. Ginni will understand user questions similar to those you’ve set up and reply with a appropiate answer.</p>
                        <Divider fitted/>
                    </div>
                </Grid.Row>
                <Grid.Row>
                  <AddQuestionAnswerSet handlerNewQuestionsAnswerSet={this.addNewQuestionAnswerSet}/>
                </Grid.Row>
                <Grid.Row>
                    {questionsAnswerSet}
                </Grid.Row>
            </Grid>
        );
    }
}
