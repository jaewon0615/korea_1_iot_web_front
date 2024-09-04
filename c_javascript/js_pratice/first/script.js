//let strigName;
//let numberAge;

//let username;
//let age;


//strigName = prompt('이름을 입력해주세요');
//numberAge = prompt('나이를 입력해주세요');


//document.write('이름:'+strigName);
//document.write('나이:'+numberAge);

//%===연산자 예제===
//prompt 창으로 입력받는 값의 타입은 string(문자열)


//문제 1
/**const PI =3.14;
let radius = 10; //원의 반지름
 //원의 넓이
//원의 넓이값을 계산하여 출력
let area = radius*PI;
console.log(`원의 넓이: ${area}`);

//문제 2
//1 inch = 2.54cm
//단위 변환기 프로그램
//inch값을 변수에 대입하면 cm값으로 변환하여 해당 값을 출력
let inch = 10;
let cm = inch*2.54
console.log(`${inch}inch의 값은 ${cm}입니다`);

//문제3
let stringNum1 = prompt('숫자를 입력해주세요');
console.log(stringNum1 / 2 === 0 ? '짝수':'홀수');


let total = 0;
total += 5;
total *= 3;
total -= 2;

console.log('최종결과',total);*/

//===조건문 예제===
//윤년의 조건
//연도가 4로 나뉘어 떨어지는 해는 윤년입니다
//그 중에서 100으로 나누어 떨어지는 해는 윤년이 아닙니다
//하지만 400으로 나누어 떨어지는 해는 다시 윤년이 됩니다
//윤년일 경우 randpmyear 는 윤년입니다
//윤년이 아닐경우 rnass 는 윤년이 아닙니다

let randomYear=2019;

if(randomYear %4 == 0){
  console.log(`${randomYear}년은 윤년입니다`);
}else if(randomYear %4 ==0 && randomYear %100 == 0){
  console.log(`${randomYear}년은 윤년이 아닙니다`);
}else(randomYear %4 == 0 || randomYear %400 == 0);
console.log(`${randomYear}년은 윤년입니다`);

//공간분리 div





