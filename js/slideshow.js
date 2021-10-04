var main = function () {
  var paused = false;

  $(".arrowR").click(function () {
    $("#slideshow > div:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slideshow");
  });

  $(".arrowL").click(function () {
    $("#slideshow > div:last")
      .fadeIn(1000)
      .prependTo("#slideshow")
      .next()
      .fadeOut(1000)
      .end();
  });

  setInterval(function () {
    if (paused === false) {
      $("#slideshow > div:first")
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo("#slideshow");
    }
  }, 3000);
};

$(document).ready(main);
