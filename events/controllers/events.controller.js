var _ = require("lodash");

const EventModel = require("../models/events.model");

exports.getNextEvent = (req, res) => {
  EventModel.getNextEvent().then(result => {
    res.status(200).send(result.results[0]);
  });
};

exports.getPastEvents = (req, res) => {
  var itemcount = 5;
  EventModel.getPastEvents(itemcount).then(result => {
    res.status(200).send(result.results);
  });
};
