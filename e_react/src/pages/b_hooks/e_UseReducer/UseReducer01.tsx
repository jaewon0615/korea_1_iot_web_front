import React, { useReducer, useState } from "react";

//! React 컴포넌트의 상태 관리
//? useState VS useReducer

// 1) useState
// const [state,setState] = useState<statetype>(initialValue);
// - 리액트에서 가장 기본적인 상태관리 훅

// 2)useReducer
// const [state,dispatch] = useReducer(reducer,initialValue);
// - 복잡한 상태로직을 관리하는데 useState보다 적합
// - 상태 업데이트 로직을 외부에서 선언 가능(재사용성이 용이)

//? useReducer의 기본 구조

// - reducer 함수
// : useReducer의 인자러 전달되는 값
// : 상태변경 로직을 포함(switch,case)하고
// : 이전 상태와 액션 객체를 인자로 받아 새로운 상태를 반환

// - initialValue
// :  리듀서의 초기상태를 정의(상태의 초기값)

// - dispatch 함수
// : 액션을 발생시켜 상태를 업데이트 하는 함수
// >> 해당 함수에 액션을 전달할 경우 리듀서 함수가 호출되어 새로운 상태를 계산

// -state
// : 현재 상태 값(관리되는 데이터)

export type CountState = {
  count:number
}

export type CountAction = {type:'increment'} | {type:'decrement'}

export function reducer(state:CountState,action:CountAction) {
  switch(action.type){
    case 'increment':
      return {count:state.count +1};
      case 'decrement':
      return {count:state.count -1};
  }
}

export default function UseReducer01() {
  const [count, setCount] = useState<number>(0);
  const [state,dispatch] = useReducer(reducer,{count:0});

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <h2>useState를 사용한 상태관리</h2>
      <p>Count:{count}</p>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>

      <h2>useReducer를 사용한 상태관리</h2>
      <p>Count:{state.count}</p>
      <button onClick={()=>dispatch({type:'increment'})}>증가</button>
      <button onClick={()=>dispatch({type:'decrement'})}>감소</button>
    </div>
  );
}
