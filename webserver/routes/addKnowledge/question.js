let express = require('express');
let keywordExtractor=require('keyword-extractor');
let pos =require('pos');
let SaveQuestion = require('./SaveQuestion');
let AddQABlock = require('./addQASet');
let SaveAnswer = require('./saveAnswer');
let router = express.Router();
// add a question to the database
router.post('/addQuestion', function(req, res) {
    let question = req.body.question;
    let nodeID = req.body.nodeID;
    //let words=[];
    // extract the main words from the sentence
    let questionKeywords = keywordExtractor.extract(question,{
      language:'english',
      remove_digits:true,
      return_changed_case:true,
      remove_duplicates:true
    });
    SaveQuestion(questionKeywords,question,nodeID);
    res.send('Saved');
});

//router to add a question answer set to Ginni knowledge base
router.post('/addQuestionAnswerSet',function(req,res){

  // callback when a new question answet set will be created
  let questionsAnswerSetCreatedCallback=function(id){
    //unique id given to each questionsAnswerSet
    res.json({id:id});
  }
  AddQABlock(questionsAnswerSetCreatedCallback);
});

//route to add answer to a given question answer set
router.post('/addAnswer',function(req,res){
  let questionsAnswerSetID=req.body.id;
  let answer = req.body.answer;
  let type = req.body.type;
  // callback to be called when answer is saved to the neo4j database
  let successCB=function(response){
    res.json({saved:true});
  }
  let failureCB=function(response){
    res.json({saved:false})
  }
  //function call to save answer to it questionsAnswerSetID
  SaveAnswer(questionsAnswerSetID,answer,type,successCB,failureCB);
});


module.exports = router;
