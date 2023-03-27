//Task_1
let min=+prompt("Початкове значення діапазону :");
let max=+prompt("Кінцеве значення діапазону :")
let sum=0;
 for(let i=min;i<=max;i++){
    sum+=i;
 }
 console.log(`Сума всіх чисел в заданому діапазоні: ${sum}`);

//////////////////////////////////////////////////////////

//Task_2
let number =+prompt("Введи число:")
let counter=number.toString().length;

console.log(`Значення :${counter}`)

///////////////////////////////////////////////////////

//Task_3
let positiveNumber = 0;
let negativeNumber = 0;
let zeroNumber = 0;
let even=0;
let odd=0;


for (let i = 1; i <= 10; i++) {
  let number = +prompt(`Введіть число №${i}`);

  if (number > 0) {
    positiveNumber++;
  } else if (number < 0) {
    negativeNumber++;
  } else {
    zeroNumber++;
  }

  if (number % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}

console.log(`У списку введених числах ${positiveNumber} позитивних, ${negativeNumber} негативних, ${zeroNumber} нулів, парних ${even}, та непарних ${odd}`);

//////////////////////////////////////////////////////////////////

//Task_4
let days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
let currentDay = 0;
do {
  alert(days[currentDay]);
  console.log(`${days[currentDay]}`)
  currentDay = (currentDay + 1) % 7;
} while (confirm("Хочете побачити наступний день?"));
