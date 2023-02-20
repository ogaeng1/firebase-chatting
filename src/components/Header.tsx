import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const onLogOut = () => {
        signOut(auth).then(() => {
            alert("로그아웃 되었습니다.");
            navigate("/")
        }).catch((error) => {
          return error;
        });
    }
    return (
        <div className="w-full h-[60px] bg-slate-900 text-white text-sm flex justify-center items-center mdSize-header ">
            <span>{`${auth.currentUser?.email} 님 안녕하세요`}</span>
            <div className="h-1/2 border mx-[10px]"></div>
            <button onClick={onLogOut}>로그아웃</button>
        </div>
    );
}

export default Header;