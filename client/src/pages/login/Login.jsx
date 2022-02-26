import React, { useContext, useState } from 'react'
import { login } from '../../AuthContext/apiCalls'
import { AuthContext } from '../../AuthContext/AuthContext'
import "./Login.scss"

const Login = () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const {dispatch} = useContext(AuthContext);
    const handleLogin =(e)=>{
        e.preventDefault();
        login({email,password},dispatch)
    }
    return (
        <div className="login">
           <div className="top">
               <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="" />
                </div>
           </div>
            <div className="container">
                <form>
                    <h1>로그인</h1>
                    <input type="email" placeholder="이메일 또는 휴대폰 번호" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="비밀번호" onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="loginButton" onClick={handleLogin}>로그인</button>
                    <span>Netflix 회원이 아닌가요? <b>지금 가입하세요.</b></span>
                    <small>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. <b>자세히 알아보기</b></small>

                </form>
            </div>
        </div>
    )
}

export default Login
