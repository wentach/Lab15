//Завдання 1
let number = 0;

while (number <= 100) {
  if (isPrime(number)) {
    console.log(number);
  }
  number++;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/*
//Завдання 2
let number = 0;

do {
  let message;
  if (number === 0) {
    message = 'це нуль';
  } else if (number % 2 === 0) {
    message = 'парне число';
  } else {
    message = 'непарне число';
  }
  console.log(`${number} – ${message}`);
  number++;
} while (number <= 10);
*/




/*
//Завдання 3
let numb = 10000;
let counter = 0;

while (numb >= 50) {
  numb /= 2;
  counter++;
}

let result = numb;

console.log("Результат:", result);
console.log("Кількість ітерацій:", counter);
*/

/* 
//Завдання 4
let month = parseInt(prompt("Введіть число від 1 до 12"));
let season, monthName;
if (month >= 1 && month <= 12) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      season = "зима";
      break;
    case 3:
    case 4:
    case 5:
      season = "весна";
      break;
    case 6:
    case 7:
    case 8:
      season = "літо";
      break;
    case 9:
    case 10:
    case 11:
      season = "осінь";
      break;
  }
  switch (month) {
    case 1:
      monthName = "січень";
      break;
    case 2:
      monthName = "лютий";
      break;
    case 3:
      monthName = "березень";
      break;
    case 4:
      monthName = "квітень";
      break;
    case 5:
      monthName = "травень";
      break;
    case 6:
      monthName = "червень";
      break;
    case 7:
      monthName = "липень";
      break;
    case 8:
      monthName = "серпень";
      break;
    case 9:
      monthName = "вересень";
      break;
    case 10:
      monthName = "жовтень";
      break;
    case 11:
      monthName = "листопад";
      break;
    case 12:
      monthName = "грудень";
      break;
  }

  alert(`Місяць ${monthName} належить до пори року ${season}`);
} else {
  alert("Введене число некоректне. Введіть число від 1 до 12.");
}
*/


/*
//Завдання 5
let temperatureCelsius = parseFloat(prompt("Введіть температуру в градусах Цельсія"));

if (!isNaN(temperatureCelsius)) {
  let temperatureFahrenheit = (9 / 5) * temperatureCelsius + 32;
  alert(`Температура в градусах Фаренгейта: ${temperatureFahrenheit.toFixed(2)}`);
} else {
  alert("Введена температура некоректна. Введіть числове значення.");
}

*/


/*
//Завдання 6
let number = parseInt(prompt("Введіть число від 1 до 7"));
let day;
switch (number) {
  case 1:
    day = "Понеділок";
    break;
  case 2:
    day = "Вівторок";
    break;
  case 3:
    day = "Середа";
    break;
  case 4:
    day = "Четвер";
    break;
  case 5:
    day = "П'ятниця";
    break;
  case 6:
    day = "Субота";
    break;
  case 7:
    day = "Неділя";
    break;
  default:
    day = "Некоректне число";
}
console.log(`День неділі, якому відповідає число ${number}, це ${day}`);
*/ 