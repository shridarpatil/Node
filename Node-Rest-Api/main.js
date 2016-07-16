module.exports = function(app){
var bodyParser = require('body-parser');

var db = require('./db');


app.use(bodyParser.json());	 

app.get('/',function(req,res){
    res.send('Hello world');
});

app.get('/login', function( req, res ){

	console.log(req.query.userName);
	res.send('login'+req.query.userName);

	db.end();
	console.log("connection closed");

});


app.post('/register', function(req, res){
 	//console.log(req.body);
 	var query = db.query('insert into wp_user set ?', req.body, function(err, result){
 		if(err){
 			throw err;
 		}

 		console.log(result)
 	});

	res.send("Successufully inserted into database");
	db.end();
	console.log("connection closed");

});


app.get('/getData', function(req,res){

	var query = db.query('select * from wp_user', function(err, result){
		if(!err){
			res.send(result);
		}
	});

	db.end();
	console.log("connection closed");

});

app.post('/readJson', function(req, res){

	var fs = require('fs');
	var obj = JSON.parse(fs.readFileSync('file.json', 'utf8'));
	Async:

	var obj;
		fs.readFile('/var/www/html/ganttchart/samples/common/data.json', 'utf8', function (err, data) {
		  //if (err) throw err;
		  obj = JSON.parse(data);
		  console.log(obj.data)
		  console.log(req.body.data.length)
	      
	      for(i=0; i<req.body.data.length; i++){
		  obj.data.push(req.body.data[i]);
		}

		for(i=0; i<req.body.links.length; i++){
		  obj.links.push(req.body.links[i]);
		}

			fs.writeFile('/var/www/html/ganttchart/samples/common/data.json', JSON.stringify(obj, null, 4), function (err) {
		  		if (err) return console.log(err);
		  		console.log('Json > file.json');
			});
	
		});

		res.send("Successufully inserted into database");
	})

}