var express = require('express');
var app = express();

app.get('/', function (req, res) {
  switch(req.headers["x-code"]) {
    case "200":
      res.status(200).sendfile("views/index.html");
      break;
    case "400":
      res.status(400).sendfile("views/400.html");
      break;
    case "401":
      res.status(401).sendfile("views/401.html");
      break;
    case "403":
      res.status(403).sendfile("views/403.html");
      break;
    case "404":
      res.status(404).sendfile("views/404.html");
      break;
    case "405":
      res.status(405).sendfile("views/405.html");
      break;
    case "408":
      res.status(408).sendfile("views/408.html");
      break;
    case "410":
      res.status(410).sendfile("views/410.html");
      break;
    case "418":
      res.status(418).sendfile("views/418.html");
      break;
    case "500":
      res.status(500).sendfile("views/500.html");
      break;
    case "501":
      res.status(501).sendfile("views/501.html");
      break;
    case "502":
      res.status(502).sendfile("views/502.html");
      break;
    case "503":
      res.status(503).sendfile("views/503.html");
      break;
    case "504":
      res.status(504).sendfile("views/504.html");
      break;
    case "511":
      res.status(511).sendfile("views/511.html");
      break;
    default:
      res.status(404).sendfile("views/404.html");
      break;
  }
});
app.use(function(req, res){
  res.sendfile("views/index.html");
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
