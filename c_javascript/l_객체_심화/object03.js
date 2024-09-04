// object03.js

//! 4.Math 내장 객체
// :수학과 관련된 기본 연산의 객체

// 속성:PI
console.log(Math.PI);

//메서드
// 1)Math.random()
// :0이상 1미만의 난수 생성
console.log(Math.random());
console.log(Math.random()*10);

// 2)Math.floor()
// :숫자를 가장 가까운 정수로 내림
console.log(Math.floor(Math.random()*10));

// 3)Math.sqrt()  //square root
console.log(Math.sqrt(16));
console.log(Math.sqrt(144));

// 4)Date()객체
// :자바스크립트에서 날짜와 시간을 관리하기 위해 사용되는 내장 객체

//현재 날짜와 시간을 반환
let now = new Date();
console.log(now);


//getData():현재 '일'(1~31)
console.log(now.getDate());

//getDay():현재 '요일'
// >>일요일 0으로 시작 ~ 토요일을 6으로 표기
console.log(now.getDay());

//getFullYear():현재 '년'
console.log(now.getFullYear());

//getMonth(): 현재 '월'
// >> 1월이 0부터 시작 12월을 11로 표기
console.log(now.getMonth());
console.log(now.getMonth()+1);

//시간
//getHours():0-23
//getMinutes():0-59
//getSeconds():0-59

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//현지 날짜 표기법 & 시간 표기법
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
