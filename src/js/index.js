//variable setup for hiding and revealing projects
let projectsHidden = true;

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

//fading in the navbar by increasing opacity as we scroll down the page.
window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  let windowHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  let scrollRatio = offset / windowHeight;

  //getting width of window, so we don't fade out for mobiles
  let windowWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  //changing the transparency
  if (windowWidth > 768) {
    document.getElementById(
      "nav"
    ).style.backgroundColor = `rgba(111,189,141, ${scrollRatio})`;
  }

  //adding and removing a white bottom border once scrolled below the fold
  if (scrollRatio > 1) {
    document.getElementById("nav").classList.add("shadow");
  } else {
    document.getElementById("nav").classList.remove("shadow");
  }
});

//making sure that a small screen has a solid background for instance of user resizing browser screen.
window.onresize = function() {
  let windowWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  if (windowWidth < 768) {
    document.getElementById("nav").classList.add("solid-background");
  } else {
    document.getElementById("nav").classList.remove("solid-background");
  }
};

//Handle show and hide of projects
document.getElementById("project-reveal-button").onclick = function() {
  const projectList = document.getElementsByClassName("project-toggle");
  const projectRevealButton = document.getElementById("project-reveal-button")
    .firstChild;
  if (projectsHidden) {
    for (let i = 0; i < projectList.length; i++) {
      projectList[i].classList.remove("project-hidden");
    }
    projectsHidden = false;
    projectRevealButton.data = "SHOW LESS";
  } else {
    for (let i = 0; i < projectList.length; i++) {
      projectList[i].classList.add("project-hidden");
    }
    projectsHidden = true;
    projectRevealButton.data = "SHOW MORE";
  }
};

//API URL setup
const GITHUB_URL = "https://api.github.com/users/jriall";
const CODEWARS_URL =
  "https://www.codewars.com/api/v1/users/jriall?access_key=YFNB9R6ySYEXd1YKpEa9";

//call Github API
let githubRequest = new XMLHttpRequest();

githubRequest.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    let response = JSON.parse(this.responseText);
  }
};

githubRequest.open("GET", GITHUB_URL, true);
githubRequest.send();

//call Codewars API