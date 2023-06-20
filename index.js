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

var inTheCloset = false;

//auth code: becdde80563a4b20276982b24bd36d5ce41d1c83
//refresh token: b7b10bac2fa6499373667b57bb917bf36f9c90d6
const AUTHLINK = "https://www.strava.com/oauth/token"

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

    reAuthorize();
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
    return (meters * 0.000621371).toString().substring(0,6);
}
function seconds2hours(seconds)
{
    return (seconds/3600).toString().substring(0,6);
}

function getMetersRan(res)
{
    const milesLink = `https://www.strava.com/api/v3/athletes/82469952/stats?access_token=${res.access_token}`;
    fetch(milesLink)
        .then((res) => res.json())
            .then(res => setRunnerData(res.recent_run_totals));
}

function setRunnerData(totals)
{
    document.getElementById("recent-miles").innerHTML = meters2miles(totals.distance);
    document.getElementById("recent-hours").innerHTML = seconds2hours(totals.elapsed_time);
}

function reAuthorize()
{
    fetch(AUTHLINK,{
        method: "post",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            client_id: "103780",
            client_secret: "c45794b820b3423b88d84dd56219449966ccd4a6",
            refresh_token: "b7b10bac2fa6499373667b57bb917bf36f9c90d6",
            grant_type: "refresh_token"
        })
    }).then(res => res.json())
        .then(res => getMetersRan(res));
}