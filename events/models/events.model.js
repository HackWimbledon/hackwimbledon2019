var meetup = require("meetup-node")(process.env.MEETUP_API_KEY);

const groupurlname="hackwimbledon"

exports.getNextEvent = () => {
    var data={ group_urlname: groupurlname }
    return meetup.events2.getEvents(data);
};

exports.getPastEvents = (itemcount) => {
    var data={ group_urlname: groupurlname, status: "past", desc:true, page:itemcount }
    return meetup.events2.getEvents(data);
}