const randomNumbers = document.getElementById(`numbers-list`);

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 30 + 1);

  randomNumbers.innerHTML += randomNumber + " ";
}