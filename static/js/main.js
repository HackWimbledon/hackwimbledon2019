
const baseurl = "http://localhost:3000/";

window.addEventListener("load", () => {
  const el = $("#nextevent");
    console.log("Getting");
  fetch(baseurl + "events/next")
    .then(data => {
     return data.json();
    })
    .then(myEvent => {
      console.log(JSON.stringify(myEvent));
      el.html(myEvent.description)
    })
    .catch(error => {
      console.log(error);
    });
});
