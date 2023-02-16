import React, { useEffect } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const onLogOut = () => {
        signOut(auth).then(() => {
          alert("로그아웃 되었습니다.");
          navigate("/");
        }).catch((error) => {
          // An error happened.
        });
    }

    if (auth.currentUser?.displayName === undefined) {
        return (
            <div className="w-full h-[80px] bg-blue-500 text-2xl flex items-center justify-between px-[10px]">
                <Link to="/">
                    <span>홈</span>
                </Link>
                <Link to="/login">
                    <span>로그인</span>
                </Link>
            </div>
        );
    } else {
        return (
            <div className="w-full h-[80px] bg-blue-500 text-2xl flex items-center justify-between px-[10px]">
                <Link to="/">
                    <span>홈</span>
                </Link>
                <button onClick={onLogOut}>로그아웃</button>
            </div>
        );
    }
}

export default Header;