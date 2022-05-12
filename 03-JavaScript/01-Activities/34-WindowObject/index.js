if (window.navigator.userAgent.indexOf("mac") == -1) {
  alert("welcome Mac user");
} else if (window.navigator.userAgent.indexOf("windows") == -1) {
  alert("welcome window user");
} else {
  alert("sorry! We dont recognize your system");
}

function success(position) {
  console.log(position.coords);
}
//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

navigator.geolocation.getCurrentPosition(success);
