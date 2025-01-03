// setTimeout(() => {
//   console.log('Hi Vandana')
// }, 2000);

// const timer1= setTimeout('console.log("hi-2")',1000);
// const timer2 = setTimeout('console.log("hi-3")',3000);
// const timer3 = setTimeout(a, 3000, 'str', 99, 54,43, [1,4]);

// const timer4 = setInterval(a, 3000, 'str', 99, 54,43, [1,4]);

// const timer5 = setInterval('console.log("Hello guys")', 2000)//it will print on every 2 second
// setTimeout('console.log("hi-4")',4000);

// // clearInterval(timer1);
// // clearTimeout(timer2);

// function a(){//setTimeout as higher function
//   console.log(arguments[4])
//   // console.log('Hello World');
// }

// let paras= document.querySelectorAll('p');
// for(let i = 0; i<paras.length; i++)
// {
//   let para = paras[i];
//   para.addEventListener('click', function()
//   {
//       alert('You Clicked on para:');

//   })
// }

console.log("Hi");
let paras = document.querySelectorAll('p');
function alertPara(event){
  alert("You have Clicked on Para: " + event.target.textContent);

}
for(let i = 0; i<paras.length;i++)
{
  let para = paras[i];
  console.log("eventListener added");
  para.addEventListener('click', alertPara);
}
