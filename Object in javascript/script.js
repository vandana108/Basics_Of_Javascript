// const user = {firstName: 'Akash'}



// const user2 ={
//   firstName:'Vandana',
//   "last-Name": 'singh',
//   lastName: 'Rai',
//   rollNumber: 1906410100059, 
//   course: 'B.tech',
//  pata:{
//     pincode: 221101,
//     populaton: '40 crore',
//     state: 'uttar pradesh',
//  },
// }
// console.log(user2.firstName);
// console.log(user2.lastName);
// console.log(user2["last-Name"]);
// console.log(user2.pata.populaton)


// const car = { type:"Fiat", model:"500", color:"white",
//    location:{
//       pin:"343443",
//       area:"good-Environment",
//    },

// }
// console.log(car.location.pin);
//or
// console.log(car.location["pin"])
// console.log(car.type);
// console.log(car.location.pin)


// const myObj = {
//    name:"Kajal",
//    location: "Varanasi",
//    herCar: {
//       car1:"Ford",
//       car2:"Audi",
//       car3:"BMW",
//    },
// }
// document.getElementById("demo").innerHTML=myObj.herCar.car1;
// document.getElementById("demo").innerHTML = myObj.herCar["car2"];//we can also use bracket


//Object Methods
// const person = {
//    firstname: 'Jane',
//    lastname: 'Doe',
//    fullname: function() {
//      return this.firstname + ' ' + this.lastname;
//    }
//  };


// Displaying Properties in a Loop
// const person = {
//   name:"John",
//   age:30,
//   city:"New York"

// };

// //Build a Text

// let text =  "";
// for(let x in person){
//   text= text+person[x]+ " ";

// };


//using object entries

// const fruits = {Bananas:300, Oranges:200, Apples:500, Kiwi: 600};

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// // Stringify Object
// let myString = JSON.stringify(person);


// Object Constructor Functions
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;

//   //create 2 Person Objects

//   const myFather = new Person("John", "Doe", "50", "blue")
//   const myMother = new Person("Sally", "Rally", 48, 'green')
//   //Display Nationality
  
// }

const obj = {
  a:10,
  b:20,
  str: "Hello",
  x:function(){
    console.log(this.a);
    console.log(this.str);
  },
}
obj.x();
