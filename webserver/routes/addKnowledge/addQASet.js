module.exports = function(questionsAnswerSetCreatedCallback) {

    var neo4j = require('neo4j-driver').v1;
    var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "Wilkinson"));

    var query =`CREATE (q:question {keywords:[],questions:[],textAnswer:'',videoAnswer:'',blogAnswer:'',CodeSnippetAnswer:''}) return ID(q)`;
    var session = driver.session();
    session
        .run(query)
        .then(function(result) {
            console.log(result);
            // Completed!
            session.close();
            questionsAnswerSetCreatedCallback(result.records[0]._fields[0].low);
        })
        .catch(function(error) {
            console.log(error);
        });
}
