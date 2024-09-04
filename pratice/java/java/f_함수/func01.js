//두 수의 합을 구하는 함수
function sum(a,b){
  return a+b;
}
let result=sum(3212,32123);
console.log(result);

// 1.함수 선언식
function greet() {
  console.log('안녕하세요');
}
greet();

// 2.함수 표현식
const greet2 = function() {
  console.log('안녕하세요^^');
}

greet2();

// 3.화살표 함수
const greet3 = () => {
  console.log('안녕하세요오');
}

greet3();

function introduce(name,age){
  console.log(`${name} is ${age} years old`);
}
introduce('정재원',25);

function subtract(a,b) {
  result = a-b;
  return result;
}
subtract(32321,5454);
console.log(result);

// 1.함수 선언
function square1(x){
  let double = x * x
  return double;
}
console.log(square1(10));

// 2.함수 표현
const square2 = function(x){
  return x * x
}
console.log(square2(6));

// 3.화살표 함수
const square3 = x => x * x;
console.log(square3(32));

function greet1(age,name = '비회원고객') {
  console.log(`안녕하세요${name}님 ${age}세 입니다`);
}
greet1(27,'정재원');

function findMin(...numbers) {
  let minNumber = Math.min(...numbers)
  return minNumber;
}
console.log(findMin(2,321,4,12,321,443,433,33));