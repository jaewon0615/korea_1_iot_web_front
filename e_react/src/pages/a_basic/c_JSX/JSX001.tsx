import React from 'react'


function Div() {
  return(
    <>
    <div className='hello'></div>
    <div className='hello'></div>
    <div className='hello'></div>
    </>
  )
}


export default function JSX001() {
  const welcomeMsg = "환영합니다";

  const greeting = (name:string) => `안녕하세요 ${name}님`;

  const userInfo = {
    name:'이승아',
    age:50
  };

  const handleClick = (value: string) =>{
    console.log(`${value}`);
  };

  const divStyle ={
    backgroundColor:'orange',
    color:'red',
    padding:'10px'
  }
  return (
    <div>JSX001
<h1>안녕하세요</h1>
      <div style={divStyle}>안녕하세요</div>
      <Div/>

    </div>
    
  )
}
