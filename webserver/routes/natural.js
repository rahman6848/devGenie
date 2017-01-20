var express = require('express');
var natural = require('natural');
var pos = require('pos');
var router = express.Router();

var input = `React is a UI library developed at Facebook to facilitate the creation of interactive, stateful & reusable UI components. It is used at Facebook in production, and Instagram.com is written entirely in React.`;
    input=input.toUpperCase();
/* GET users listing. */
router.get('/', function(req, res, next) {
    //var input = input.toUpperCase();
    var output=[];
    var nouns= ['NN','NNP','NNPS','NNS'];
    var verbs =['VB','VBD','VBG','VBN','VBP'];
    var adjective=['JJ','JJR','JJS'];
    var words = new pos.Lexer().lex(input);
    var tagger = new pos.Tagger();
    var taggedWords = tagger.tag(words);
    for (i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var stemmedWord=natural.PorterStemmer.stem(word);
    var tag = taggedWord[1];
    if(word=='REACT'){
      output.push({word:word,pos:'noun'});
    }
    else if(nouns.indexOf(tag) > -1){
        output.push({word:word,pos:'noun'});
    }
    else if(verbs.indexOf(tag) > -1){
      output.push({word:word,pos:'verb'});
    }
    else if (adjective.indexOf(tag) > -1){
      output.push({word:word,pos:'adjective'});
    }
}
    res.send(output);
});

module.exports = router;
