var jsonObj = $.getJSON( "CDPStations.json", function(data) {
  console.log(data);
  console.log( "Pass" );
})
  .done(function() {
    console.log( "second pass" );
  })
  .fail(function() {
    console.log( "Oh no...error!" );
  })
  .always(function() {
    console.log( "complete" );
  });
 
console.log(jsonObj); 

console.log(jsonObj.responseJson);

jsonObj.always(function() {
  console.log( "Successfully pass!" );
});

jsonObj =  jsonObj.responseJson;
var info = jsonObj.clients;
console.log(info);
var stations = info.stations;
console.log(stations);

const container = document.getElementById('stations');

for(var i = 0; i < stations.length; i++){
  
  var stat = stations[i]; 
 
  const card = document.createElement('div');
  card.classList = "card"; 
  var address = stat.address
  const content = 
  "<div class='card'  id = 'card-" + i + "'>"+
        " <div class='info'>" + 
         "<h1 class = 'title'>" + stat.title + "</h1>" + 
        "<div class = 'about-divider'>" +
        "<p class = 'description'>" + stat.description + "</p>" +
        "<div class = 'address-divider'></div>" +
        "<div class='address' >" + 
        
            "<p class=address-street> Street: " + address.street + "</>" +
            "<p class=address-city> City: " + address.city + "</p>" +
            "<p class=address-state> State: " + address.state + "</p>" +
            "<p class=address-zip> Zip: " + address.zip + "</p>" +
        "</div>" +
        "</div>" +
  "</div>";
  console.log(stat.logo);
  container.innerHTML += content;
  document.getElementById("card-" + i).style.backgroundImage =  'url("' + stat.logo + '")'; 
  document.getElementById("card-" + i).style.backgroundSize = "contain";
  document.getElementById("card-" + i).style.backgroundRepeat = "no-repeat";
  document.getElementById("card-" + i).style.backgroundPosition = "center";
}