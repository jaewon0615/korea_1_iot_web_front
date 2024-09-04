// module02.js

//! impoer & expoort 문(es6 모듈 시스템)

//# 1.export문
// :모듈에서 다른 파일로 함수,변수,클래스 등을 내보낼 때
// >> 이름 붙여 내보내기,기본 내보내기

// 1)Named Exports(이름 붙여 내보내기)
// :하나의 모듈에서 여러 항목을 내보내기 가능
// :각 항목의 고유한 이름으로 참조
// >> 각 항목 앞에 export키워드 사용


export const PI = 3.1412341234;

export function multiply(x,y) {
  return x * y;
}

// 2)Default Exports(기본 내보내기)
// :모듈 당 하나의 항목만 내보내기 가능
// :주로 한 모듈에 하나의 주요 기능이 있는 경우에 적합
// >> 각 항목 앞에 export default 사용

export default function add(x,y) {
  return x + y;
}

// export default function sum(x,y) {
//   return x+y;
// }
// -하나의 모듈에는 하나의 기본 내보내기만 가능!

//# import 문
// :다른 모듈에서 내보낸 기능을 사용하기 위해 import문을 사용
// >>export 방법에 따라 import하는 방법이 다름

// 1)import named exports(이름 붙여 가져오기)
//* import {모듈명} from '해당 모듈의 상대 경로 지정.확장자';

// 2)import default exports(기본 가져오기)
//* import 모듈명 (사용 개발자 지정 가능)from '해당 모듈의 상대 경로';
