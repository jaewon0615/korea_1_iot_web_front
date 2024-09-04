// 1.객체생성

let person = {
  name:'정재원',
  age: 25,
  isStudent: true
}
console.log(person);

// 2.배열 사용
let fruits = ['apple','grape','banana','orange'];
console.log(fruits[1]);

function add(a,b){
  return a + b;
}
console.log(add(4,6));

for(let key in person){
  console.log(`${key}:${person[key]}`);
}

let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

function combineArrays(arr1,arr2) {
  return arr1.map((element,index) => { element + arr2[index]

  })
}