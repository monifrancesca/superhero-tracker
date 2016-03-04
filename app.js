var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var hero = require('./routes/hero');


// catch-all route for static files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// get hero route

app.use('/hero', hero);


// new way to catch-all route for static files - does not go into sub directories - more specific about what you're allowing to be served
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

// old way  to do the catch-all
/*app.get('/!*', function(req, res) {
 console.log("Here is the request: " , req.params);
 var file = req.params[0] || '/views/index.html';
 res.sendFile(path.join(__dirname, './public/', file));
 });*/


app.set('port', process.env.PORT || 4242);
app.listen(app.get('port'), function() {
    console.log('Server is ready on port ' + app.get('port'));
});


/*

 CREATE TABLE tasks (
 id SERIAL PRIMARY KEY,
 task_content VARCHAR(250) NOT NULL,
 created_date TIMESTAMP DEFAULT now() NOT NULL,
 completed_date TIMESTAMP DEFAULT NULL
 );


 INSERT INTO tasks(task_content) VALUES ('test');

 SELECT * tasks
 */