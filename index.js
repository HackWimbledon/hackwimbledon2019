var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  const bodyParser = require('body-parser');




  const EventsRouter = require('./events/routes.config');

  app.use(bodyParser.json());
  EventsRouter.routesConfig(app);

  app.listen(port, () => {
 console.log("Server running on port 3000");
});

