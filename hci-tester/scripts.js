// function outerFunction() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counterA = outerFunction();
// const counterB = outerFunction();
// counterA();
// counterA();
// counterB();

// const div = document.querySelector('div');

// div.addEventListener("click", (event)=>{
//     if(event.target.tagName === 'BUTTON'){
//         console.log(event.target.innerText)
//     }
// })

// console.log(0 == "");
// console.log(0 === "");

// function updateExternalLinks() {
//     const links = document.querySelectorAll('a.external-link');
//     links.forEach(link => {
//       link.setAttribute('href', 'https://newsite.com');
//     });
//   }

// number.sort(a, b);

// console.log(number);

// let number = [3, 10, 1, 7];

// number.sort((a, b) => b - a);

// console.log(number); // Output: [1, 3, 7, 10]

// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// console.log("End");

// const person = {
//   name: "John",
//   greet() {
//     return `Hello, ${this.name}`;
//   },
// };

// const greet = person.greet;
// console.log(greet());

// const obj = {
//   count: 10,
//   increment: () => {
//     return ++this.count;
//   },
// };

// console.log(obj.increment());

// const result = 0 || ("default" && "value");
// console.log(result);

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers);
