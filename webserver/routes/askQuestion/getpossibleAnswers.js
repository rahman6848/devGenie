
module.exports = function (questionKeywords,resultCallback){
  var neo4j = require('neo4j-driver').v1;
  var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "Wilkinson"));

  //var query =`CREATE (q:question {keywords:[],questions:[],textAnswer:'',videoAnswer:'',blogAnswer:'',CodeSnippetAnswer:''}) return ID(q)`;
  let query =`MATCH (q:question) WHERE
    ALL (keyword in ${JSON.stringify(questionKeywords)} where keyword in q.keywords)
    return q`;
  let session = driver.session();
  session
      .run(query)
      .then(function(result) {
          console.log(result);
          // Completed!
          session.close();
          resultCallback(result);
      })
      .catch(function(error) {
          console.log(error);
      });
}
