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

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line

    const unitedArray = firstArray.concat(secondArray).slice(0, maxLength);

    console.log(unitedArray);

  // Change code above this line
}

makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)