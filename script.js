const climber = document.querySelector(".climber");
const stair = document.getElementsByClassName("stair");
const flag = document.querySelector(".flag");

function next() {
  for (let i = 0; i < stair.length; i++) {
    if (stair[i].contains(climber)) {
      climber.style.transform = "rotate(5deg)";
      return stair[i + 1].append(climber);
    } else if (stair[stair.length - 2].contains(climber)) {
      flag.style.display = "block";
    }
  }
}
function prev() {
  for (let i = 0; i < stair.length; i++) {
    if (stair[i].contains(climber)) {
      flag.style.display = "none";
      return stair[i - 1].appendChild(climber);
    }
  }
}
document.addEventListener("keydown", (e) => {
  if (e.code == "KeyX") {
    next();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code == "KeyZ") {
    prev();
  }
});
