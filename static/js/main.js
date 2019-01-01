
const baseurl = "http://localhost:3000/";

window.addEventListener("load", () => {
  const nextEventTitle = $("#nextevent-title");
  const nextEventDate= $("#nextevent-date");
  const nextEventDesc= $("#nextevent-desc");

    console.log("Getting");
  fetch(baseurl + "events/next")
    .then(data => {
     return data.json();
    })
    .then(myEvent => {
      console.log(JSON.stringify(myEvent,null," "));
      nextEventTitle.html(myEvent.name);
      nextEventDate.html(myEvent.date)
      nextEventDesc.html(myEvent.description)
    })
    .catch(error => {
      console.log(error);
    });
});
