let number = 10;
if(number > 0){
  console.log('양의 정수 입니다');
}

let stringData = '';
let numberData = 0;

if(!stringData){
  console.log('빈 문자열은 false로 인식');
}

number = -10;
if(number > 0){
  console.log('양의 정수 입니다');
} else {
  console.log('양의 정수가 아닙니다');
}

if( number > 0 ){
  console.log('양의 정수입니다');
} else if( number < 0){
  console.log('음의 정수입니다');
} else{
  console.log('0입니다');
}

if(number > 0) console.log('양수 o');
else console.log('양수x');

let age = 14;
if(age < 13){
  console.log('어린이');
} else if( age >=13 && age <20){
  console.log('청소년');
} else{
  console.log('성인');
}

let fruit = 'banana';

switch(fruit){
  case 'apple':
    console.log('사과');
    break;
  case 'banana':
    console.log('바나나');
    break;
  case 'orange':
    console.log('오렌지');
    break;
}

let score;
let grade;

if(score < 0 || score > 100){
  console.log('유효한 점수가 아닙니다');
}else if(score >= 90){
  console.log('A학점 입니다');
}else if(score >= 80){
  console.log('B학점 입니다');
}else if(score >= 70){
  console.log('C학점 입니다');
}else if(score >=60){
  console.log('D학점 입니다');
} else{
  console.log('F학점 입니다');
}














