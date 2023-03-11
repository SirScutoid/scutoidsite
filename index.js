var timeTeller;
var datetime_str;
var date;
var localTimeString;

var header;
var footer;
var basicCard;
var runnerCard;
var devCard;
var citation;

var inTheCloset = true;

// Configure OAuth2 access token for authorization: strava_oauth
/*var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR ACCESS TOKEN"

var stravaApi = new StravaApiV3.AthletesApi()

var id = 82469952; // {Long} The identifier of the athlete. Must match the authenticated athlete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
stravaApi.getStats(id, callback);*/

window.onload = function() 
{
    timeTeller = document.getElementById("displaying-timezone-time");
    setTimeTellerText();
    setInterval(setTimeTellerText, 1000);

    document.getElementById("runner-box").addEventListener("mouseover", displayRunnerStuff);
    document.getElementById("runner-box").addEventListener("mouseout", unDisplayStuff);
    document.getElementById("runner-box").addEventListener("touchstart", displayRunnerStuff)
    document.getElementById("runner-box").addEventListener("touchend", unDisplayStuff);
    document.getElementById("dev-box").addEventListener("mouseover", displayDevStuff);
    document.getElementById("dev-box").addEventListener("mouseout", unDisplayStuff);
    document.getElementById("dev-box").addEventListener("touchstart", displayDevStuff)
    document.getElementById("dev-box").addEventListener("touchend", unDisplayStuff);

    header = document.getElementsByClassName("main-header")[0];
    footer = document.getElementsByClassName("main-footer")[0];
    basicCard = document.getElementById("basic-card");
    runnerCard = document.getElementById("runner-card");
    devCard = document.getElementById("dev-card");
    citation = document.getElementsByClassName("citation")[0];

    if(inTheCloset)
        document.getElementsByClassName("basic-info")[0].innerHTML = "placeholder";
    //runnerCard.style.display = "none";
}

function setTimeTellerText()
{
    datetime_str = new Date().toLocaleString("en-US", { timeZone: "America/New_York"});
    date = new Date(datetime_str);
    localTimeString = date.toLocaleTimeString(undefined, {
        hour:   '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    timeTeller.innerText = localTimeString;
}

function displayRunnerStuff()
{
    document.body.classList.add("trans-to-blue");
    header.classList.add("trans-to-runner");
    footer.classList.add("trans-to-runner");
    citation.style.color = "#6a1b9a";

    basicCard.classList.add("move-right");
    runnerCard.classList.add("move-right");
}
function displayDevStuff()
{
    document.body.classList.add("trans-to-green");
    header.classList.add("trans-to-dev");
    footer.classList.add("trans-to-dev");
    citation.style.color = "#fdd835";

    basicCard.classList.add("move-right");
    devCard.classList.add("move-right");
}
function unDisplayStuff()
{
    document.body.classList.remove("trans-to-blue");
    document.body.classList.remove("trans-to-green");
    header.classList.remove("trans-to-runner");
    footer.classList.remove("trans-to-runner");
    header.classList.remove("trans-to-dev");
    footer.classList.remove("trans-to-dev");
    citation.style.color = "orange";

    basicCard.classList.remove("move-right");
    runnerCard.classList.remove("move-right");
    devCard.classList.remove("move-right");
}

function meters2miles(meters)
{
    return 1,609.344 * meters;
}