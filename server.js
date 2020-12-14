var express = require("express");
var app = express();

//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/www'));

app.get('*', function (request, response) {
  response.sendFile('index.html', {
    root: './www'
  });
});

var port = process.env.PORT || 5001
app.listen(port, function () {
  console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
