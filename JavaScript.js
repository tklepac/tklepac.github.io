window.onload = function() { 
                BoxFill(); 
                ButtonPush();
              //  document.getElementById("searchButton").click();
              
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




/*
function getJsonFromUrl(hashBased) {
  var query;
  if(hashBased) {
    var pos = location.href.indexOf("?");
    if(pos==-1) return [];
    query = location.href.substr(pos+1);
  } else {
    query = location.search.substr(1);
  }
  var result = {};
  query.split("&").forEach(function(part) {
    if(!part) return;
    part = part.split("+").join(" "); // replace every + with space, regexp-free version
    var eq = part.indexOf("=");
    var key = eq>-1 ? part.substr(0,eq) : part;
    var val = eq>-1 ? decodeURIComponent(part.substr(eq+1)) : "";
    var from = key.indexOf("[");
    if(from==-1) result[decodeURIComponent(key)] = val;
    else {
      var to = key.indexOf("]",from);
      var index = decodeURIComponent(key.substring(from+1,to));
      key = decodeURIComponent(key.substring(0,from));
      if(!result[key]) result[key] = [];
      if(!index) result[key].push(val);
      else result[key][index] = val;
    }
  });
  return result;
}
*/




var obj = getJsonFromUrl1();


//console.log(getJsonFromUrl1());

function BoxFill() {

var search = document.getElementById("search1").value = getJsonFromUrl1().search1;
var ticket_id = document.getElementById("ticket_id1").value = getJsonFromUrl1().ticket_id1;
var headline = document.getElementById("headline1").value = getJsonFromUrl1().headline1;

}




/*
console.log(getJsonFromUrl1().search1);
console.log(getJsonFromUrl1().ticket_id);
console.log(getJsonFromUrl1().headline1);
*/
BoxFill();

function ButtonPush() {
    document.getElementById("searchButton").click();
}
console.log(ButtonPush);
