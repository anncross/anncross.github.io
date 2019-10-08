var jsonObj = {
  clients: {
    company: "CDP",
    stations: [
      {
        title: "DPTV (WTVS-Detroit)",
        description:
          "WTVS, virtual channel 56, is a Public Broadcasting Service member television station licensed to Detroit, Michigan, United States. The station is owned by the Detroit Educational Television Foundation.",
        logo:
          "https://bento.cdn.pbs.org/hostedbento-prod/filer_public/logos-dptv/DetroitPublicTV.png",
        address: {
          street: "1 Clover Ct",
          city: "Wixom",
          state: "Michigan",
          zip: "48393"
        }
      },
      {
        title: "WyomingPBS (KCWS)",
        description:
          "Wyoming PBS is the Public Broadcasting Service member network in the state of Wyoming. It currently consists of flagship KCWC-DT, channel 4 in Riverton; full-power satellites KWYP-DT, channel 8 in Laramie and KPTW, channel 6 in Casper; and over 35 low-power translator stations across the state.",
        logo: "https://communitycolleges.wy.edu/wp-content/uploads/2018/01/wy.pbs_.png",
        address: {
          street: "2660 Peck Ave",
          city: "Riverton",
          state: "Wyoming",
          zip: "82501"
        }
      },
      {
        title: "KLVX (Vegas PBS)",
        description:
          "KLVX, virtual channel 10, is a Public Broadcasting Service member television station licensed to Las Vegas, Nevada, United States. The station is owned by the Clark County School District, and is the flagship member of the district's communications arm, the KLVX Communications Group.",
        logo:
          "https://d1qbemlbhjecig.cloudfront.net/prod/filer_public/klvx-bento-live-pbs/vegas_pbs/newsroom/photos/8d40b013b6_16-9%20VegasPBS-50thAnniversary-Logo-4c.png",
        address: {
          street: "3050 E. Flamingo Road",
          city: "Las Vegas",
          state: "Nevada",
          zip: "89121"
        }
      },
      {
        title: "KUHT (HPMF-Houston Public Media)",
        description:
          "KUHT, virtual and VHF digital channel 8, is a Public Broadcasting Service member television station licensed to Houston, Texas, United States. Owned by the University of Houston System, it is sister to National Public Radio member station KUHF.",
        logo:
          "https://cdn.hpm.io/assets/images/HPM_OneLine_UH.png",
        address: {
          street: "4343 Elgin",
          city: "Houston",
          state: "Texas",
          zip: "77204"
        }
      },
      {
        title: "SOPTV (Southern Oregon)",
        description:
          "Southern Oregon Public Television is the Public Broadcasting Service member network for most of the southwest region of the U.S. state of Oregon. It operates KSYS in Medford and full-time satellite KFTS in Klamath Falls. Studios are located on South Fir Street in downtown Medford.",
        logo:
          "https://www.soptv.org/wp-content/themes/soptv/assets/img/soptv-logo.png",
        address: {
          street: "28 South Fir Street, Ste. 200",
          city: "Medford",
          state: "Oregon",
          zip: "97501"
        }
      }
    ]
  }
};


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