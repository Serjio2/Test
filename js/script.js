'use strict';

// console.log("hello World!");
// console.log(2+2);
// console.log("JavaScript is awesome".length);
// console.log("JavaScript is awesome".toUpperCase());
// console.log("JavaScript is awesome".toLowerCase());

// let userName;
// userName=20;
// console.log(userName);

// let userName;
// console.log(typeof userName);

// let inputValue = null;
// console.log(typeof inputValue);

// const quantity = 123;
// console.log(typeof quantity);

// const message = "JavaScript is awesome!";
// console.log(typeof message);

// const isModalOpen = false;
// console.log(typeof isModalOpen);

// const userName = "Mango";
// console.log("User name is " + userName);

// const message = "JavaScript is awesome";
// alert (message);

// let userName = prompt("Input your name");
// confirm ("Are your shure?");
// console.log(userName);
// console.log(typeof userName);
// userName = Number(userName);
// console.log(userName);

// console.log(Number.parseInt("50Spx"));
// console.log(Number.parseInt("12qwe74"));
// console.log(Number.parseInt("12.46qwe79"));
// console.log(Number.parseInt("qweqwe"));

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("1.2qwe74")); // 12
// console.log(Number.parseFloat("12.466qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

// let number = prompt("Input number");
// number = Number(number);
// number = Number.isNaN(number);
// console.log(number);

// console.log((0.17 + 0.24).toFixed(2));

// let firstNumber = prompt("Input first number");
// let secondNumber = prompt("Input second number");

// firstNumber = Number(firstNumber);
// secondNumber = Number(secondNumber);

// console.log(firstNumber + secondNumber);

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

// const productName = "Ремонтний дроїд";

// console.log(productName.includes("н")); // true
// console.log(productName.indexOf("н"));
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроїд")); // true
// console.log(productName.indexOf("дроїд"));
// console.log(productName.includes("Дроїд"));
// console.log(productName.indexOf("Дроїд")); // false
// console.log(productName.includes("Ремонтний")); // true
// console.log(productName.includes("ремонтний")); // false

// const productName = "Repair droid";
// console.log(productName.slice()); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

//
// function isAdult(age) {
//     // Change code below this line
//     const passed = age >= 18;
//   console.log(passed)
//     // Change code above this line
//     return passed;
//   }
// isAdult(20)
// isAdult(14)
// isAdult(8)
// isAdult(37)

// function checkAge(age) {
//     let message;

//     if (age >= 18) { // Change this line
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
//   console.log(message);
//     return message;
//   }
// checkAge(20)
// checkAge(8)
// checkAge(14)
// checkAge(38)

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//     if (available < ordered) {
//       message = "Not enough goods in stock!";
//     } else {
//       message = "Order is processed, our manager will contact you."
//     }
//     console.log(message);
//     // Change code above this line
//     return message;
//   }
//   checkStorage(100, 50)
//   checkStorage(100, 130)
//   checkStorage(200, 20)
//   checkStorage(200, 150)
//   checkStorage(150, 180)

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//     const totalPrice = pricePerDroid * orderedQuantity;

//       if (totalPrice > customerCredits) {
//         message = "Insufficient funds!";
//         } else {
//         customerCredits -= totalPrice;
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`
//         }
//     console.log(message);
//     // Change code above this line
//     return message;
//   }
// makeTransaction(3000, 5, 23000)
// makeTransaction(1000, 3, 15000)
// makeTransaction(5000, 10, 8000)
// makeTransaction(2000, 8, 10000)
// makeTransaction(500, 10, 5000)

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;

//     if (password === null) { // Change this line
//       message =  'Canceled by user!';
//     } else if (password === ADMIN_PASSWORD) { // Change this line
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
//   console.log(message);
//     return message;
//   }

// checkPassword("mangohackzor")
// checkPassword(null)
// checkPassword("polyhax")
// checkPassword("jqueryismyjam")

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//     if (ordered === 0) {
//       message = "There are no products in the order!";
//     } else if (ordered > available) {
//       message = "Your order is too large, there are not enough items in stock!";
//     } else {
//       message = "The order is accepted, our manager will contact you";
//     }
//     console.log(message)

//     // Change code above this line
//     return message;
//   }

// checkStorage(100, 50)
// checkStorage(100, 130)
// checkStorage(70, 0)
// checkStorage(200, 20)
// checkStorage(200, 250)
// checkStorage(150, 0)

// console.log(true && false); // false
// console.log(false && true); // false
// console.log(true && true); // true

// console.log(3 && false); // false
// console.log(false && 3); // false
// console.log(3 && true); // true
// console.log(true && 3); // 3

// function isNumberInRange(start, end, number) {
//     const isInRange = number >= start && number <= end ; // Change this line
//   console.log(isInRange);
//     return isInRange;
//   }

// isNumberInRange(10, 30, 17)
// isNumberInRange(10, 30, 5)
// isNumberInRange(20, 50, 24)
// isNumberInRange(20, 50, 51)

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType === "pro" || subType === "vip"; // Change this line
//   console.log(canAccessContent)
//     return canAccessContent;
//   }

// checkIfCanAccessContent("pro")
// checkIfCanAccessContent("starter")
// checkIfCanAccessContent("vip")
// checkIfCanAccessContent("free")

// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; // Change this line
//   console.log(isNotInRange);
//     return isNotInRange;
//   }

// isNumberNotInRange(10, 30, 17)
// isNumberNotInRange(10, 30, 5)
// isNumberNotInRange(20, 50, 24)
// isNumberNotInRange(20, 50, 76)

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line

//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     } else
//     if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     } else
//     if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else {
//         discount = BASE_DISCOUNT;
//     }

//     console.log(discount);
//     // Change code above this line
//     return discount;
//   }

// getDiscount(137000)
// getDiscount(46900)
// getDiscount(8250)
// getDiscount(1300)
// getDiscount(5000)
// getDiscount(20000)
// getDiscount(50000)

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line

//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"

//   console.log(message);
//     // Change code above this line
//     return message;
//   }

// checkStorage(100, 50)
// checkStorage(100, 130)
// checkStorage(200, 20)
// checkStorage(200, 150)
// checkStorage(150, 180)

// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line

//    switch (type) { // Change this line
//       case "starter": // Change this line
//         price = 0; // Change this line
//         break;

//       case "professional": // Change this line
//         price = 20; // Change this line
//         break;

//       case "organization": // Change this line
//         price = 50; // Change this line
//         break;
//     }
//   console.log(price);
//     // Change code above this line
//     return price;
//   }

// getSubscriptionPrice("professional")
// getSubscriptionPrice("organization")
// getSubscriptionPrice("starter")

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line

//     switch (password) {
//       case null:
//         message = "Canceled by user!";
//         break;

//       case ADMIN_PASSWORD:
//         message = "Welcome!";
//         break;

//       default:
//         message = "Access denied, wrong password!";
//     }

//     console.log(message);
//     // Change code above this line
//     return message;
//   }

// checkPassword("mangohackzor")
// checkPassword(null)
// checkPassword("polyhax")
// checkPassword("jqueryismyjam")

// function getShippingCost(country) {
//   let message;
//   // Change code below this line

//   let price;

//   switch (country) {
//     case "China":
//       price = 100;
//       message = (`Shipping to ${country} will cost ${price} credits`);
//       break;

//     case "Chile":
//       price = 250;
//       message = (`Shipping to ${country} will cost ${price} credits`);
//       break;

//     case "Australia":
//       price = 170;
//       message = (`Shipping to ${country} will cost ${price} credits`);
//       break;

//     case "Jamaica":
//       price = 120;
//       message = (`Shipping to ${country} will cost ${price} credits`);
//       break;

//     default:
//       message = ("Sorry, there is no delivery to your country");
//   }

//  console.log(message);
//   return message;
// }

// getShippingCost("Australia")
// getShippingCost("Germany")
// getShippingCost("China")
// getShippingCost("Chile")
// getShippingCost("Jamaica")
// getShippingCost("Sweden")

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
// console.log(message);
//   return message;
// }

// getNameLength("Poly")
// getNameLength("Harambe")
// getNameLength("Billy")
// getNameLength("Joe")

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);
// // Change code above this line

// function getSubstring(string, length) {
//   const substring = string.slice(string, length) ; // Change this line

//   console.log(substring);
//   return substring;
// }

// getSubstring("Hello world", 3)
// getSubstring("Hello world", 6)
// getSubstring("Hello world", 8)
// getSubstring("Hello world", 11)
// getSubstring("Hello world", 0)

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line

//   // result = message.maxLength <= maxLength ? message.replace(message.slice(maxLength), "...") : message;
//   result = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";

// if (message.length <= maxLength) {
//   result = message;
// } else {
//   result = message.slice(0, maxLength) + "...";
//   // result = message + "...";
// }

// result = message.length >= maxLength ? message.replace(message[message.length - 1], "...") : result;

// console.log(message.length);
// console.log(maxLength);
//     // console.log(message);
//     console.log(result);

//   /// Change code above this line
//   return result;
// }

// formatMessage("Curabitur ligula sapien", 16)
// formatMessage("Curabitur ligula sapien", 23)
// formatMessage("Vestibulum facilisis purus nec", 20)
// formatMessage("Vestibulum facilisis purus nec", 30)
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)

// let result;
// let message = "Curabitur ligula sapien";
// const maxLength = 16;

// // result = message.length >= maxLength;
// result = message.replace(message.slice(maxLength), "...");
// // result = message.replace(message, "...");

// // console.log(message.length);
// // console.log(maxLength);
// // console.log(message[maxLength - 1]);
// console.log(result);

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line
// console.log(normalizedInput);
//   return normalizedInput;
// }

// normalizeInput("Hello world")
// normalizeInput("This ISN'T SpaM")
// normalizeInput("Big SALE")

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   console.log(result);
//   return result;
//  }

// checkForName("Egor Kolbasov", "Egor")
// checkForName("Egor Kolbasov", "egor")
// checkForName("Egor Kolbasov", "egOr")
// checkForName("Egor Kolbasov", "Zhenya")
// checkForName("Vadim Nekrasov", "Vadim")
// checkForName("Vadim Nekrasov", "vadim")
// checkForName("Vadim Nekrasov", "Dima")

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   // message = message.toLowerCase();
//   result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");

//   console.log(result);
//   // Change code above this line
//   return result;
// }

// checkForSpam("Latest technology news")
// checkForSpam("JavaScript weekly newsletter")
// checkForSpam("Get best sale offers now!")
// checkForSpam("Amazing SalE, only tonight!")
// checkForSpam("Get rid of sPaM emails. Our book in on sale!")
// checkForSpam("[SPAM] How to earn fast money?")

// function getExtremeElements(array) {
//   // Change code below this line

//  const result = [array[0], array[array.length -1]];

//  console.log(result);
//  return result;

//   // Change code above this line
// }

// getExtremeElements([1, 2, 3, 4, 5])
// getExtremeElements(["Earth", "Mars", "Venus"])
// getExtremeElements(["apple", "peach", "pear", "banana"])

// function getExtremeElements(array) {
//   // Change code below this line

//   const lastElementIndex = array.length - 1;
//   const result = [array[0], array[lastElementIndex]];

//  console.log(result);
//  return result;

//   // Change code above this line
// }

// getExtremeElements([1, 2, 3, 4, 5])
// getExtremeElements(["Earth", "Mars", "Venus"])
// getExtremeElements(["apple", "peach", "pear", "banana"])

// function splitMessage(message, delimiter) {
//   let words;

//   words = message.split(delimiter);
//   console.log(words);
//   return words;
// }

// splitMessage('Mango hurries to the train', ' ');
// splitMessage('Mango', '');
// splitMessage('best_for_week', '_');

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   const result = message.split(" ").length * pricePerWord;

//   console.log(result);
//   return result;
//   // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10)
// calculateEngravingPrice("JavaScript is in my blood", 20)
// calculateEngravingPrice("Web-development is creative work", 40)
// calculateEngravingPrice("Web-development is creative work", 20)

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter);
//   console.log(string);
//   // Change code above this line
//   return string;
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// makeStringFromArray(["M", "a", "n", "g", "o"], "")
// makeStringFromArray(["top", "picks", "for", "you"], "_")

// function slugify(title) {
//   // Change code below this line

//     const titleSlug = title.split(" ").join("-").toLowerCase();

//   console.log(titleSlug);
//   return titleSlug;
//   // Change code above this line
// }

// slugify("Arrays for begginers")
// slugify("English for developer")
// slugify("Ten secrets of JavaScript")
// slugify("How to become a JUNIOR developer in TWO WEEKS")

// let arr = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0 ,2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

//     const unitedArray = firstArray.concat(secondArray).slice(0, maxLength);

//     console.log(unitedArray);

//   // Change code above this line
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// function calculateTotal(number) {
//   // Change code below this line

//   let sum = 0;

//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//     // console.log(sum);
//   }

//   console.log(sum);
//   return sum;

//    // Change code above this line
//  }

// calculateTotal(1)
// calculateTotal(3)
// calculateTotal(7)
// calculateTotal(18)
// calculateTotal(24)

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (let i = 0; i < order.length; i += 1) {
//       total += order[i];
//     }
//   // Change code above this line
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4])
// calculateTotalPrice([164, 48, 291])
// calculateTotalPrice([412, 371, 94, 63, 176])

// function findLongestWord(string) {
//   // Change code below this line

//     const splitString = string.split(" ");

//     let longestWord = " ";

//     for (let i = 0; i < splitString.length; i += 1) {
//         if (longestWord.length < splitString[i].length) {
//           longestWord = splitString[i];
//         }
//             // console.log(i);
//     }
//     // console.log(splitString);
//     console.log(longestWord);
//     return longestWord;
//   // Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog")
// findLongestWord("Google do a roll")
// findLongestWord("May the force be with you")

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line

//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//         // console.log(numbers);
//     }
//     console.log(numbers);
//     // Change code above this line
//     return numbers;
//   }

// createArrayOfNumbers(1, 3)
// createArrayOfNumbers(14, 17)
// createArrayOfNumbers(29, 34)

// function filterArray(numbers, value) {
//     // Change code below this line
//     let filterNumbers = [];

//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             filterNumbers.push(numbers[i]);
//             // console.log(filterNumbers);
//         }
//     }
//     console.log(filterNumbers);
//     return filterNumbers;

//    // Change code above this line
//  }

// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([1, 2, 3, 4, 5], 4)
// filterArray([1, 2, 3, 4, 5], 5)
// filterArray([12, 24, 8, 41, 76], 38)
// filterArray([12, 24, 8, 41, 76], 20)

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];

//     console.log(fruits.includes(fruit)); // Change this line
//   }

// checkFruit("plum")
// checkFruit("mandarin")
// checkFruit("pear")
// checkFruit("Pear")
// checkFruit("apple")

// function getCommonElements(array1, array2) {
//     // Change code below this line
//     const newArray = [];

//     for (let i = 0; i <= array2.length; i += 1) {
//         if (array2.includes(array1[i])) {
//              newArray.push(array1[i]);
//         }
//     }
// //   console.log(newArray);
//   return newArray;

//    // Change code above this line
//   }

// getCommonElements([1, 2, 3], [2, 4])
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
// getCommonElements([1, 2, 3], [10, 20, 30])

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line

//     for (const number of order) {
//       total += number;
//     }

//   console.log(total);
//     // Change code above this line
//     return total;
//   }

// calculateTotalPrice([12, 85, 37, 4])
// calculateTotalPrice([164, 48, 291])
// calculateTotalPrice([412, 371, 94, 63, 176])
// calculateTotalPrice([])

// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];

//     for (const number of numbers) {
//         if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
//   console.log(filteredNumbers);
//     return filteredNumbers;
//     // Change code above this line
//   }

// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([1, 2, 3, 4, 5], 4)
// filterArray([1, 2, 3, 4, 5], 5)
// filterArray([12, 24, 8, 41, 76], 38)
// filterArray([12, 24, 8, 41, 76], 20)

// function getEvenNumbers(start, end) {
//     // Change code below this line
//         const pairNumbers = [];

//         for (let i = start; i <= end; i += 1) {
//             if ( i % 2 === 0) {
//                 pairNumbers.push(i);
//             }
//         }

//         console.log(pairNumbers);
//         return pairNumbers;
//      // Change code above this line
//    }

// getEvenNumbers(2, 5)
// getEvenNumbers(3, 11)
// getEvenNumbers(6, 12)
// getEvenNumbers(8, 8)
// getEvenNumbers(7, 7)

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// function findNumber(start, end, divisor) {
//     // Change code below this line
//     // let number;

//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         return console.log(i);
//         // number = i;
//         // break;
//       }
//     }
//     // return number;
//     // Change code above this line
//   }

// findNumber(2, 6, 5)
// findNumber(8, 17, 3)
// findNumber(6, 9, 4)
// findNumber(16, 35, 7)

// function includes(array, value) {

//   // console.log(array.indexOf(17));
//     // Change code below this line
//   for (let i = 0; i <= array.length; i += 1) {
//     // return array.includes(value);
//     // console.log(value);
//     // console.log(array[i].indexOf(1));
//     // console.log(value);

//     if (array.indexOf(value) !== -1) {
//       return true;
//     }  else {
//       return false;
//     }
//       // console.log(i);

//     // console.log(result);
//     // return element;
//   }

//   // console.log(result);
//     // Change code above this line
//   }

// console.log(includes([1, 2, 3, 4, 5], 3))
// console.log(includes([1, 2, 3, 4, 5], 17))
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"))
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"))
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"))
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"))

// <<<<<<< HEAD
// const book = {
//     title: ["The Last Kindom"],
//     author: "Bernard Cornell",
//     genres: ["historical", "adventure"],
//     isPublic: true,
//     rating: 0.38,
//     location: {
//         city: "London",
//         country: "Great Britain",
//     },
//     addBook(bookName) {
//         this.title.push(bookName);
//     },
// }

// console.log(book.title);
// console.log(book.genres);
// console.log(book.isPublic);
// console.log(book.price);
// console.log(book.location.country);
// console.log(book.genres.length);
// console.log(book["title"]);
// console.log(book["genres"][0]);

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("Horror");

// console.log(book);

// book.pageCount = 836;
// book.originalLanguage = "en";

// console.log(book)

// book.addBook("Noubody knows");

// console.log(book)

// for(let key in book) {
//     // console.log(key);
//     console.log(book[key]);
// }

// const keys = Object.keys(book);
// const values = Object.values(book);
// const entries = Object.entries(book);
// // console.log(keys);

// for (const key of keys) {
// console.log(key);
// console.log(book[key]);
// }

// for (const value of values) {
//     console.log(value);
// }

// for (const entry of entries) {
//     console.log(entry);
// }

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };

//   // Change code below this line
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Change code above this line
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

//   // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[apartment.tags.length - 1];
//   // Change code above this line

//   console.log(ownerName);
//   console.log(ownerPhone);
//   console.log(ownerEmail);
//   console.log(numberOfTags);
//   console.log(firstTag);
//   console.log(lastTag);

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };

//   // Change code below this line
//   const aptRating = apartment["rating"];
//   const aptDescr = apartment["descr"];
//   const aptPrice = apartment["price"];
//   const aptTags = apartment["tags"];
//   // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

//   // Change code below this line
//   apartment.price = 5000;
//   apartment.rating = 4.7;
//   apartment.owner.name = "Henry Sibola";
//   apartment.tags.push("trusted");

//   console.log(apartment.price);
//   console.log(apartment.rating);
//   console.log(apartment.owner.name);
//   console.log(apartment.tags);

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

//   // Change code below this line
//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location = {};
//   apartment.location.country = "Jamaica";
//   apartment.location.city = "Kingston";

//   console.log(apartment);

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// console.log(product);

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

// console.log(credentials);

// const person = {
//     firstName: "John",
//     age: 30,
//   };
//   const { firstName: personName } = person;
//   console.log(personName);
// =======

// // const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line
//   for (let key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   console.log(keys);
//   console.log(values);

// const keys = [];
// const values = [];

// const advert = {
//   service: "apt",
// };

// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//     if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// };

//   // Change code above this line
// };
//  console.log(keys);
//  console.log(values);

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for (const key in object) {
//         // console.log(object[key]);
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     };
//     console.log(propCount);
//     // Change code above this line
//     return propCount;

//   }

// countProps({})
// countProps({ name: "Mango", age: 2 })
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line

//   const keys = Object.keys(apartment);

//   for (const key of keys) {
//     // console.log(key);
//     // if (key.hasOwnProperty(apartment)) {
//         values.push(apartment[key]);
//     // }
//   };
//   console.log(keys);
//   console.log(values);

// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;

//     for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//         propCount += 1;
//       }
//     }

//     return propCount;
//     // Change code above this line
//   }

// >>>>>>> b1a44869c7c1935efd59865e504460b195d7e949

// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;

//     const objKeys = Object.keys(object);
//     for ( const key of objKeys) {
//       // if (objKeyks.hasOwnProperty(key)) {
//       propCount += 1;
//       // }
//     }

//     console.log(propCount);
//     return propCount;
//     // Change code above this line

//   }

// countProps({})
// countProps({ name: "Mango", age: 2 })
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//     const values = Object.values(salaries);

//     for (const value of values) {
//       totalSalary += value;
//     }
//   console.log(totalSalary);

//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({})
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line

//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//     // console.log(color.hex);
//   }

//   console.log(hexColors);
//   console.log(rgbColors);

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function getProductPrice(productName) {
//     // Change code below this line
//     // productName = null;
//   for (const product of products) {
//     if (productName === product.name) {
//         return product.price;
//     }

//   }
//   return null;

//     // Change code above this
//   }

// console.log(getProductPrice("Radar"))
// console.log(getProductPrice("Engine"))
// console.log(getProductPrice("Grip"))
// console.log(getProductPrice("Scanner"))
// console.log(getProductPrice("Droid"))
// console.log(getProductPrice("Engine"))

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function getAllPropValues(propName) {
//     // Change code below this line
//     const allPropertyValues = [];

//     for (const product of products) {
//         console.log(product[propName]);
//             if (product[propName]) {
//                 allPropertyValues.push(product[propName])
//             }

//     }
//     console.log(allPropertyValues);
//     return allPropertyValues;
//     // Change code above this line
//   }

// getAllPropValues("name")
// getAllPropValues("quantity")
// getAllPropValues("price")
// getAllPropValues("category")

// const a = {x:1, y:2};
// const b = {x:0, z:3, name: "Mango"};

// const c = {
//     ...a,
//     y:10,
//     ...b,
//     x:25,
//     name: "Polli",

// };
// console.log(c);

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function calculateTotalPrice(productName) {
//     // Change code below this line
//     let totalPrice = 0;

//     for (const product of products) {

//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//         }
//     }

//     return totalPrice;

//     // Change code above this line
//   }

// console.log(calculateTotalPrice("Blaster"))
// console.log(calculateTotalPrice("Radar"))
// console.log(calculateTotalPrice("Droid"))
// console.log(calculateTotalPrice("Grip"))
// console.log(calculateTotalPrice("Scanner"))

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature)

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature, icon);

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature, highIcon);

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   // const { hex, rgb } = colors;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" }, tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} } = forecast;

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// console.log(highToday, lowToday, todayIcon);
// console.log(highTomorrow, lowTomorrow, tomorrowIcon);

// // Change code below this line
// function calculateMeanTemperature(forecast) {

//   // const forecast = {
//   //   today: {
//   //     low: 10,
//   //     high: 20
//   //   },
//   //   tomorrow: {
//   //     low: 20,
//   //     high: 30
//   //   },
//   // };

//   const { today: { high: todayHigh, low: todayLow }, tomorrow: { low: tomorrowLow, high: tomorrowHigh }, } = forecast;

//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }))
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }))

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line

// const allScores = [ ...firstGroupScores, ...secondGroupScores, ...thirdGroupScores ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//     const nextTask = { completed, category, priority, ...data };
//     return nextTask;
//   // Change code above this line
// }

// console.log(makeTask({}))
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) )
// console.log(makeTask({ category: "Finance", text: "Take interest" }))
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }))
// console.log(makeTask({ text: "Buy bread" }))

// Change code below this line

// function add(...args) {
//   let sum = 0;

//   for (const arg of args) {
//     sum += arg;
//   }
// //   for (let i = 0; i < args.length; i += 1) {
// //     sum += args[i];
// // };
// return sum;
//   // Change code above this line
// }

// console.log(add(15, 27))
// console.log(add(12, 4, 11, 48))
// console.log(add(32, 6, 13, 19, 8))
// console.log(add(74, 11, 62, 46, 12, 36))

// // Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber)
//     total += arg;
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27))
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))
// console.log(addOverNum(15, 32, 6, 13, 19, 8))
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36))

// // Change code below this line
// function findMatches(firstElements, ...args) {
//   const matches = []; // Don't change this line

//   for (const arg of args) {
//     for (const firstElement of firstElements) {
//           if (arg === firstElement)
//         matches.push(arg);
//     }
//   }

//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2))
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41))
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16))

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
//   },
//   // Change code above this line
// };

// console.log(bookShelf.getBooks())
// console.log(bookShelf.addBook("Haze"))
// console.log(bookShelf.removeBook("Red sunset"))
// console.log(bookShelf.updateBook("Sands of dune", "Dune"))

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],

//   updateBook(oldName, newName) {
//     // Change code below this line

//       this.books.splice(this.books.indexOf(oldName), 1, newName);

//       return this.books;

//     // Change code above this line
//   },
// };

// // console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"))
// // console.log(bookShelf.updateBook("The last kingdom", "Dune"))

// const atTheOldToad = {
//   // Change code below this line
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(potionName) {
//       this.potions.push(potionName);
//       return this.potions;
//     },
//     removePotion(potionName) {
//       this.potions.splice(this.potions.indexOf(potionName), 1);
//       return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//       this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//       return this.potions;
//     },

//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion("Invisibility"));
// // console.log(atTheOldToad.addPotion("Power potion"));
// // console.log(atTheOldToad.removePotion("Dragon breath"));
// // console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// // console.log(atTheOldToad.potions);

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//       this.potions.push(newPotion);
//       return this.potions;
//     },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//         if (this.potions[i].name === potionName) {
//             this.potions.splice(i, 1);
//             return this.potions;
//         }
//     }
//         return `Potion ${potionName} is not in inventory!`;
//     },
//     updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//             return this.potions;
//       }
//     }
//       return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
//   };

// //   console.log(atTheOldToad.getPotions())
// //   console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))
// //   console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }))
// //   console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }))
// //   console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))
// //   console.log(atTheOldToad.removePotion("Dragon breath"))
// //   console.log(atTheOldToad.removePotion("Speed potion"))
//   console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))
//   console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))

// //   console.log(atTheOldToad.getPotions())

// const dogs = {
//     Fido: "Mutt",
//     Hunter: "Doberman",
//     Snoopie: "Beagle"
//   };

//   const myDog = "Hunter";
//   const myBreed = dogs[myDog];
//   console.log(myBreed);

// const cats = {
//     name: "Barsik",
//     age: 5,
//     legs: 4,
// };

// const catAge = "age";
// const myCatAge = cats[catAge];
// console.log(myCatAge);

// const myCar = {
//     make: [],
//     model: "Nissan",
//     year: [],

// }

// const myNewCar = "model";

// console.log(myCar[myNewCar])

// const arrayNumbers = function getName() {
//     // for (const argument of arguments) {
//         const obj =Array.from(arguments);
//         // const obj = Object.keys(arguments);
//     console.log(obj);
//     // };
// };

// arrayNumbers(1, 2, 3, 4, 5);

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line

//   const result = console.log(makePizza());
//   const pointer = console.log(makePizza);

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }

//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }

//   // Chande code below this line
//   function makeMessage(pizzaName, callback) {

//     return callback(pizzaName);
//   }

//   console.log(makeMessage("Royal Grand", makePizza));
//   console.log(makeMessage("Ultracheese", deliverPizza));
// //   console.log(makePizza("Royal Grand"));

// const arr = [2, 4, 6];
// const result = arr.filter((el) => el * 2);
// console.log(result);

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// Звичайне оголошення функції
// const Add = (...rest) => rest;

// console.log(Add(5, 10, 15))

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   // console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index, numbers) => {
//   console.log(`Індекс ${index}, значення ${number}, массив ${numbers}`);
// });

// // Декларативний підхід
// const numbers = [1, 2, 3, 4, 5, 6];
// const filteredNumbers = numbers.filter(value => value > 2);
// console.log(filteredNumbers); // [4, 5]

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   // console.log(isRecipientAvailable);
//   // console.log(Math.random() > 0.5);

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }

//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line

//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`"Eating pizza ${pizzaName}"`)
//   });

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     const isIncludesPizzaName = !this.pizzas.includes(pizzaName);
//     // console.log(isIncludesPizzaName);

//     if (isIncludesPizzaName) {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
// // console.log(onOrderError(5));

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //   totalPrice += orderedItems[i];
//     // }
//     orderedItems.forEach((elem) => {
//         totalPrice += elem;
//     });

//     // Change code above this line
//     return totalPrice;
//   }

// console.log(calculateTotalPrice([12, 85, 37, 4]))
// console.log(calculateTotalPrice([164, 48, 291]))
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] > value) {
//     //     filteredNumbers.push(numbers[i]);
//     //   }
//     // }

//     numbers.forEach( (elem) => {
//         if (elem > value) {
//             filteredNumbers.push(elem);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
//   }

// console.log(filterArray([1, 2, 3, 4, 5], 3)) //повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)) //повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)) //повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)) // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)) //повертає [24, 41, 76]

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //   if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     //   }
//     // }

//     firstArray.forEach( (elem) => {
//         if (secondArray.includes(elem)) {
//             commonElements.push(elem);
//         }
//     });

//     return commonElements;
//     // Change code above this line
//   }

// console.log(getCommonElements([1, 2, 3], [2, 4])) //повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])) //повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])) //повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])) //повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])) //повертає []

// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     // Change code above this line
//     return quantity * pricePerItem;
//   }

// console.log(calculateTotalPrice(5, 100)) //повертає 500
// console.log(calculateTotalPrice(8, 60)) //повертає 480
// console.log(calculateTotalPrice(3, 400)) //повертає 1200

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
//   // Change code above this line

// console.log(calculateTotalPrice(5, 100)) //повертає 500
// console.log(calculateTotalPrice(8, 60)) //повертає 480
// console.log(calculateTotalPrice(3, 400)) //повертає 1200

// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;

//     orderedItems.forEach( (item) =>  totalPrice += item);

//     return totalPrice;
//   }
//   // Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4])) //повертає 138
// console.log(calculateTotalPrice([164, 48, 291])) //повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])) //повертає 1116

// const  changeEven = (numbers, value) => {
//     // Change code below this line
//     const newArr = [];

//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] % 2 === 0) {
//     //     numbers[i] = numbers[i] + value;
//     //   }
//     // }
//       numbers.forEach( (number) => {
//         // console.log(number % 2 === 0);
//         (number % 2 === 0) ? newArr.push(number + value) : newArr.push(number);
//       });
//       return newArr;
//     // Change code above this line
//   }

// console.log(changeEven([1, 2, 3, 4, 5], 10))
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10))
// console.log(changeEven([17, 24, 68, 31, 42], 100))
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100))

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);
// console.log(planets);

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line

//   const titles = books.map(book => book.title);
//   console.log(titles);

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
//   // Change code below this line

//   const genres = books.flatMap(book => book.genres);
//   console.log(genres);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

//   // Change code below this line
// const getUserNames = (users) => {
//     const userNames = users.map((user) => user.name);
//     return userNames;
//  };

//  console.log(getUserNames(users))

// Change code below this line
// const getUserEmails = (users) => {

//     const userEmails = users.map((user) => user.email)
//     return userEmails;

// };
// // Change code above this line

// console.log(getUserEmails(users))

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter( (book, index, array) => array.indexOf(book) === index );

// // console.log(array.indexOf(book))

// console.log(allGenres);
// console.log(uniqueGenres);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67
//   },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log((topRatedBooks));
// console.log((booksByAuthor));

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   },
// ];

// Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   const eyesColor = users.filter( (elem) => elem.eyeColor === color)
//   return eyesColor;
// };

// const getUsersWithEyeColor = (users, color) => users.filter( (elem) => elem.eyeColor === color);
// // Change code above this line

// console.table(getUsersWithEyeColor(users, "blue"))
// console.table(getUsersWithEyeColor(users, "green"))
// console.table(getUsersWithEyeColor(users, "brown"))
// console.log(getUsersWithEyeColor(users, "brow"))

// // const getUsersWithAge = (users, minAge, maxAge) => {
// //   const userAge = users.filter( (element) => element.age > minAge && element.age < maxAge );
// //   return userAge;
// // };

// const getUsersWithAge = (users, minAge, maxAge) => users.filter( (element) => element.age > minAge && element.age < maxAge );

// console.table(getUsersWithAge(users, 20, 30))
// console.table(getUsersWithAge(users, 30, 40))
// console.log(getUsersWithAge(users, 80, 100))

// // Change code below this line
// // const getUsersWithFriend = (users, friendName) => {
// //    const userFriends = users.filter( (element) => element.friends.includes(friendName) );
// //    return userFriends;
// // };

// const getUsersWithFriend = (users, friendName) => users.filter( (element) => element.friends.includes(friendName) )
// // Change code above this line

// console.table(getUsersWithFriend(users, "Briana Decker"))
// console.table(getUsersWithFriend(users, "Goldie Gentry"))
// console.table(getUsersWithFriend(users, "Adrian Cross"))

// // Change code below this line
// // const getFriends = (users) => {
// //    const allFriends = users.flatMap( (element) => element.friends ).filter( (element, index, array) => array.indexOf(element) === index );
// //    return allFriends;
// // };

// const getFriends = (users) => users
//   .flatMap( (element) => element.friends )
//   .filter( (element, index, array) => array.indexOf(element) === index );
// // Change code above this line

// // console.log(users);
// console.log(getFriends(users));

// // Change code below this line
// // const getActiveUsers = (users) => {
// //    const activeUsers = users.filter( (element) => element.isActive );
// //    return activeUsers;
// // };

// const getActiveUsers = (users) => users.filter( (element) => element.isActive );
// // Change code above this line

// console.table(getActiveUsers(users));

// const getInactiveUsers = (users) => users.filter( (element) => !element.isActive );

// console.table(getInactiveUsers(users));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find( (element) => element.title === BOOK_TITLE );
// const bookByAuthor = books.find( (element) => element.author === AUTHOR );

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// // Change code below this line
// // const getUserWithEmail = (users, email) => {
// //   const userEmail = users.find( (element) => element.email === email );
// //   return userEmail;
// // };

// const getUserWithEmail = (users, email) => users.find( (element) => element.email === email );
// // Change code above this line

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"))
// console.log(getUserWithEmail(users, "elmahead@omatom.com"))
// console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"))

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every( (element) => element % 2 === 0 );
// const eachElementInFirstIsOdd = firstArray.every( (element) => element % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every( (element) => element % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every( (element) => element % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every( (element) => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every( (element) => element % 2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);

// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);

// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// // Change code below this line
// // const isEveryUserActive = (users) => {
// //    const isUserActive = users.every( (element) => element.isActive);
// //    return isUserActive;
// //  };

//  const isEveryUserActive = (users) => users.every( (element) => element.isActive);
// // Change code above this line

// console.log(isEveryUserActive(users));

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some( (element) => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some( (element) => element % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some( (element) => element % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some( (element) => element % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some( (element) => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some( (element) => element % 2 !== 0);

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);

// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);

// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);

// // Change code below this line
// // const isAnyUserActive = users => {
// //    const isUserActive = users.some( (element) => element.isActive);
// //    return isUserActive;
// // };

// const isAnyUserActive = users => users.some( (element) => element.isActive);

// // Change code above this line

// console.log(isAnyUserActive(users));

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// // const totalPlayTime = playtimes.reduce( (previousValue, element) => {
// //   return previousValue + element;
// // } );

// const totalPlayTime = playtimes.reduce( (previousValue, element) => previousValue + element);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(playtimes);
// console.log(totalPlayTime);
// console.log(averagePlayTime);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce( (total, player) => {
//   return total += player.playtime / player.gamesPlayed
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// // Change code below this line
// // const calculateTotalBalance = users => {
// //    const totalBallance = users.reduce( (total, user) => {
// //     return total + user.balance;
// //    }, 0 );
// //    return totalBallance;
// // };

// const calculateTotalBalance = users => users.reduce( (total, user) => total + user.balance, 0 );
// // Change code above this line

// console.log(calculateTotalBalance(users));

// // Change code below this line
// // const getTotalFriendCount = users => {
// //    const allFriend = users.reduce( (total, user) => {
// //     return total += user.friends.length;
// //    }, 0 );
// //    return allFriend;
// // };

// const getTotalFriendCount = users => users.reduce( (total, user) => total += user.friends.length, 0 );

// // Change code above this line

// console.log(getTotalFriendCount(users));

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort( (a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort( (a, b) => b - a);

// console.log(ascendingReleaseDates)
// console.log(descendingReleaseDates)

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort( (a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort( (a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder)
// console.log(authorsInReversedOrder)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort( (a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort( (a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort( (a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort( (a, b) => b.rating - a.rating);

// console.table(sortedByAuthorName)
// console.table(sortedByReversedAuthorName)
// console.table(sortedByAscendingRating)
// console.table(sortedByDescentingRating)

// Change code below this line
// const sortByAscendingBalance = users => {
//    const sortBalance = users.sort( (a, b) => a.balance - b.balance);
//    return sortBalance;
// };

// const sortByAscendingBalance = users => users.sort( (a, b) => a.balance - b.balance);

// // Change code above this line

// console.table(users);
// console.table(sortByAscendingBalance(users));

// Change code below this line
// const sortByDescendingFriendCount = users => {
//    const sortFriends = users.sort( (a, b) => b.friends.length - a.friends.length);
//    return sortFriends;
// };

// const sortByDescendingFriendCount = users => [...users].sort( (a, b) => b.friends.length - a.friends.length);

// // Change code above this line

// console.table(users)
// console.table(sortByDescendingFriendCount(users))
// console.table(users)

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// Change code below this line
// const sortByName = users => {
//   const sortedNames = [...users].sort( (a, b) => a.name.localeCompare(b.name) );
//   return sortedNames;
// };

// const sortByName = users => [...users].sort( (a, b) => a.name.localeCompare(b.name) );

// // Change code above this line

// console.log(sortByName(users));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter( (book) => book.rating > MIN_BOOK_RATING )
// .map( (book) => book.author ).sort( (a, b) => a.localeCompare(b) );

// console.log(names)

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line
// const getNamesSortedByFriendCount = users => [...users].sort( (a, b) => a.friends.length - b.friends.length).map( (user) => user.name);
// // Change code above this line

// console.table(getNamesSortedByFriendCount(users));

// // Change code below this line
// const getSortedFriends = users => users.flatMap( (user) => user.friends).filter( (user, index, array) => array.indexOf(user) === index ).sort( (a, b) => a.localeCompare(b) );

// // const getSortedFriends = users => users.flatMap( (user) => user.friends).sort( (a, b) => a.localeCompare(b) ).filter( (user, index, array) => array.indexOf(user) === index );
// // Change code above this line

// console.log(getSortedFriends(users))

// Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//   const totalBalance = users.reduce( (total, element) => {
//     return total += element.balance;
//   }, 0 );
//   return totalBalance;
// };
// const getTotalBalanceByGender = (users, gender) => users.filter( (user) => user.gender === gender ).reduce( (total, element) => total += element.balance, 0 );

// // Change code above this line

// console.table(getTotalBalanceByGender(users, "male"));
// console.table(getTotalBalanceByGender(users, "female"));

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

//   console.log(pizzaPalace.order("Smoked"))
//   console.log(pizzaPalace.order("Four meats"))
//   console.log(pizzaPalace.order("Big Mike"))
//   console.log(pizzaPalace.order("Viennese"))

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersLog())
// console.log(historyService.getEmails())
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"))
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"))

// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
//   };
//   // Change code below this line

//   const child = Object.create(parent);

//   // Change code above this line
//   child.name = "Jason";
//   child.age = 27;

//   console.log(parent)
//   console.log(child)
//   console.log(parent.hasOwnProperty("surname"))
//   console.log(parent.hasOwnProperty("heritage"))

//   console.log(child.hasOwnProperty("name"))
//   console.log(child.name)
//   console.log(child.hasOwnProperty("age"))
//   console.log(child.age)

//   console.log(child.hasOwnProperty("surname"))
//   console.log(child.surname)
//   console.log(child.hasOwnProperty("heritage"))
//   console.log(child.heritage)
//   console.log(parent.isPrototypeOf(child))

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
//   };
//   // Change code below this line

//   const parent = Object.create(ancestor);
//   parent.name = "Stacey";
//   parent.surname = "Moore";
//   parent.age = 54;

//   const child = Object.create(parent);
//   child.name = "Jason";
//   child.age = 27;

//   // Change code above this line

//   console.log(parent)
//   console.log(child)

// class Car {
//     constructor (brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     };

// };

// console.log(new Car());
// console.log(new Car("Audi", "Q3", 36000));
// console.log(new Car("BMW", "X5", 58900));
// console.log(new Car("Nissan","Murano", 31700));

// class Car {
//     // Change code below this line
//     constructor({brand, model, price}) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     // Change code above this line
//   }

//   console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }))
//   console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }))
//   console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }))

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     // this.price = price;
//     return this.price;
//   };

//   changePrice(newPrice) {
//     this.price = newPrice;
//   };

//   // Change code above this line
// }


// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }))
// console.log(getPrice())


// class Storage {
//     constructor ( items = [] ) {
//         this.items = items;
//     }

//     getItems () {
//         return this.items;
//     }

//     addItem (newItem) {
//         this.items.push(newItem);
//     }

//     removeItem (itemToRemove) {
        
//         if ( this.items.includes(itemToRemove) ) {
//             this.items.splice(this.items.indexOf(itemToRemove), 1)
//         }
//     }
// }

// // console.log( new Storage(555) );

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// class StringBuilder {
//     constructor (initialValue) {
//         this.value = initialValue;
//     }

//     getValue() {
//         return this.value;
//     }

//     padStart(str) {
//         this.value = str + this.value;
//     }

//     padEnd(str) {
//         this.value = this.value + str;
//     }

//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."

// builder.padStart("^");
// console.log(builder.getValue()); // "^."

// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"

// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class Car {
//     // Change code below this line
//     #brand;
  
//     constructor({ brand, model, price }) {
//       this.#brand = brand;  
//       this.model = model;
//       this.price = price;
//     }

//     getBrand() {
//         return this.#brand;
//     }

//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }
  
//     // Change code above this line
//   }

//   console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }))
//   console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }))
//   console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }))


// class Storage {
//     // Change code below this line
//     #items;

//     constructor(items) {
//       this.#items = items;
//     }
  
//     getItems() {
//       return this.#items;
//     }
  
//     addItem(newItem) {
//       this.#items.push(newItem);
//     }
  
//     removeItem(itemToRemove) {
//       this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
//   }
  
//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]


// class StringBuilder {
//     // Change code below this line
//     #value;

//     constructor(initialValue) {
//       this.#value = initialValue;
//     }
  
//     getValue() {
//       return this.#value;
//     }
  
//     padEnd(str) {
//       this.#value += str;
//     }
  
//     padStart(str) {
//       this.#value = str + this.#value;
//     }
  
//     padBoth(str) {
//       this.padStart(str);
//       this.padEnd(str);
//     }
//   }
  
//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="


// class Car {
//     // Change code below this line
//     #brand;
//     #model;
//     #price;
  
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.#model = model;
//       this.#price = price;
//     }
  
//     get brand() {
//       return this.#brand;
//     }
  
//     set brand(newBrand) {
//       this.#brand = newBrand;
//     }
  
//     get model() {
//       return this.#model;
//     }
  
//     set model(newModel) {
//       this.#model = newModel;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       this.#price = newPrice;
//     }
//     // Change code above this line
//   }


// class Car {
//     // Change code below this line
//     static MAX_PRICE = 50000;

//     #price;
  
//     constructor({ price }) {
//       this.#price = price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//         if (newPrice < Car.MAX_PRICE) 
//             this.#price = newPrice;
//     }
    
//     // Change code above this line
//   }
  
//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000


// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line

//     static checkPrice(price) {
//         if (price > Car.#MAX_PRICE) {
//             return "Error! Price exceeds the maximum"
//         }
//         return "Success! Price is within acceptable limits"
//     };
    
//     // Change code above this line
//     constructor({ price }) {
//       this.price = price;
//     }
//   }
  
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
  
//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   // Change code below this line

//   class Admin extends User {
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     }
//   }

//   console.log(Admin.AccessLevel.BASIC);
//   console.log(Admin.AccessLevel.SUPERUSER);


// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };

//     constructor({email, accessLevel}) {
//         super(email);
//         this.accessLevel = accessLevel;
//     };
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     constructor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//       this.blacklistedEmails = [];
//     }

//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }

//     isBlacklisted(email) {
//        return this.blacklistedEmails.includes(email);
//     }  
  
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
  
//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true

// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))