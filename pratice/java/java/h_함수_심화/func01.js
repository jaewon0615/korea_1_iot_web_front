console.log('==콜백함수:선언적 함수==');
function callback1(callbackFunc){
  for(let i = 0; i < 3; i++){
    callbackFunc(i);
  }
}

function print(index){
  console.log(`${index}번째 함수 호출`);
}
callback1(print);

const 

