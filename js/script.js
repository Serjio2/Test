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


function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
  
    switch (password) {
      case null:
        message = "Canceled by user!";
        break;
        
      case ADMIN_PASSWORD:
        message = "Welcome!";
        break;
        
      default:
        message = "Access denied, wrong password!";
    }

    console.log(message);
    // Change code above this line
    return message;
  }

checkPassword("mangohackzor")
checkPassword(null)
checkPassword("polyhax")
checkPassword("jqueryismyjam")