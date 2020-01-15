var express = require('express');
var app = express();

app.get('/', function (req, res) {
  switch(req.headers["x-code"]) {
    case "200":
      res.sendfile("views/index.html");
      break;
    case "400":
      res.sendfile("views/400.html");
      break;
    case "401":
      res.sendfile("views/401.html");
      break;
    case "403":
      res.sendfile("views/403.html");
      break;
    case "404":
      res.sendfile("views/404.html");
      break;
    case "405":
      res.sendfile("views/405.html");
      break;
    case "408":
      res.sendfile("views/408.html");
      break;
    case "410":
      res.sendfile("views/410.html");
      break;
    case "418":
      res.sendfile("views/418.html");
      break;
    case "500":
      res.sendfile("views/500.html");
      break;
    case "501":
      res.sendfile("views/501.html");
      break;
    case "502":
      res.sendfile("views/502.html");
      break;
    case "503":
      res.sendfile("views/503.html");
      break;
    case "504":
      res.sendfile("views/504.html");
      break;
    case "511":
      res.sendfile("views/511.html");
      break;
    default:
      res.sendfile("views/404.html");
      break;
  }
});
app.use(function(req, res){
  res.sendfile("views/index.html");
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
