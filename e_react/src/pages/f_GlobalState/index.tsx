import React from 'react'
import Context from './Context'
import Zustand01 from './Zustand01'
import Zustand02 from './Zustand02'
import { useMemberStore } from '../../stores/user.store'

export default function Index() {
  const {members} = useMemberStore();
  return (
    <div>
      <h1>리액트 전역상태 관리(Context API / Zustand)</h1>
      <Context/>
    <hr />
      <Zustand01/>
      <Zustand02/>
      <p>{members.map(member =>(
        <p>{member.id} / {member.name}</p>
      ))}</p>

    </div>
  )
}
