let isPoint = [1, 2, 3, 0]
function next(x) {
  let left = 1056 * isPoint[x]
  document.getElementById("slide").style.left = "-"+ left +"px";
  document.getElementById("slide").style.WebkitTransition = "left 0.5s";
  document.getElementById("slide").style.MozTransition = "left 0.5s";
}

function prev(x) {
  let left = 1056 * isPoint[x]
  document.getElementById("slide").style.left = "-"+ left +"px";
  document.getElementById("slide").style.WebkitTransition = "left 0.5s";
  document.getElementById("slide").style.MozTransition = "left 0.5s";
}