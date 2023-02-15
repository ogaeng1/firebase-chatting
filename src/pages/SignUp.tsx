import React, { useState } from "react";
import Layout from "../components/Layout";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const [emailValue, setEmailValue] = useState<string>("");
    const [passWord, setPassWord] = useState<string>("");

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailValue, passWord)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("회원가입완료")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });

    const onSubmit = (e: any) => {
        e.preventDeafault();
    }

    return (
        <Layout>
            <form onSubmit={onSubmit} className="w-[20%] h-1/2 flex flex-col justify-center gap-2">
                <input type="email" required placeholder="이메일을 입력하세요" className="w-full h-[40px] border border-gray-800 rounded-[10px] px-[5px]" onChange={(e) => {setEmailValue(e.target.value)}} />
                <input type="password" required placeholder="비밀번호를 입력하세요" className="w-full h-[40px] border border-gray-800 rounded-[10px] px-[5px]" onChange={(e) => {setPassWord(e.target.value)}} />
                <button onClick={() => createUserWithEmailAndPassword} className="w-full h-[40px] bg-gray-900 text-white">회원가입</button>
            </form>
        </Layout>
    );
}

export default SignUp;