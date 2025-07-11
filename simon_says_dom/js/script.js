const randomNumbers = document.getElementById(`numbers-list`);

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 30 + 1);

  randomNumbers.innerHTML += randomNumber + " ";
}

//AGGIUNGO IL TIMER DI 30 SEC
const countdown = document.getElementById(`countdown`);
let seconds = 11;

const interValid = setInterval(() => {
  console.log(seconds)
  seconds--;

  if (seconds === 0) {
    clearInterval(interValid)
    randomNumbers.classList.add(`d-none`)
    const answers = document.getElementById(`answers-form`)
    answers.classList.remove(`d-none`)

    button.addEventListener(`click`, function (event) {
      event.preventDefault();
      const button = document.getElementById(`message`);

    })
  }

  countdown.innerHTML = seconds

}, 1000);