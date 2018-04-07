var app = require('./config/server');
var conn = require('./config/connection')();

app.get('/', function(req, res) {
  res.render("index");
});

app.post('/', function(req, res) {
var user = req.body;
  conn.query('INSERT INTO user SET ?', user, function(error, result){
    res.redirect('/users');
  });
});

app.get('/users', function(req, res) {
  conn.query("SELECT * FROM user;", function(error, result){
      console.log(result);
      res.render("users",  { users : result });
  });
});

app.listen(3000, function() {
  console.log("Server Online!");
});
