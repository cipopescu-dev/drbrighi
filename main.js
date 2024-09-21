function parallaxMove(layer, x, y, boxWidth, boxHeight, str) {
  var depth = $(this).data("depth");
  var moveX = (boxWidth / 2 - x) * (str * depth);
  var moveY = (boxHeight / 2 - y) * (str * depth);
  layer.style.transform = "translate3d(" + moveX + "px, " + moveY + "px, 0)";
}

window.onload = () => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))
    return;
  const strength = 0.2;
  const parallaxLayer = document.querySelector(".parallax-layer");
  const parallaxBox = document.querySelector("#parallax-container");
  window.addEventListener("deviceorientation", function (event) {
    event.stopPropagation();
    event = event || window.event;

    var rotatedY = Math.min(
        Math.max(parseInt(Math.floor(event.gamma)), -45),
        45
      ),
      rotatedX = Math.min(Math.max(parseInt(Math.floor(event.beta)), -45), 45),
      boxWidth = parallaxBox.width(),
      boxHeight = parallaxBox.height();

    var moveX = ((boxWidth / 2) * rotatedY) / 45;
    var moveY = ((boxWidth / 2) * rotatedX) / 45;

    parallaxMove(parallaxLayer, moveX, moveY, boxWidth, boxHeight, strength);
  });
};
