// helloWold.ts

console.log('Hello Typescript');

// ts파일 명령어를 실행하기 위해서는
// :해당 파일을 js파일로 컴파일(번역)이 필요

//>> tsc 파일명.ts
//   :같은 파일명의 js확장자 파일이 자동 생성

//>> 컴파일 된 js파일을 node.js 런타임 환경에서 실행
//   :node 파일명.js 

let num: number = 3;   //타입 기능을 사용하는 ts문법

console.log(num);
//>> ts코드는 실시간으로 js로 컴파일되지 x

//! ts-node
// :ts코드를 실시간으로 js로 컴파일하고 실행(js파일 생성 x)

//? ts-node 설치
// node_modules 폴더가 존재하는 프로젝트 최상단의 터미널에서 설치


console.log('ts-node로 ts파일 실행하기');
// ts-node 파일명.ts

//# ts파일 컴파일& js 파일 실행 명령어

// 1.node 파일명.js
// :js파일 런타임 실행 명령어

// 2.tsc 파일명.js
// :ts파일을 js파일로 컴파일(번역) 하는 명령어
//>> 동일한 이름의 js 파일이 생성
// +)tsc로 컴파일된 js파일에서도 실시간 컴파일은 이루어지지x

// 3.ts-node 파일명.ts
// :ts파일을 실시간으로 js로 컴파일하고 실행하는 명령어
//>> js파일 생성x