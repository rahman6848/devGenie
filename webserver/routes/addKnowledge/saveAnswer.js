module.exports = function(nodeID,answer,type,successCB,failureCB) {

    var neo4j = require('neo4j-driver').v1;
    var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "Wilkinson"));

    //creating query to add question keywords to specific question set
    var query =`MATCH (q:question) where ID(q)=${nodeID}
                SET
                q.${type}=${JSON.stringify(answer)}`;

    var session = driver.session();
    session
        .run(query)
        .then(function(result) {
          console.log("******************************");
            console.log(result);
            // Completed!
            session.close();
            successCB();
        })
        .catch(function(error) {
            console.log(error);
            failureCB();
        });
}
