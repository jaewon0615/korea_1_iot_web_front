// main.js

// 1)add
//:named import 이름붙여 가져오기
import { add } from "./mathModule.js";


// 2) subtract
//: Default import
import subtraction from "./mathModule.js";

// 3)multiply
// :named import(as 구문 :mp)
import { multiply as mp } from "./mathModule.js";

// 4)divide
// :모듈 전체 가져오기(as구문:math)
import * as mathModule from './mathModule.js'

console.log(add(10,5));
console.log(subtraction(10,5));
console.log(mp(10,5));
console.log(mathModule(10,5));
console.log(mathModule(10,0));

// cf) 프로그래밍에서 0으로 나눈 경우
// >> 보통 0으로 나누는 경우 오류 발생
// >> 나누는 값이 0이 되지 않도록 조건문