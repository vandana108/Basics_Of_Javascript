// const message='Hello world'
// console.log("hi vandna")

// console.log(message.length);
// const width =+prompt("Please enter width")
// const height =+prompt("Please enter height")

// document.write('this is the area'+width*height)

// const user1=prompt('Enter your name')
// const age=prompt('Enter your age')
// if(age>18)
// {
//   document.write('You are eligible for Votes')
// }

// JavaScript String slice()
let text = "Apple, Banana, Kiwi";
let parts = text.slice(7, 13);
let str1 = parts;
let str2 = "Vandana Rai";
let name1 = str2.slice(1, 2);


// If we omit the second parameter, the method will slice out the rest of the string:
let str3 = text.slice(7);

// If a parameter is negative, the position is counted from the end of the string:
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12);

// This example slices out a portion of a string from position -12 to position -6:

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);
