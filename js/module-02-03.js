"use strict";

//TODO:==============================
// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"

// const res = prompt("Input your name");
// const str = ["Peter", "John", "Igor", "Sasha"];

// function logins (arr) {
//     // for (const element of arr) {
//         if (arr.includes(res)) {
//             console.log('Access denide');
//         }
//     // }

//     return logins;
// }

// logins(str);


// TODO:==============================
// Напишіть функцію min(a, b), яка повертає менше із чисел a і b.

// function min (a, b) {
//     if ( a > b ) {
//         return b;
//     } else if (a < b ) {
//         return a;
//     }
// }
// console.log(min( 2,5 ))


// TODO:==========================
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {

//     console.log(isNaN(a));
//     console.log(isNaN(b));

//     if (isNaN(a) || isNaN(b)) {

//         console.log('Input number');
//         return;

//     } else if ( a > b ) {
//         console.log(b);
//             return b;
//     } else if (a < b ) {
//         console.log(a);
//              return a;
//          }

// }
// min( 12, '11' )


// TODO:==============================
// // Що виведе наступний код?
// let fruits = ['Яблука', 'Груша', 'Апельсин'];
// // Додаємо нове значення в "копію"
// let shoppingCart = fruits;
// shoppingCart.push('Банан');
// // що у fruits?
// console.log(fruits.length);

// console.log(fruits)
// console.log(shoppingCart)
// console.log(fruits.length)




// TODO:===========================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте «Рок-н-рол» в кінець.
// Замініть значення «Блюз» на «Класика».
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.
// const styles = ['jazz', 'blues'];

// const styles = ['jazz', 'Bluzz'];
// styles.push('Rock-n-Roll');

// styles.splice(1, 1, 'Classic')
// const firstDelEl = styles.shift()
// console.log(firstDelEl);

// styles.unshift('Rap', 'Raggi')

// console.log(styles)


// TODO:==============================
// Напишіть функцію pow(x,n), яка повертає x до ступеня n.
// Інакше висловлюючись, множить x він n разів і повертає результат.
// function pow(x, n) {
// }
// console.log(pow(2, 8));

// function pow(x, n) {
//     return Math.pow(x, n)
// }

// console.log(pow(2, 8));


// TODO:==============================
// Напишіть функцію яка сумуватиме сусідні числа і пушитиме їх в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const newArr = [];

// function sumNumbers (arr) {
//     for (let i = 0; i <= arr.length - 1; i += 2) {
    
//         newArr.push(arr[i] + arr[i + 1])

//     }
//     return newArr; 
// }

// console.log(sumNumbers(someArr));


// TODO:==========================
// Напишіть функцію logItems(array), яка приймає
// масив та використовує цикл for, який для кожного
// елемента масиву виводитиме повідомлення у форматі
// <номер елемента> - <значення елемента>
// Нумерація елементів має починатися з першого.
// ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
// [{name: 'Джаз', engl: "jazz", number: 1}, {name: 'Блюз', engl: "blues", number: 2}, {name: 'Рок-н-рол', engl: "rock 'n' roll", number: 3}, {name: 'Реггі', engl: "reggae", number: 4}, {name: 'Реп', engl: "rap", number: 5} ]

// function logItems(array) {
//     for (let i = 0; i <= array.length - 1; i += 1) {
//         const message = `${i + 1} ${array[i]}`;
        
//         console.log(message);
//     }
// }

// logItems(['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']);


// TODO:==========================
// Напиши функцію findSmallerNumber(numbers)
// яка шукає найменше число в масиві.
// Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(arr) {
//     // for (let i = 0; i <= arr.length - 1; i += 1) {
//        const minNum =  Math.min(...arr);
//        return minNum;
//     // 
// }

// console.log(findSmallerNumber(numbers));



// TODO:==============================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.

// formatMessage("Curabitur ligula sapien", 16); //Повертає 'Curabitur ligula...'.
// formatMessage("Curabitur ligula sapien", 23); //Повертає 'Curabitur ligula sapien'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); //Повертає 'Nunc sed turpis...'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.

// function formatMessage(message, maxLength) {

//     const formMessage = message.slice(0, maxLength);
//     let result = '';
//     if (maxLength < message.length-1) {
//         result = formMessage.padEnd(maxLength+3, '...')
//     } else {
//         result = formMessage;
//     }
//     return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); //Повертає 'Curabitur ligula...'.
// console.log(formatMessage("Curabitur ligula sapien", 23)); //Повертає 'Curabitur ligula sapien'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); //Повертає 'Nunc sed turpis...'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.

// TODO:==========================
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

// let sum = 0;

// function calculateAverage(numbers) {
//      for (let i = 0; i < numbers.length; i += 1) {
//         sum += numbers[i];
//     }
//     // sum / numbers.length;
//     console.log(sum / numbers.length)
//     return sum / numbers.length;
// }

// calculateAverage([2, 3, 4, 5, 6, 7])



// TODO:==========================
// Напиши функцію findLongestWord(string)
// яка приймає довільний рядок
// що складається лише з розділених слів
// пробілом (параметр string)
// і повертає найдовше слово у цьому рядку


// function findLongestWord(string) {

//     const strArr = string.split(' ');
//     let result = '';
    
//     for (let i = 0; i <= strArr.length - 1; i += 1) {
//         if (result.length < strArr[i].length) {
//             result = strArr[i];
//         }
//     }
//     console.log(result)
// }

// findLongestWord("Nunc sed turpis a felis in nunc fringilla")


// TODO:==========================
// Напишіть функції для роботи з масивом
// add(name) додає курс до кінця колекції
// removeCourse(name) видаляє курс із колекції
// updateCourse(oldName, newName) змінює ім'я на нове


// const course = [];

// function add(name) {
//     course.push(name);
//     console.log(course);
//     // return course;
// }

// function removeCourse(name) {
//     const indexEl = course.indexOf(name);
//     course.splice(indexEl, 1)
//     console.log(course);
// }

// function updateCourse(oldName,newName) {
//     const indexEl = course.indexOf(oldName);
//     course.splice(indexEl, 1, newName)
//     console.log(course);
// }

// add('Bingo')
// add('Wonderful')
// add('Bond')
// add('Full')
// removeCourse('Bond')
// updateCourse('Wonderful', 'BadBoy')



// TODO:==========================
// Напишіть код для пошуку пароля в масиві
// Через include і тернарний оператор


// const passwords = ['ajax123', 'polly456', 'mango789', 'semiBold'];
// const password = 'semiBold';

// const findPassword = passwords.includes(password) ? 'Cool' : 'Bad';
// console.log(findPassword);


// TODO:==========================
// Напишіть скрипт, який замінює регістр кожного символу
// у рядку на протилежний
// Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

const str = 'JavaScript';
const newStr = str.split('').map( (element) => {
    if (element === element.toUpperCase()) {
        element.toLowerCase();
        // console.log(element.toLowerCase());
    } else if (element === element.toLowerCase()) {
        element.toUpperCase();
        return newStr;
    }
} 
);
console.log(newStr);



// TODO:============================
// Напишіть функцію unique(arr), яка повертає масив, який
// містить лише унікальні елементи arr.
// const words = ["HTML","CSS", "JS", "React", "JS", "CSS", "JS",
// "Node.js", "JS", "React", "CSS", "React", "HTML", "Node.js"];

// TODO:==============================
// Привести масив до одного рівня
// const arr = [
// [23, 11, ["hello", "world", "Vasya"]]

// TODO:==============================
//  * Працюємо з колекцією товарів у кошику:
//  * - getItems()
//  * - add(product)
//  * - remove(productName)
//  * - clear()
//  * - countTotalPrice()
//  * - increaseQuantity(productName)
//  * - decreaseQuantity(productName)
//  *
//   { name: '🍎', price: 50 }
//   { name: '🍇', price: 70 }
//   { name: '🍋', price: 60 }
//   { name: '🍓', price: 110 }

// const cart = {};
