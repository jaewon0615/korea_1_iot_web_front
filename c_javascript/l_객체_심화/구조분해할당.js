// 구조분해할당.js

//! 구조 분해 할당(다중 할당)
// :배열과 객체의 값을 한번에 여러개의 변수에 할당

//? 다중 할당의 형태

// : [식별자,식별자,식별자,...] =배열;
// : {속성명,속성명,속성명,...} =객체;

// cf)식별자: 변수를 나열한 형태

let array = [1,2,3];
let [a,b] = array;

// let a = array[0];
// let b = array[1];

console.log(a);
console.log(b);

// >> 배열의 크기는 같을 필요가 없다 - 넘치는 값은 생략

const arrayA = [1,2,3,4,5];
const [aa,bb,cc] = arrayA;

// const aa =1;
// const bb =2;
// const cc =3;

console.log(aa,bb,cc);

//객체 생성
const bookObject = {
  name:'js공부하기',
  price: 25000,
  publisher:'코리아it'
}

//? 객체는 배열과 달리 순서 상관 없음
// :각각 연결된 속성명으로 값이 자동 전달
const {publisher,name,price,author} = bookObject;

console.log(name,price,publisher,author);

//새로운 이름에 저장

const {aaa=name,bbb=price} = bookObject;
console.log(aaa,bbb);




