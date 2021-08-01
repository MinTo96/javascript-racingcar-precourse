// export default function RacingCarGame() {

// }
// // export default class RacingCarGame {
// // }

// new RacingCarGame();

const nameInput = document.querySelector("#car-names-input");
const nameBtn = document.querySelector("#car-names-submit");
const countInput = document.querySelector("#racing-count-input");
const countBtn = document.querySelector("#racing-count-submit");
const result = document.querySelector(".car-game-list");
const carGameWinner = document.querySelector(".car-game-winner");

let namesArray = [];

nameBtn.addEventListener("click", () => {
  const names = nameInput.value;
  nameValue = names.split(",");
  for (let i = 0; i < nameValue.length; i++) {
    namesArray.push({ value: nameValue[i], count: '' });
  }
});

countBtn.addEventListener("click", () => {
  for (let i = 0; i < Number(countInput.value); i++) {
    for (let j = 0; j < namesArray.length; j++) {
      if (Math.floor(Math.random() * 10) >= 4) {
        namesArray[j].count += '-';
      }
    }
    showProcess(namesArray);

  }
  showResult();
});

function showProcess(args) {

  for (let i = 0; i < args.length; i++) {
    const list = document.createElement("li");

    if (args.length - 1 === i) {
      list.innerHTML = `${args[i].value}: ${args[i].count}<br></br>`
    } else {
      list.innerHTML = `${args[i].value}: ${args[i].count}`
    }
    result.appendChild(list);
  }
}

function showResult() {
  let array = [];
  for (let i = 0; i < namesArray.length; i++) {
    array.push(namesArray[i].count.length);
  }
  const max = Math.max.apply(null, array);
  const gameResult = namesArray.filter(item =>
    item.count.length === max
  )

  for (let i = 0; i < gameResult.length; i++) {
    const doc = document.createElement('span');
    if (gameResult.length - 1 === i) {
      doc.innerHTML = `${gameResult[i].value}`;
    } else {
      doc.innerHTML = `${gameResult[i].value}, `;
    }
    carGameWinner.append(doc);
  }
}

