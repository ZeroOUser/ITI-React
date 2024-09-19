function initMap(targetLat, targetLon) {
  const myLatLng = { lat: targetLat, lng: targetLon };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;
function initLocation() {
  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos) {
    initMap(pos.coords.latitude, pos.coords.longitude);
  }

  function error(e) {
    alert(e.message);
  }
}

function getLocation(countryName) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open(
      "GET",
      `https://nominatim.openstreetmap.org/search?format=json&q=${countryName}`
    );
    req.send();

    req.onload = function () {
      if (req.status >= 200 && req.status < 300) {
        resolve(JSON.parse(req.responseText)[0]);
      } else {
        reject("Error retrieving location");
      }
    };

    req.onerror = function () {
      reject("Request failed");
    };
  });
}

countrySelect.addEventListener("change", function () {
  getLocation(countrySelect.value)
    .then(function (location) {
      console.log(location); // For debugging, check if location is fetched
      initMap(parseFloat(location.lat), parseFloat(location.lon));
    })
    .catch(function (error) {
      console.error(error);
    });
});
