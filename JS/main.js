let turn = "x";

let title = document.querySelector(".title");

let square = document.querySelectorAll(".square");

let squareArr = [];

square.forEach((e) => {
  e.addEventListener("click", () => {
    if (turn === "x" && e.innerHTML === "") {
      e.innerHTML = "X";
      turn = "o";
      title.innerHTML = "O";
    } else if (turn === "o" && e.innerHTML === "") {
      e.innerHTML = "O";
      turn = "x";
      title.innerHTML = "X";
    }
    winner();
  });
});

function winner() {
  for (let i = 1; i < 10; i++) {
    squareArr[i] = document.getElementById(`item${i}`).innerHTML;
  }
  if (
    squareArr[1] === squareArr[2] &&
    squareArr[2] === squareArr[3] &&
    squareArr[1] !== ""
  ) {
    end(1, 2, 3);
  } else if (
    squareArr[4] === squareArr[5] &&
    squareArr[5] === squareArr[6] &&
    squareArr[5] !== ""
  ) {
    end(4, 5, 6);
  } else if (
    squareArr[7] === squareArr[8] &&
    squareArr[7] === squareArr[9] &&
    squareArr[7] !== ""
  ) {
    end(7, 8, 9);
  } else if (
    squareArr[1] === squareArr[4] &&
    squareArr[4] === squareArr[7] &&
    squareArr[7] !== ""
  ) {
    end(1, 4, 7);
  } else if (
    squareArr[2] === squareArr[5] &&
    squareArr[5] === squareArr[8] &&
    squareArr[8] !== ""
  ) {
    end(2, 5, 8);
  } else if (
    squareArr[3] === squareArr[6] &&
    squareArr[6] === squareArr[9] &&
    squareArr[6] !== ""
  ) {
    end(3, 6, 9);
  } else if (
    squareArr[1] === squareArr[5] &&
    squareArr[5] === squareArr[9] &&
    squareArr[5] !== ""
  ) {
    end(1, 5, 9);
  } else if (
    squareArr[3] === squareArr[5] &&
    squareArr[5] === squareArr[7] &&
    squareArr[5] !== ""
  ) {
    end(3, 5, 7);
  }
}

function end(num1, num2, num3) {
  title.innerHTML = `${squareArr[num1]} Winner`;
  document.getElementById(`item${num1}`).style.backgroundColor = "#528f9d";
  document.getElementById(`item${num2}`).style.backgroundColor = "#528f9d";
  document.getElementById(`item${num3}`).style.backgroundColor = "#528f9d";

  setInterval(function () {
    title.innerHTML += ".";
  }, 900);

  setTimeout(function () {
    location.reload();
  }, 3000);
}

// Reset btn
document.getElementById("reset-btn").onclick = function () {
  window.location.reload();
};
