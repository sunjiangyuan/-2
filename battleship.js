var view = {
    displayMessage: function(msg) {
        var messageArea= document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class","hit");
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class","miss");
    }  
}
view.displayMiss("00")
view.displayHit("34")
view.displayMiss("55")
view.displayHit("12")
view.displayMiss("25")
view.displayHit("26")

var model = {
    boardSize: 7,
    numberShip: 3,
    shipsSunk: 0,
    shipLength: 3,
    ships: [
        {location: ["06","06","06",]}
    ]
}