window.onload = pageLoad;

function pageLoad() {
  var target = document.getElementById("start");
  target.onclick = startGame;
}

function startGame() {
  alert("Ready?");
  addBox();
  timeStart();
}

function timeStart() {
  var TIMER_TICK = 1000; //millisecond
  var timer = null;
  var min = 0.5; // 0.5 minute
  var second = min * 60;
  var clock = document.getElementById("clock");
  var btn = document.getElementById("start");

  //setting timer using setInterval function
  timer = setInterval(timeCount, TIMER_TICK);

  function timeCount() {
    second = second - 1;
    clock.innerHTML = second;
    console.log(second);
    var allbox = document.querySelectorAll("#game-layer div");
    // จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ
    // ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
    // ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
    if (second > 0) {
      btn.style.display = "none";
    } else {
      btn.style.display = "inline-block";
    }

    if (allbox.length === 0) {
      alert("You Win");
      clearScreen();
      clearInterval(timer);
      btn.style.display = "inline-block";
    }
    if (second <= 0) {
      if (allbox.length === 0) {
        alert("You Win");
        clearScreen();
        clearInterval(timer);
        btn.style.display = "inline-block";
      } else {
        alert("Game Over");
        clearScreen();
        clearInterval(timer);
        btn.style.display = "inline-block";
      }
    }
  }
}

function addBox() {
  var numbox = document.getElementById("numbox").value;
  var container = document.getElementById("game-layer");
  var colorDrop = document.getElementById("color").value;
  console.log(numbox, colorDrop);
  for (var i = 0; i < numbox; i++) {
    var tempbox = document.createElement("div");
    tempbox.classList.add(colorDrop);
    tempbox.classList.add("square");
    tempbox.id = "square" + i;
    tempbox.style.left = Math.random() * (500 - 25) + "px";
    tempbox.style.top = Math.random() * (500 - 25) + "px";
    //add element to HTML node
    container.appendChild(tempbox);
    bindBox(tempbox);
  }
}

function bindBox(box) {
  let boxinContainer = document.getElementById("game-layer");
  // เมื่อกดแล้วกล่องจะหายไป
  box.onclick = function () {
    boxinContainer.removeChild(box);
  };
}

function clearScreen() {
  var allbox = document.querySelectorAll("#game-layer div");
  var containerBox = document.getElementById("game-layer");

  //delete all div
  for (var i = 0; i < allbox.length; i++) {
    containerBox.removeChild(allbox[i]);
  }
}
