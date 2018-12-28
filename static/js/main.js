
const baseurl = "http://localhost:8080/";

window.addEventListener("load", () => {
  const el = $("#nextevent");
    console.log("Getting");
  fetch(baseurl + "getNextEvent")
    .then(data => {
      console.log(data.json);
    })
    .catch(error => {
      console.log(error);
    });
 // el.html(html);
});
