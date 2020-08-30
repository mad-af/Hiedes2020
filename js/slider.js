let isPoint = [1, 2, 3, 0]
function next(x) {
  let range = 1056 * isPoint[x]
  document.getElementById("slide").style.left = "-"+ range +"px";
  document.getElementById("slide").style.WebkitTransition = "left 0.7s";
  document.getElementById("slide").style.MozTransition = "left 0.7s";
}

function prev(x) {
  let range = 1056 * isPoint[x]
  document.getElementById("slide").style.left = "-"+ range +"px";
  document.getElementById("slide").style.WebkitTransition = "left 0.7s";
  document.getElementById("slide").style.MozTransition = "left 0.7s";
}