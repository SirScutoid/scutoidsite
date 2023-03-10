var timeTeller;
var datetime_str;
var date;
var localTimeString;

var header;
var footer;
var basicCard;
var runnerCard;
var citation;

var inTheCloset = true;

window.onload = function() 
{
    timeTeller = document.getElementById("displaying-timezone-time");
    setTimeTellerText();
    setInterval(setTimeTellerText, 1000);

    document.getElementById("runner-box").addEventListener("mouseover", displayRunnerStuff);
    document.getElementById("runner-box").addEventListener("mouseout", unDisplayStuff);

    header = document.getElementsByClassName("main-header")[0];
    footer = document.getElementsByClassName("main-footer")[0];
    basicCard = document.getElementById("basic-card");
    runnerCard = document.getElementById("runner-card");
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
function unDisplayStuff()
{
    document.body.classList.remove("trans-to-blue");
    header.classList.remove("trans-to-runner");
    footer.classList.remove("trans-to-runner");
    citation.style.color = "orange";

    basicCard.classList.remove("move-right");
    runnerCard.classList.remove("move-right");
}