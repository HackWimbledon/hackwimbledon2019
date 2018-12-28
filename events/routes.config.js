const EventsController = require('./controllers/events.controller');

exports.routesConfig = function (app) {
    app.get('/events/next/', [
        EventsController.getNextEvent
    ]);
    app.get('/events/past/', [
        EventsController.getPastEvents
    ]);
}