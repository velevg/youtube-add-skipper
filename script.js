//Skips Ads
setInterval(function () {
  var skipButton = document.getElementsByClassName("ytp-ad-skip-button");
  if (skipButton != undefined && skipButton.length > 0) {
    console.log("Ad detected");
    skipButton[0].click();
  }
}, 2001);
//Skips Ads End
