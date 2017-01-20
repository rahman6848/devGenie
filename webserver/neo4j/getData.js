module.exports = function(successCB) {

    var neo4j = require('neo4j-driver').v1;
    var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "Wilkinson"));

    // Note: Always make sure to close sessions when you are done using them!
    // Create a session to run Cypher statements in.
    var session = driver.session();
    session
        .run("MATCH (t:tutorial {type : {type} }) RETURN t", {
            type: 'general'
        })
        .then(function(result) {
            result.records.forEach(function(record) {
                console.log(record._fields);
            });
            // Completed!
            session.close();
        })
        .catch(function(error) {
            console.log(error);
        });
        successCB('aa');
}
