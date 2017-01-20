var path = require('path');
var webpack = require('webpack');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var scrapper = require('./webserver/routes/scrapper');
var natural = require('./webserver/routes/natural');
var addKnowledge=require('./webserver/routes/addKnowledge/question');
var askQuestion = require('./webserver/routes/askQuestion/processQuestion');
var app = express();
var compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, './webclient/')));

//Mongoose
//var db = 'mongodb://localhost/test';
// var for windows db url
var db= 'mongodb://vishalbisht7201@gmail.com:Wilkinson7201@ds013014.mlab.com:13014/vishalbisht'
mongoose.connect(db);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connnected with mongo");
});


app.use('/',scrapper);
//Ruotes
app.use('/natural',natural);
app.use('/qa',addKnowledge);

app.use('/askQuestion',askQuestion);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
}));

app.use(webpackHotMiddleware(compiler));


//Listening to port 8080
app.listen(8081, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }

    console.log("Server started at 8081");
});
