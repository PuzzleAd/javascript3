// TODO": first function example


 

// function greetingUser(firstName) {
//     console.log(`Hello ${firstName}`);
// }

// greetingUser("Irakli");


// function numberSum(num1, num2) {
//     console.log(num1 + num2);
//     console.log(num1 - num2);
// }


// numberSum(10,5);

// function randomNumber() {
//     console.log(Math.floor(Math.random() * 10) + 1);
// }

// randomNumber();

// function scanner(a) {

//     if(a % 2 === 0){
//         console.log("odd");
//     }else if(a % 2 === 1){
//         console.log("even");
//     }else if(typeof(a) !== typeof(Number(a))){
//         console.log("prompt number");
//     }else if(a % 2 !== 0 || a % 2 !== 1){
//         console.log("not full number");
//     }else{
//         console.log("Error!!");
//     }
// }

// scanner(3.5);


// TODO: discounter



// let price = Number(prompt("Enter price: "));

// let sale = Number(prompt("Enter sale percent: "));

// let finalPrice = 0;

// function saleCalculator(num1, num2) {
//     finalPrice = (num1 * (100 - num2)) / 100;
    
// }

// saleCalculator(price, sale);



//! Homework - function 1
// TODO: Feedback  


// function getFeedback(point, firstName){
//     if (point < 51) {
//         console.log(`სამწუხაროდ, ${firstName} თქვენ ვერ გადალახეთ ბარიერი, დაგაკლდათ ${51 - point} ქულა, შემდეგი წლისთვის უკეთესად მოემზადეთ.`);
//     } else if(point >= 51 && point <= 90){
//         console.log(`გილოცავთ თქვენ გადალახეთ ${point -51} ქულით ბარიერი.`);
//     }else if(point > 90 && point <= 100){
//         console.log(`ძალიან კარგი ნამუშევარია თქვენ მოხვდით ფრიად კატეგორიაში`);
//     }else{
//         console.log("არასწორი პარამეტრები!!");
//     }
// }

// getFeedback(101, "ირაკლი")



//! Homework - function 2
// TODO: ROCK PAPER SCISSORS

// let randomObject = 0;
// let ourObject = prompt("Enter ROCK, PAPER or SCISSORS: ");

// ourObject = ourObject.toUpperCase();

// function randomizer(){
//     randomObject = Math.floor(Math.random() * 3);
//     switch (randomObject) {
//         case 1:
//             randomObject = "SCISSORS";
//             break;
//         case 2:
//             randomObject = "ROCK";
//             break;
//         case 0:
//             randomObject = "PAPER";
//             break;
    
//         default:
//             console.log("ERORR!");
//             break;
//     }

// }

// randomizer();

// function WinOrLose() {
//     if(ourObject === randomObject){
//         console.log("Tie!");
//     }else if((ourObject === "SCISSORS" && randomObject === "PAPER") || (ourObject === "ROCK" && randomObject === "SCISSORS") || (ourObject === "PAPER" && randomObject === "ROCK")){
//         console.log("YOU WON!");
//     }else if((ourObject === "SCISSORS" && randomObject === "ROCK") || (ourObject === "ROCK" && randomObject === "PAPER") || (ourObject === "PAPER" && randomObject === "SCISSORS")){
//         console.log("YOU LOST!");
//     }else{
//         console.log("ERROR!!!");
//     }
// }


// WinOrLose();



//! Homework - Function 3
// TODO: duel game

// let firstNumber = Math.floor(Math.random() * 7);
// let secondNumber = Math.floor(Math.random() * 7);
// let myNumber = Number(prompt("Enter your number from one to six:"));

// function duel(){
//     if (myNumber > 6 || myNumber <= 0) {
//         console.log("Undefined number entered!");
//     } else if(myNumber === firstNumber && secondNumber !== firstNumber){
//         console.log("You won!");
//     }else if(myNumber !== firstNumber && secondNumber === firstNumber){
//         console.log("You lost!");
//     }else if((myNumber !== firstNumber && secondNumber !== firstNumber) || (myNumber === firstNumber && secondNumber && firstNumber)){
//         console.log("Tie!");
//     }else{
//         console.log("Unexpexted error!")
//     }
// }

// duel();

