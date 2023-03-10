var timeTeller;
var datetime_str;
var date;
var localTimeString;

var header;
var footer;
var basicCard;
var runnerCard;
var citation;

window.onload = function() 
{
    timeTeller = document.getElementById("displaying-timezone-time");
    setTimeTellerText();
    setInterval(setTimeTellerText, 1000);

    document.getElementById("runner-box").addEventListener("mouseover", displayRunnerStuff);
    document.getElementById("runner-box").addEventListener("mouseout", unDisplayRunnerStuff);

    header = document.getElementsByClassName("main-header")[0];
    footer = document.getElementsByClassName("main-footer")[0];
    basicCard = document.getElementById("basic-card");
    runnerCard = document.getElementById("runner-card");
    citation = document.getElementsByClassName("citation")[0];

    runnerCard.style.display = "none";
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
    document.body.style.backgroundColor = "#5c6bc0";
    header.style.backgroundImage = "url('images/runnerBg.png')";
    footer.style.backgroundImage = "url('images/runnerBg.png')";
    basicCard.style.display = "none";
    runnerCard.style.display = "block";
    citation.style.color = "#6a1b9a";

}
function unDisplayRunnerStuff()
{
    document.body.style.backgroundColor = "cornsilk";
    header.style.backgroundImage = "url('images/orangeBg.png')";
    footer.style.backgroundImage = "url('images/orangeBg.png')";
    basicCard.style.display = "block";
    runnerCard.style.display = "none";
    citation.style.color = "orange";
}