// practice02.js

//! 1.배열 합계를 구하기

let array = [1,2,3,4,5];

function sumArray(array){
  let sum = 0; //배열의 요소 합을 저장할 변수 선언 & 초기화
  let length = array.length;

  for(let i = 0; i < length; i++){
    //array[i]

    //sum= sum+array[i]
    //sum = sum +array[1]
    //sum = sum +array[1]+array[2]
    //sum = sum +array[1]+array[2]+array[3]
    sum += array[i] 
  }
  return sum;
}
console.log(sumArray(array));
console.log(sumArray([24,13,25,32]));

//! 2.특정 수 초과의 요소 필터링
// 배열 안에서 10초과의 요소만 필터링
function filterTen(array){
  let filterd = []; // 10이상의 요소만 담을 새 배열 생성
  let length = array.length;

  for(let i = 0; i < length; i++){
    if(array[i] > 10){
      filterd.push(array[i]);
    }
  }
  return filterd;
}
console.log(filterTen([3,25,31,2,6,11,23]));
console.log(filterTen([12,3,1,28,6,10,21]));

//! 배열의 요소를 검색
function containsElement(array,element){
  for(let i = 0; i < array.length; i++){
    if(array[i] === element){
      return true;
    }
  }
  return false;
}
console.log(containsElement([1,2,3,4,5],3));
console.log(containsElement([1,2,3,4,5],6));

//! 4.배열 평균 구하기
console.log('==평균==');


function findAverage(array) {
  let sum = 0;
  let length = array.length;
  

  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum / length;
}

console.log(findAverage([10,20,30,40,50]));

//! 5.최댓값 찾기
// -배열의 첫번째 요소를 max라는 변수에 담기
// -배열을 순회 하면서 max보다 큰 값이 있을경우 max를 해당값으로 재할당

function findMax(array){
  let max = array[0];
  let length = array.length

  for(let i = 1; i < length; i++){
    if(array[i] > max){
      max = array[i];
    }
  }
  return max;

}
console.log(findMax([10,3,45,78,6]));

