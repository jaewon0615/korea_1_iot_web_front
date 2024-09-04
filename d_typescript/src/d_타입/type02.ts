// type02.ts

export const tmp = '';

//! 타입스크립트의 객체 타입

//? 1. 객체 타입 지정(명시)
// :{}중괄호를 사용하여 표현
// >> 각 데이터별 타입 명시의 구분은 세미콜론(;)사용을 권장

const username:string = '이승아';

const user:{
  // 각 타입 구분시 콤마와 세미콜론 모두 사용 가능
  // >>세미콜론 사용을 권장
  name:string;
  height:number;
  favorite:any[];
  // >> 타입에서 명시한 속성은 반드시 객체 내부에 존재해야 한다
} = {
  // 객체 내부에서 각 속성의 구분은 콤마(,)로 표시
  name:'이승아',
  height:169,
  //hobby:'exercise'-error
  // >> 객체는 타입 명시를 하지 않은 속성은 정의할 수 없다
  favorite:[1,'운동','여행',false,undefined]
}

//! 객체의 선택 속성
// :선택적 프로퍼티
// >> 속성명 "뒤"에 물음표(?)를 붙여 해당 속성이 존재하지 않을 수도 있음을 표현

const ldk: {
  name:string;
  height?:number;  //타입 명시 속성 뒤에 물음표를 작성(선택적 프로퍼티)
} = {
  name:'이도경',
  //height:157  >>생략해도 오류x
}

//! 읽기 전용 속성
// :속성명 "앞"에 raedonly 키워드를 사용하여 해당 속성의 재할당을 금지
//>> 해당 키워드가 붙은 속성은 const 키워드를 사용하여 정의한 변수와 유사(상수)

const raedonlyName:{
  readonly name:string;
  readonly age?:number;
  address?:string;
} = {
  name:'이승아',
  age:50
}

//객체의 속성값 수정
// 객체.속성 = 재할당값;
// raedonlyName.name = '이도경';  -error 읽기전용 속성은 재할당 불가
// raedonlyName.age = 80; -error 읽기전용 속성은 재할당 불가
raedonlyName.address = '부산시 연제구';
console.log(raedonlyName);

// === 객체 타입 어노테이션 ===
//! 문제1
// 다음 객체 타입을 정의하고, 해당 타입을 가진 객체를 하나 생성
// person: 객체는 name(문자열), age(숫자), hobby(문자열, 선택적) 속성을 가져야 한다.

//! 문제2
// readonly를 사용하여 car 객체 타입을 정의하고, model(읽기 전용, 문자열)과 year(숫자) 속성을 포함하는 객체를 생성
// + model 속성에 다른 값을 할당하려고 할 때 발생하는 오류를 설명

const person:{
  name:string;
  age:number;
  hobby?:string;
} = {
  name:'정재원',
  age:25,
  hobby:'sleep'
}

console.log(person);

const raedonlyCar:{
  readonly model:string;
  year:number;
} = {
  model:'sonata',
  year:2024
}

// raedonlyCar.model = 'santafe'





