import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// Solution No-1

// function getTotalX(a, b) {
//   // Write your code here
//   let result = 0;

//     for(let i=1; i<100; i++){
//     if (
//       a.every((item) => i % item === 0) &&
//       b.every((item) => item % i === 0)
//     ) {
//       result++;
//     }

//   }
//   return result;
// }

// Solution No-2

// function getTotalX(a, b) {
//   // Write your code here
//   let result = 0;
// let index = 1;
// let cloneA = a.splice(1, a.length);

// while (a[0] * index <= b[0]) {

//   if (
//     cloneA.every((item) => (a[0] * index) % item === 0) &&
//     b.every((item) => item % (a[0] * index) === 0)
//   ) {

//     result++;
//   }
//   index++;
// }
// return result;

// }

let task = getTotalX([2, 6], [24, 36]);
console.log(task);
