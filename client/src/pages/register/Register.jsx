import { axios } from 'axios';
import React,{useState,useRef} from 'react'
import "./Register.scss"
import {useHistory} from "react-router-dom"

export default function Register(){
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
  
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
  
    const handleStart = () => {
      setEmail(emailRef.current.value);
    };
    const handleFinish = async (e) => {
        e.preventDefault();
        setUsername(usernameRef.current.value);
        setPassword(passwordRef.current.value);
        try{
            await axios.post("auth/register", {email,username,password});
            history.push("/login");
        }catch (err) {}
    };
    return (
        <div className="register">
           <div className="top">
               <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="" />
                    <button className="loginButton">Sign In</button>
               </div>
           </div>
            <div className="container">
                <h1>영화와 시리즈를 무제한으로.</h1>
                <h2>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h2>
                <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
                {!email ? (
                <div className="input">
                    <input type="email" placeholder="이메일 주소" ref={emailRef}/>
                    <button className="registerButton" onClick={handleStart}>시작하기</button>
                </div>
                ) : (
                <form className="input">
                    <input type="username" placeholder="이름" ref={usernameRef}/>
                    <input type="password" placeholder="비밀번호" ref={passwordRef}/>
                    <button className="registerButton" onClick={handleFinish}>시작하기</button>
                </form>
                )}
            </div>
        </div>
    )
}


