// auth: 허가, 인증

import { create } from "zustand";

//# 사용자 인증을 관리하는 스토어
interface AuthState {
  islogged:boolean;
  user: string | null;
  login:(user:string) => void;
  logout:() => void;
}
export const useAuthStore = create<AuthState>(set =>({
  user : null,
  islogged:false,
  login:(user) => set({user}),    // 로그인 상태 설정
  logout:() => set({user:null , islogged:false})   // 로그아웃 상태 설정
}));

