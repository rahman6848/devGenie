module.exports = function(questionKeywords,question,nodeID) {

    var neo4j = require('neo4j-driver').v1;
    var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "Wilkinson"));

    //creating query to add question keywords to specific question set
    var query =`MATCH (q:question) where ID(q)=${nodeID}
                SET
                q.keywords=q.keywords+${JSON.stringify(questionKeywords)},
                q.questions=q.questions+[${JSON.stringify(question)}]`;
    console.log(query);
    var session = driver.session();
    session
        .run(query)
        .then(function(result) {
            console.log(result);
            // Completed!
            session.close();
        })
        .catch(function(error) {
            console.log(error);
        });
}
