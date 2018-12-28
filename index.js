var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

const EventsRouter = require("./events/routes.config");

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

EventsRouter.routesConfig(app);

app.listen(port, () => {
  console.log("Server running on port 3000");
});


