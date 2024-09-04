import React from 'react'
import puppy01 from '../../../assets/dog01.jpg'



export function Img() {

  return(
    <div>
  <img src={puppy01} alt="강아지" width={300} />
    </div>
  )
}

export default function Component02() {
  return (
    <div>
    <h1>Component1 컴포넌트의 시작</h1>
    <img src={puppy01} alt="강아지" width={100} />
    <Img/>
    </div>
  )
}
