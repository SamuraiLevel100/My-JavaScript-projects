
//Task_1
const number = +prompt("Введіть число від 0 до 9: ")

switch(number){
    case 0: console.log("Cпеціальний символ який знаходиться під цим номером це : ')' ");break;
    case 1: console.log("Cпеціальний символ який знаходиться під цим номером це : '!' ");break;
    case 2: console.log("Cпеціальний символ який знаходиться під цим номером це : '@' ");break;
    case 3: console.log("Cпеціальний символ який знаходиться під цим номером це : '#' ");break;
    case 4: console.log("Cпеціальний символ який знаходиться під цим номером це : '$' ");break;
    case 5: console.log("Cпеціальний символ який знаходиться під цим номером це : '%' ");break;
    case 6: console.log("Cпеціальний символ який знаходиться під цим номером це : '^' ");break;
    case 7: console.log("Cпеціальний символ який знаходиться під цим номером це : '&' ");break;
    case 8: console.log("Cпеціальний символ який знаходиться під цим номером це : '*' ");break;
    case 9: console.log("cпеціальний символ який знаходиться під цим номером це : '(' ");
}

/////////////////////////////////////////////////////

//Task_2
let year = prompt("Введіть рік:");
let isLeapYear = false;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      isLeapYear = true;
    }
  } else {
    isLeapYear = true;
  }
  
}

if (isLeapYear) {
  console.log(year + " є високосним роком.");
} else {
  console.log(year + " не є високосним роком.");
}

/////////////////////////////////////////////////////////////

//Task_3
let day = +prompt("Введіть день:");
let month = +prompt("Введіть місяць:");
let years = +prompt("Введіть рік:");


let isLeapYears = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;


const daysInMonth = [
  31, // січень
  isLeapYears ? 29 : 28, // лютий
  31, // березень
  30, // квітень
  31, // травень
  30, // червень
  31, // липень
  31, // серпень
  30, // вересень
  31, // жовтень
  30, // листопад
  31, // грудень
];


day++;

// якщо день більше кількості днів у поточному місяці,переходимо до наступного місяця
if (day > daysInMonth[month - 1]) {
  day = 1;
  month++;
}

// якщо місяць більше 12, переходимо до наступного року
if (month > 12) {
  month = 1;
  years++;
}

console.log(`Наступна дата: ${day}.${month}.${years}`);
