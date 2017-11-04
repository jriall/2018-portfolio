
  //Cover video pauses after 20 seconds to save using CPU excessively
  const video = document.getElementById("fullscreen-background-video");

  setTimeout(function() {
    video.pause();
  }, 20000);

  //Initialise Google Maps API
  //load google maps api
  function init_map() {
    const myOptions = {
      zoom: 11,
      center: new google.maps.LatLng(51.459779, -0.180647),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    };
    map = new google.maps.Map(
      document.getElementById("google-maps-container"),
      myOptions
    );
    marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(51.459779, -0.180647)
    });
  }

  //Call Google Maps API
  google.maps.event.addDomListener(window, "load", init_map);

  //Handling Google Forms submission
  // let submitted = false;
  //   $("#gform").on("submit", function(e) {
  //     $("#gform *").fadeOut(2000);
  //     $("#gform").prepend("<p>Your submission has been processed...</p>");
  //   });


const webApp = "https://script.google.com/macros/s/AKfycbyYUNDlejQDCXL0ZXX1F49rhcgy_gVDI3KusUVZB0kdE4CLYvk/exec";