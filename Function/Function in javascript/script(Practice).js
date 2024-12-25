// function introduceMe()
// {
//   console.log('hi');
//   console.log('My name is Vandana');
//   console.log('I am Software Developer');
//   return 'Vandnaa'
// }
// console.log('*****************************');


// function introduceName(username, userage, userId)
// {
//   console.log('hi');
//   console.log(username);
//   console.log(userId);

// }
// introduceName('Vandnaa', 32, 53433);


//add two numbers
//declaration function
function addTwoNumber(num1, num2)
{
  return num1+num2;
}

const answer = addTwoNumber(45,5);
console.log(answer);


//Anonymous function or  Expression function
const hello = function(){
  console.log('Hi, guys hope you are doing great');
}

//Arrow function
let result = () => {
  console.log('This is my result');
  return 8+4;
}

function func(a, b) {
  let sum = a + b;
  console.log(sum);
  return sum;
}
console.log(func(1, 2));

//Method 

const some = {
  location:function(){
    //content
    console.log('this is my location')
  },
  userName:function(){
    console.log('my name is Utkarsh')
  },
  projectID:function()
  {
    console.log('this is my Project ID')
  }
}