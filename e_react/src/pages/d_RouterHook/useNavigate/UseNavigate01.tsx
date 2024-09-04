import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useNaviGate01() {
  //# useNavigate 사용방법
  const navigate = useNavigate();
  // const navigate = useNavigate();
  // >> 네비게이트 라는 아름으로 호출
  // >> 원하는 경로를 문자열 인수로 전달하여 이동

  //? useNavigate 훅의 옵션
  // -state
  // : 네비게이션(경로)과 함께 상태 전달이 가능
  // >> 해당 상태는 udeLocation을 통해 접근 가능

  //? 조건부 네비게이션
  // >> 조건에 따른 페이지 전환

  const goToParentPage = () =>{
    console.log('버튼이 클릭됨');

    //? 경로 지정 시 / 유무의 차이
    // 1) / 지정
    // : 메인경로 + / 경로
    // >> localhost:3000/parents

    // 2) / 미작성 'parent'
    // : 현재경로 + .경로
    // >> localhost:3000 / routerHook / parent

    navigate('/parent',{state:{userId:12345}});
  }

  const goToHomePage = () =>{
    navigate('/');
  }

  const goToPrevPage = ()=> {
    navigate(-1);
  }

  const goToindexPage = () =>{
    navigate('/b_hooks/index.tsx');
  }

const goToHooksPage =() =>{
  navigate('/hooks',{state:{username:'이승아'}});
}

// 로그인 인증이 필요한 페이지로 이동하려고 하는 경우 
// >> 마이페이지,리뷰 작성,주문 조회 등

// + 로그인되어있지 않으면 로그인 페이지로 이동

const isAuthenticated = true;


const handleSignUp = () =>{

  // 인증 된 사용자면 홈 화면으로 이동 가능
  if(isAuthenticated){
    navigate('/');
  }
}

useEffect(()=>{
  if(!isAuthenticated){
    navigate('/login');
  }

},[isAuthenticated,navigate])

  // 임의의 버튼 클릭 시 b_hooks의 index.tsx로 이동
  // >> 이동 시 {uername:'이승아'} 전달

  // b_hooks의 index.tsx에서 전달된 값을 받아
  // : 화면에 '이승아'출력

  return (
    <div>
      <p>useNavigate01 페이지 입니다</p>
      <button onClick={goToParentPage}>parent페이지로 이동합니다</button>

      <button onClick={goToHomePage}>Home페이지로 이동합니다</button>

      <button onClick={goToPrevPage}>이전페이지로 이동합니다</button>

      <button onClick={goToHooksPage} >Hooks 페이지로 이동합니다</button>

      <button onClick={handleSignUp} >회원가입</button>
    </div>
  )
}
