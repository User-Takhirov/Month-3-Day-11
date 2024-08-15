// let studentData = [12, 24, ["jack", 24], null, ["sara", 18], "lorem"];

// let data = [];

// const x = (arr) => {
//   for (let i of arr) {
//     data.push(i);
//   }
// };

// for (let i of studentData) {
//   if (typeof i == "object" && i?.length) {
//     x(i);
//   }
// }
// console.log(data);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// yoshlarni bitta arrayga push qilish
// let arr = [
//   {
//     name: "John",
//     age: 21,
//   },
//   {
//     name: "Alex",
//     age: 29,
//   },
//   {
//     name: "Cena",
//     age: 11,
//   },
// ];
// let ages = [];

// for (let i in arr) {
//   ages.push(arr[i].age);
// }

// console.log(ages);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// homework
///1
// const obj = {
//   name: "John",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     zip: "10001",
//   },
//   contact: {
//     phone: "555-555-5555",
//     email: "john@example.com",
//   },
// };
// const newArr = [];
// for (const i in obj) {
//   if (typeof
//     obj[i]== 'object' &&
//     typeof obj[i] === "object" &&
//     obj[i] !== null
//   ) {
//     newArr.push(obj[i]);
//   }
// }
// console.log(newArr);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2
// let arr = [
//   1,
//   3,
//   "lorem",
//   5,
//   null,
//   { name: "Alexa", age: 21 },
//   { name: "Javohir", age: 18 },
// ];
// function x(arr) {
//   let newArr = [];
//   for (let i of arr) {
//     if (typeof i === "object" && i !== null) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// }
// console.log(x(arr));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3
// let key = prompt("keyWords kiriting");
// let arr = [
//   {
//     name: "John",
//     age: 21,
//     id: 3,
//   },
//   {
//     name: "Alex",
//     age: 29,
//     id: 2,
//   },
//   {
//     name: "Cena",
//     age: 11,
//     id: 1,
//   },
// ];
// let ages = [];
// for (let i in arr) {
//   ages.push(arr[i][key]);
// }

// console.log(ages);


//4
// let arr = [1,3,4,5,{name: 'Asil',age: 21},null,{  name: 'Alish', age: 30}];

// function x(arr){
//   let newArr = [];
//   for (let i of arr) {
//     if (typeof i == "object" &&  i !== null) {
//       if (i.age > 20) {
//         newArr.push(i);
//       }
//     }
//   }
//   return newArr;
// };
// console.log(x(arr));
