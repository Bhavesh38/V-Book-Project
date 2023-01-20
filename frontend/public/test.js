//create the meeting and pass the response to another function.
function createMeeting() {
  //scheduledDateTime and meetingName
  var date = moment().format("ddd MMM D YYYY HH:mm:ss Z");
  var prettyDate = moment().format("MMMM Do YYYY, h:mm:ss A");
  var meetingName = prettyDate;
  //scheduledTimeZone
  var zoneName = moment.tz.guess();
  var timezone = moment.tz(zoneName).zoneAbbr();
  var zoneOffset = moment().format("Z");
  var scheduledZone = timezone + "/UTC" + zoneOffset;
  //change button appearance after click
  var createButton = document.getElementById("createButton");
  createButton.classList.add("disabled", "loading");
  //make request to graphql api server
  fetch("https://app-123.megameeting.com/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      apiToken: "RA7CJPX025THH4XPZMMZP3UZ2PKSBIGG",
    },
    body: JSON.stringify({
      query:
        'mutation{createMeeting(input:{meetingName:"' +
        meetingName +
        '",   scheduledDateTime:"' +
        date +
        '",scheduledTimeZone:"' +
        scheduledZone +
        '",enableTwilio: 1,}){result}}',
    }),
  })
    .then((r) => r.json())
    .then((data) => populateText(data));
}
