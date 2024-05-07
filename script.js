// // question no . 1
// let time = new Date();
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
// let day = days[time.getDay()]

// let hours =time.getHours();
// let minutes=time.getMinutes();
// let second=time.getSeconds();

// let am_pm;
// // hours setting
// if(hours >= 12){
//     am_pm ="PM";
// }else{
//     am_pm ="AM";
// }
// if(hours > 12){
//     hours = hours -12;
// }else if(hours == 0){
//     hours = 12;
// }

// // add 0 in minutes and seconds
// if (minutes < 10) {
//     minutes = '0' + minutes;
// }
// if (second < 10) {
//     second = '0' + second;
// }
// console.log(`Today is : ${day} .`);
// console.log(`Current Time is: ${hours} ${am_pm} : ${minutes} : ${second}`);

// Question no .2


// let time = new Date();
// let month = time.getMonth();
// let date = time.getDate();
// let year = time.getFullYear();

// month += 1;

// console.log(`${month}-${date}-${year}`);
// console.log(`${month}/${date}/${year}`);

// Loop through the years from 2024 to 2050

// question no .3
// for (let year = 2024; year <= 2050; year++) {
//     // Create a new Date object for January 1st of the current year
//     let januaryFirst = new Date(year, 0,1);
    
//     // Check if January 1st falls on a Sunday (0 represents Sunday)
//     if (januaryFirst.getDay() === 0) {
//         console.log("January 1st, " + year + " falls on a Sunday.");
//     }
// }

// question no .4

// let randomNumber = Math.floor(Math.random()*10);
// let userResult = prompt("Enter your number between 1 to 10")
// if(userResult == randomNumber){
//     if(randomNumber == 0){
//         randomNumber = 1;
//         console.log("Good Work")
//     }
//     else{
//         console.log("Good Work")
//     }
    
// }else{
//     console.log(`Not Matched try again right is ${randomNumber}`)
// }

// question no .6

// let str = "Ahmed Yousuf"

// let newStr = str.replace("Ahmed", "Mir")
// console.log(str);
// console.log(newStr)

