//let neo4j = require('neo4j');
let neo4j = require('neo4j-driver');

let neo4jconnection = (function(){
  let dbconn;
  let boltDBconn;
  function connectToDB(){
    console.log('graph db connect');
    return new neo4j.GraphDatabase('http://username:password@l192.168.0.33:7474');
  }
  function connectBoltConnection(){
    console.log('bolt connection');
  //  let driver = neo4jDriver.v1.driver("bolt://192.168.0.33", neo4jDriver.auth.basic("neo4j", "neo4j"));
var driver = neo4j.v1.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));

    return driver.Session();
  }
  return {
    getConnection:function(){
      return connectToDB();
    }
  }
})();

module.exports=neo4jconnection;
