//TODO:===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const a = 10;
// if (a === 10) {
//     console.log('True')
// } else
// console.log('False');

//TODO:===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// let num = 4;
// let result;

// switch (num) {
//     case 1: 
//     result = 'Winter';
//         break;
//     case 2: 
//     result = 'Spring';
//         break;
//     case 3: 
//     result = 'Summer';
//         break;
//     case 4: 
//     result = 'Aunumn';
//         break;

//     default:
//        result = 'Invalid type';
// }

// console.log(result);



//TODO:===================================
// Скористайтесь циклом while та виведіть у консоль числа від 0 до 50

// let i = 0;
// while (i <= 50) {
//     console.log(i)
//     i += 1;
// }

//TODO:===================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const question = prompt("Яка офіційна назва JavaScript?");

// const question = prompt("Яка офіційна назва JavaScript?");

// if (question === 'ECMAScript') {
//     alert('Good. True');
// } else {
//     alert('Don`t know? ECMAScript!');
// }

//TODO:===================================
// Напишіть програму, яка отримає від користувача
// число (кількість хвилин) і виведе у консоль
// рядок у форматі годин і хвилин
// 70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// const number = prompt('Insert count minutes');
// const hours = String(Math.trunc(number / 60)).padStart(2, '0');
// const minutes = String(number % 60).padStart(2, '0');

// console.log(hours+':'+minutes);


//TODO:===================================
// Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// const max = 50;
// const min = 23;

// for(let i = max; i >= min; i -= 1) {
//     console.log(i);
// }



//TODO:===================================
//За допомогою циклу for додайте всі парні числа від min до max
// const max = 50;
// const min = 23;
// let result = 0;

// for(let i = min; i <= max; i += 1) {
//     if (i%2 === 0) {
//         result += i;
//     }
// }
// console.log(result);


//TODO:===================================
// За допомогою циклу for виведіть парні числа від 2 до 10.

// for(let i = 2; i <= 10; i += 1) {
//     if(i%2 === 0) {
//         console.log(i)
//     }
// }


//TODO:===================================
// Напишіть код, який запитуватиме
// логін за допомогою prompt і логуватиме результат
// в консоль браузера
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// Вивести рядок "Скасовано"
// Інакше вивести рядок "Я вас не знаю"
// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести рядок "Доброго дня!"
// інакше виводити рядок "Невірний пароль!"

// const login = prompt('Input your login');
// console.log(login);

// if(login === 'Admin') {
//     const password = prompt('Input password');
//     if(password === 'I main') {
//         console.log('Wellcome');
//     } else {
//         console.log('Wrong password');
//     };
// } else if (login === null || login === '') {
//     console.log('Cancelled');
// } else {
//     console.log('I don`t know you.')
// }


//TODO:===================================
//При завантаженні сторінки користувачеві пропонується
//в prompt ввести число. Введення додається до значення
//змінної total.
//Операція введення числа триває до того часу,
//поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів, не потрібно.
//Використайте цикл while


// let total = 0;
// let input = 0;

// while (input !== null) {
//     input = prompt('Input number');    
//     total += Number(input);
// }
//     alert(`Загальна сума введених чисел дорівнює ${total}`);



//TODO:===================================
//Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо відвідувач ввів інше число - попросити
//ввести ще раз і так далі.
//Цикл має питати число, поки відвідувач не
//введе число більше 100, або натисне кнопку
//скасування в prompt
// Передбачається, що відвідувач вводить лише числа.


// let number = prompt('Input number bsggest 100');

// while (number !== null) {
//     if (number < 100) {
//         number = prompt('Input again');
//     } else {
//         break;
//     } 
// }


//TODO:===================================
// У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

// const min = 0;

// if (min >= 0 && min <= 14) {
//     console.log('First quater')
// } else if (min >= 15 && min <= 30) {
//     console.log('Second quater')
// } else if (min >= 31 && min <= 45) {
//     console.log('Third quater')
// } else if (min >= 46 && min <= 59) {
//     console.log('Fourth quater')
// }




//TODO:===================================
// Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.


// const str = 'abcde';

// if (str[0].includes('a')) {
//     console.log('True');
// } else {
//     console.log("false");
// }




//TODO:===================================
// Якщо число ділитися на 3 повертати
// fizz якщо ділитися на 5 повертати buzz
// Якщо ділитися на 3 і на 5 повернути fizzbuzz

// fizzBuzz(24);
// function fizzBuzz(num) {
//
// }

// const number = 30;

// if (number % 3 === 0 && number % 5 === 0) {
//     console.log('fizzbuzz')
// } else if (number % 3 === 0) {
//     console.log('fizz')
// } else if (number % 5 === 0) {
//     console.log('buzz')
// } 



//TODO:===================================
// Напишіть if..else, що відповідає наступному switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// const browser = 'Opra';

// if (browser === 'Edge') {
//     alert( "You've got the Edge!" );
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }
    


//TODO:===================================
// Написати ф-цію, яка створює масив із зазначеною довжиною та наповнює його переданим значенням
// приклад: ф-ція fillArray(3, 'a') повинна повертати масив ['a', 'a', 'a']

// const arr = [];

// function fillArray(num, str) {
//     for (let i = 1; i <= num; i += 1) {
//         arr.push(str);   
//     }
//     return arr;
// }

// console.log(fillArray(5, 'b'))



//TODO:===================================
// 0, NaN, null, undefined, '',false.
// Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN
// const array = [1, 0, 54, "doc", null, "jpg", undefined, "", "png", "exe", false, "mp4", NaN, "hbs"];


// const array = [1, 0, 54, "doc", null, "jpg", undefined, "", "png", "exe", false, "mp4", NaN, "hbs"];

// function filterArray(arr) {
//     const sortArr = arr.filter( element => element );
//     return sortArr;
// }

// console.log(filterArray(array));



//TODO:===================================
// Перевірити два масива і дізнатися, чи вони рівні за вмістом
// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// function comparisonArr (arr1, arr2) { 
// for (const element of arr1) {
//     const result = arr2.includes(element)
//     return result;
// }
// }

// console.log(comparisonArr(arr1, arr2))


// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// function comparisonArr (arr3, arr4) { 
// for (const element of arr3) {
//     const result = arr4.includes(element)
//     return result;
// }
// }

// console.log(comparisonArr(arr3, arr4))


// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// function comparisonArr (arr5, arr6) { 
//     for (const element of arr5) {
//         const result = arr6.includes(element)
//         return result;
//     }
//     }
    
//     console.log(comparisonArr(arr5, arr6))

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];
// //

// function comparisonArr (arr7, arr8) { 
//     for (const element of arr7) {
//         const result = arr8.includes(element)
//         return result;
//     }
//     }
    
//     console.log(comparisonArr(arr7, arr8))

