var gameSelectorButtons = [];
var games = [];

window.onload = function()
{
    gameSelectorButtons = document.getElementsByClassName("game-selector");
    games = document.getElementById("game-player").children;

    for(var i = 0; i< gameSelectorButtons.length; i++)
    {
        gameSelectorButtons[i].addEventListener("click", setGame);
    }
}

function setGame(event)
{
    var eventIndex = myIndexOf(gameSelectorButtons, event);
    console.log("eventIndex: "+eventIndex);
    for(var i = 0; i< games.length; i++)
    {
        games[i].classList.remove("selected-game");
    }
    if(eventIndex > 0)
    {
        games[eventIndex - 1].classList.add("selected-game");
    }
}

function myIndexOf(collection, target) {
    var index;
    for(var i = 0; i < collection.length; i++){
       if(collection[i] == target){
          index = i;
          return index;
        }
    }
}