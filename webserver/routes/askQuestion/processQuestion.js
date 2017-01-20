let express = require('express');
let router = express.Router();
let keywordExtractor=require('keyword-extractor');
let getPossibleAnswers = require('./getPossibleAnswers');
let selectBestPossibleAnswer = require('./selectBestPossibleAnswer');


router.get('/',function(req,res){
  let possibleQuestionsAnswers =[];
  let question = req.query.question;

  //split the question into keywords
  let questionKeywords = keywordExtractor.extract(question,{
    language:'english',
    remove_digits:true,
    return_changed_case:true,
    remove_duplicates:true
  });

  let resultCallback= function(result){
    // to store the result from getPossibleAnswers function
    possibleQuestionsAnswers= result.records.map(function(record){
      return record._fields[0].properties;
    });
    // function to select best possible answer
     let reply = selectBestPossibleAnswer(question,possibleQuestionsAnswers);
     res.json(reply);
  }

  getPossibleAnswers(questionKeywords,resultCallback);
});

module.exports = router;
