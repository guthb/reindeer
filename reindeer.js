var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

//loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. 
//The name of the reindeer should be prepended with the corresponding color from the other array.

var data = []

for (var i = 0; i <= reindeer.length; i++) {
    hohohoElement.innerHTML += "<div>"+ colors[i] + " " + reindeer[i] + "</div>";
    console.log(hohohoElement);
    
};



