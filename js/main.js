//boundary polygon style
var myStyle0 = function(feature) {
    return {color:'white',fillColor:"T",weight: 1.5,fillOpacity: 0};
};

//circle marker style
var myStyle = function(feature) {
  switch(feature.properties.Descriptor) {
    case "Banging/Pounding": return {
      radius: 1,
      color: "#c83349",
      opacity: 1,
      fillOpacity: 0.8
    };
    case "Loud Music/Party": return {
      radius: 1,
      //fillColor: "#ffcc5c",
      color: "#f2ae72",
      opacity: 1,
      fillOpacity: 0.8
    };
    case 'Loud Talking': return {
      radius: 1,
      color: "#3358c8",
      opacity: 1,
      fillOpacity: 0.8
    };
      default : return {
      radius: 1,
      //fillColor: "#b8a9c9",
      color: "#622569",
      opacity: 1,
      fillOpacity: 0.8
    };
  };
};



//define some functions
var removeMarkers = function() {
    map.eachLayer(function (layer) {
    map.removeLayer(layer);
});
var Stamen_TonerLite = L.tileLayer('https://api.mapbox.com/styles/v1/jiazuo/cjv1q09l53b821flit5ckay28/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamlhenVvIiwiYSI6ImNqdjFyeGFtZjF4bm40ZHF4cDZ6Z3hlaWEifQ.l0ev15iev-Epdyqx7Niimw', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      container: 'after',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20,
      ext: 'png',
      center: [40.7422, -73.9455],
      zoom: 12
    }).addTo(map);

};

//
//All records
$('#Show_All').click(function(){
  removeMarkers();
  $.getJSON("https://raw.githubusercontent.com/kokmi/NYC_noise_3/master/NYC_noise_1month.geojson",
   function(data) {
      L.geoJson(data, {
          pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng, myStyle(feature,latlng))
        }
      }).addTo(map);
  });
});//get geojson data of NYC_noise

$('#Hide_All').click(function(){
	removeMarkers();
	});

  //Filter by Location
$('#Manhattan').click(function(){
    removeMarkers()
    var value = $(this).val();
    $.getJSON("https://raw.githubusercontent.com/kokmi/NYC_noise_3/master/NYC_noise_1month.geojson",
     function(data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) { if (feature.properties.Borough=='MANHATTAN')
              { return L.circleMarker(latlng, myStyle(feature,latlng))}
              }
        }).addTo(map);
    });
});

$('#Brooklyn').click(function(){
    removeMarkers()
    var value = $(this).val();
    $.getJSON("https://raw.githubusercontent.com/kokmi/NYC_noise_3/master/NYC_noise_1month.geojson",
     function(data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) { if (feature.properties.Borough=='BROOKLYN')
              { return L.circleMarker(latlng, myStyle(feature,latlng))}
              }
        }).addTo(map);
    });
});

$('#Bronx').click(function(){
    removeMarkers()
    var value = $(this).val();
    $.getJSON("https://raw.githubusercontent.com/kokmi/NYC_noise_3/master/NYC_noise_1month.geojson",
     function(data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) { if (feature.properties.Borough=='BRONX')
              { return L.circleMarker(latlng, myStyle(feature,latlng))}
              }
        }).addTo(map);
    });
});

$('#Staten_Island').click(function(){
    removeMarkers()
    var value = $(this).val();
    $.getJSON("https://raw.githubusercontent.com/kokmi/NYC_noise_3/master/NYC_noise_1month.geojson",
     function(data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) { if (feature.properties.Borough=='STATEN ISLAND')
              { return L.circleMarker(latlng, myStyle(feature,latlng))}
              }
        }).addTo(map);
    });
});

$('#Queens').click(function(){
    removeMarkers()
    var value = $(this).val();
    $.getJSON("https://raw.githubusercontent.com/kokmi/NYC_noise_3/master/NYC_noise_1month.geojson",
     function(data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) { if (feature.properties.Borough=='QUEENS')
              { return L.circleMarker(latlng, myStyle(feature,latlng))}
              }
        }).addTo(map);
    });
});

//Filter by Responding Agency
$('#mySelect2').change(function(){
  removeMarkers()
  var value = $(this).val();
  $.getJSON("https://raw.githubusercontent.com/kokmi/NYC_noise_3/master/NYC_noise_1month.geojson",
   function(data) {
      L.geoJson(data, {
          pointToLayer: function(feature, latlng) { if (feature.properties['Agency Name']==value)
            {
              return L.circleMarker(latlng, myStyle(feature,latlng))}
            }
      }).addTo(map);
  });
});


//Filter by Complaint Type
$('#mySelect3').change(function(){
  removeMarkers()
  var value = $(this).val();
  $.getJSON("https://raw.githubusercontent.com/kokmi/NYC_noise_3/master/NYC_noise_1month.geojson",
   function(data) {
      L.geoJson(data, {
          pointToLayer: function(feature, latlng) { if (feature.properties['Complaint Type']==value)
            {
              return L.circleMarker(latlng, myStyle(feature,latlng))}
            }
      }).addTo(map);
  });
});
