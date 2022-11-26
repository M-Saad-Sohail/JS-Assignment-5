// CHANGING CASE


// TASK #1

// var userInput = prompt("Enter any word or name to convert it into capital letters!");
// alert(userInput.toUpperCase());

// TASK #2

// CHANGING SINGLE WORD TO TITLE CASE:

// var userInput = prompt("Enter any single word or name to convert it into title case!");
// var firstChar = userInput.slice(0,1);
// var secondChar = userInput.slice(1);
// var firstChar = firstChar.toUpperCase();
// var secondChar = secondChar.toLowerCase();
// var titleCase = alert(firstChar + secondChar);

// CHANGING WHOLE SENTENCE WORD TO TITLE CASE:

// let str = prompt("Enter any word or name to convert it into title case!");
// const capitaliseTitle = (str) => {
//    const string = str
//    .toLowerCase()
//    .split(" ")
//    .map(word => {
//       return word[0]
//       .toUpperCase() + word.substr(1, word.length);
//    })
//    .join(" ");
//    return string;
// }
// alert(capitaliseTitle(str));



// STRINGS: MEASURING LENGTH AND EXTRACTING PARTS :

// TASK #1

// var userFavModel = prompt("Enter your fav mobile model.");
// alert("The length of user input is : " + userFavModel.length);

// TASK #2

// var str = prompt("Enter any word or name to find out is last character!");
// var slicing = str.slice(-1);
// alert(slicing);

// OR

// var str = prompt("Enter any word or name to find out is last character!");
// var result = str.charAt(str.length - 1);
// alert(result);



// STRINGS: FINDING SEGMENTS :

// TASK #1

// var word = "Pakistani";
// var showingWord = alert(word)
// var thirdChar = word.slice(2,3);
// var result = alert("Third character is : " + thirdChar);



// STRINGS: REPLACING CHARACTERS :

// TASK #1

// var city = "Hyderabad";
// var showingCity = alert(city);
// var character = city.replace("Hyder", "Islam")
// var result = alert("Convert to : " + character);

// TASK #2

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var before = alert("Before Conversion : " + message);
// var result = message.replace(/and/g,"&");
// var after = alert("After Conversion : " + result);



// ROUNDING NUMBERS :

// // ROUND OFF
// var userInput = prompt("Write a number that contains decimal value and round of the number!");
// var roundOff = Math.round(userInput);
// alert(roundOff);

// // FLOOR
// userInput = prompt("Write a number that contains decimal value and apply floor function on the number!");
// var floorFunc = Math.floor(userInput);
// alert(floorFunc);

// // CEIl
// userInput = prompt("Write a number that contains decimal value and apply ceil function on the number!");
// var ceilFunc = Math.ceil(userInput);
// alert(ceilFunc);



// GENERATING RANDOM NUMBERS :

// TASK #1

// DICE
// var number = Math.random();
// number = number * 6;
// var dice = Math.ceil(number);
// alert(dice);

// TASK #2

// HEAD AND TAILS TOSS
// var randomNum = Math.random();
// randomNum = randomNum * 2;
// var toss = Math.ceil(randomNum);
// if(toss == 2){
//     alert("Its Heads")
// }else if (toss == 1){
//     alert("Its Tails")
// };

// TASK #3

// RANDOM SECRET NUMBER GENERATOR
// var secretNum = Math.random();
// secretNum = secretNum * 10;
// var result = Math.ceil(secretNum);
// console.log(result)
// // USER GUESS
// var userGuess = prompt("I have stored a secret number from 1 to 10, Guess the number!");
// if(userGuess == result) {
//     alert("Congratulations!")
// }else{
//     alert("Try Again!")
// }



// CONVERTING STRINGS TO INTEGERS AND DECIMALS

// TASK #1

// var string = prompt("Enter Your weight in kg to convert it into number!");
// alert(parseFloat(string));



// CONVERTING STRINGS TO NUMBERS, NUMBERS TO STRINGS

// TASK #1

// var string = "472";
// console.log(Number(string));
// console.log("Type of variable is : " + typeof parseFloat(string));

// TASK #2

// var number = "35.36";
// var result = number.replace(".", "")
// console.log(Number(result));



// CONTROLLING THE LENGTH OF DECIMALS

// TASK #1

// var percentage = 30 / 45 * 100;
// console.log(percentage.toFixed(2));



// Assignment # 31-34 : DATE METHODS


// TASK #1

// var currentTime = new Date();
// console.log(currentTime);

// TASK #2

// var date_Time = new Date();
// var months = [
//     "jan",
//     "feb",
//     "march",
//     "aprill",
//     "may",
//     "june",
//     "july",
//     "aug",
//     "sep",
//     "oct",
//     "nov",
//     "dec",
// ];
// var currentMonth = date_Time.getMonth(); /*It shows the index number of month */
// console.log(months[currentMonth]);


// TASK #3

// var date_Time = new Date();
// var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// var currentDay = date_Time.getDay(); /*It shows the index number of day */
// console.log("Today is " + days[currentDay - 1]);

// TASK #4

// var date_Time = new Date();
// var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// var currentDay = date_Time.getDay(); /*It shows the index number of day */
// console.log("Today is " + days[currentDay - 1]);
// var day = "saturday";
// if(day === "sat" ||day === "sun") {
//     alert("It's Fun day!")
// }else{
//     alert("It's work day!")
// }


// TASK #5

// var date_Time = new Date();
// var date = date_Time.getDate();
// console.log(date);
// if(date < 16) {
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }

// TASK #6

// var currentTime = new Date();
// var milliseconds = currentTime.getTime();
// var minutes = (milliseconds / 1000) / 60;
// console.log("Current Date : " + currentTime);
// console.log("Ellapsed milliseconds since januaray 1, 1970 : " + milliseconds);
// console.log("Ellapsed minutes since januaray 1, 1970 : " + minutes);

// TASK #7

// var hr = (new Date()).getHours();
// if(hr < 12 && hr > 1) {
//     alert ("It's A.M");
// }else if (hr < 24 && hr > 12){
//     alert("It's P.M");
// }

// TASK #8

// d = new Date();
// d.setFullYear(2020, 12, 0);
// alert(d)

// TASK #9

// var date = new Date().getTime() - new Date("June 18, 2015").getTime();
// var newDate = Math.floor(date / (1000 * 60 * 60 * 24));
// alert(newDate + "days have passed since 1st Ramadan, 2015");

// TASK #10

// var refrenceDate = new Date("Dec 05, 2015");
// var date = new Date("Dec 05, 2015").getTime() - new Date("Jan 01, 2015").getTime();
// var newDate = Math.floor((date / 1000));
// console.log(`On refrence date ${refrenceDate}, ${newDate} had passed since beginning of 2015`);

// TASK #11

// problem #1
// var date = new Date();
// console.log(date)
// var newDate = date.getHours() - 1;
// console.log(date - newDate)

// TASK #12

// problem #2
// var date = new Date ();
// var newDate = date.setFullYear("11-26-1922");
// var result = date - newDate;
// console.log(result);

// TASK #13

// var userAge = prompt("Enter your age to get your BirthYear!")
// var date = new Date();
// var currentYear = date.getFullYear();
// var birthYear = currentYear - userAge;
// alert("Your BirthYear is : " + birthYear);

// TASK #14

// document.write("<h1>K-Electric Bill");
// document.write("<h3>Month : November");
// document.write("<h3>Number units charge : 403");
// document.write("<h3>Charges per unit : 26 ");
// document.write(`</br><h3>Net Amount Payable (Within due Date) : 10,478 `);
// document.write("<br/><h3>Late Payment Surcharge : 350 ");
// document.write("<h3>Net Amount Payable (After due Date) : 10,828 ");




// Assignment # 35-38 : FUNCTION


// TASK #1

// function date(){
// var currentDate = new Date();
// console.log(currentDate);
// }
// date();

// TASK #2

// function greetings(){
//     var firstName = prompt("Enter your first name?")
//     var lastName = prompt("Enter your last name?")
//     var  fullName = firstName + lastName;
//     alert(`Greetings ${fullName}!, Welocome to our website.`)
// }
// greetings();

// TASK #3

// function addition(){
//     var firstNum = Number(prompt("Enter any first num?"))
//     var secondNum = Number(prompt("Enter any second num?"))
//     var sumOf2Num = firstNum + secondNum;
//     alert(`Sum of first number ${firstNum} and second number ${secondNum} is ${sumOf2Num}`)
// }
// addition();

// TASK #4

// function calculator() {
//     var firstNum = Number(prompt("Enter any first num?"))
//     var secondNum = Number(prompt("Enter any second num?"))
//     var operation = prompt("Enter an operation to apply on these 2 numbers only(+, -, *, / or %)");
//     switch (operation) {
//         case "+":
//             var result = firstNum + secondNum;
//             alert(result);
//             break;
//         case "-":
//             var result = firstNum - secondNum;
//             alert(result);
//             break;
//         case "*":
//             var result = firstNum * secondNum;
//             alert(result);
//             break;
//         case "/":
//             var result = firstNum / secondNum;
//             alert(result);
//             break;
//         case "%":
//             var result = firstNum % secondNum;
//             alert(result);
//             break;
//         default:
//             alert("This operation is not available to perform only(+, -, *, / or %) are available to perform!")
//             break;
//     };
// }
// calculator();

// TASK #5

// function squaring() {
//     var firstNum = Number(prompt("Enter any first num to square?"))
//     var secondNum = Number(prompt("Enter any second num to be first num's power?"))
//     var result = Math.pow(firstNum,secondNum);
//     alert("The answer is : " + result)
// }
// squaring();

// TASK #6

// function factorial() {
// var userInput = Number(prompt("Enter Any positive number to find its factorial!"))
//     if (userInput === 0) {
//         alert("The factorial of number 0 is : 1");
//     } else if (userInput === 1) {
//         alert("The factorial of number 1 is : 1");

//     } else {
//         let fact = 1
//         for (i = 1; i <= userInput; i++) {
//             fact *= i;
//         }
//         alert(`The factorial of number ${userInput} is : ${fact}`)
//     }


// }
// factorial();

// TASK #7

// problem #3
// function counting(){
// var firstNum = Number( prompt("Enter Any First smaller than second Number!"));
// var secondNum = Number( prompt("Enter Any Second bigger than smaller Number!"));
// for (i = firstNum; i <= secondNum; i++){
// console.log(i);
// }
// }
// counting();

// // TASK #8

// function calculateHypotoneuse(perpendicular, base) {
//     let baseSq = calculateSquare(base)
//     let perpendicularSq = calculateSquare(perpendicular)
//     return Math.sqrt(baseSq+perpendicularSq)
// }

// function calculateSquare(num) {
//     return num * num
// }

// var base = prompt("Enter base value");
// var perpendicular = prompt("Enter perpendicular value")
// var hypotoneuse = calculateHypotoneuse(perpendicular,base)
// alert(hypotoneuse);

// // TASK #9

// function area() {
//     var width = prompt("Enter width of the triangle")
//     var height = prompt("Enter height of the triangle")
//     var result = width * height;
//     console.log(result);
// }
// area();

// // TASK #10

// // program to reverse a string

// function reverseString(str) {

//     // return a new array of strings
//     var arrayStrings = str.split("");

//     // reverse the new created array elements
//     var reverseArray = arrayStrings.reverse();

//     // join all elements of the array into a string
//     var joinArray = reverseArray.join("");

//     // return the reversed string
//     return joinArray;
// }

// // take input from the user
// var string = prompt('Enter a string: ');

// var result = reverseString(string);
// console.log(result);

// // TASK #11

// function() {
// var userInput = prompt("Enter any single word or name to convert it into title case!");
// var firstChar = userInput.slice(0,1);
// var secondChar = userInput.slice(1);
// var firstChar = firstChar.toUpperCase();
// var secondChar = secondChar.toLowerCase();
// var titleCase = alert(firstChar + secondChar);
// }


















