window.onload = function() { 
                BoxFill(); 
             // ButtonPush();             
}


function getJsonFromUrl1() {
  var query = location.search.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}


var obj = getJsonFromUrl1();


//console.log(getJsonFromUrl1());

function BoxFill() {

var search = document.getElementById("search").value = getJsonFromUrl1().search;
var ticket_id = document.getElementById("ticket_id").value = getJsonFromUrl1().ticket_id;
var headline = document.getElementById("headline").value = getJsonFromUrl1().headline;

}

/*
console.log(getJsonFromUrl1().search);
console.log(getJsonFromUrl1().ticket_id);
console.log(getJsonFromUrl1().headline);
*/
//BoxFill();

function ButtonPush() {
    document.getElementById("searchButton").click();
    alert("klik klik");
}

window.onload = function(){
    ButtonPush();
}