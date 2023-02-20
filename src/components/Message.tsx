import React from "react";
import { auth } from "../firebase";

const Message = ({ text, uid, photoURL }: any) => {
    // const time = new Date(createdAt.seconds * 1000)
  return (
    <>
      <div className="w-full h-[60px] flex items-center">
        {/* 로그인 된 아이디의 uid 가 현재 uid랑 일치 하지 않을때 */}
        {uid !== auth.currentUser?.uid ?
            <>
                <div className="w-full h-full flex items-center">
                    <img src={photoURL} alt="" className="w-[40px] h-[40px] rounded-[50%] mr-[10px]" />
                    <div className="flex flex-col">
                        <span className="w-full h-[35px] flex items-center bg-gray-200 rounded-[5px]">{text}</span>
                        {/* <span className="text-[11px]">
                            {`${time.getFullYear()}-${String(time.getMonth()+1).padStart(2, "0")}-${String(time.getDate()).padStart(2, "0")} ·
                        ${String(time.getHours()).padStart(2, "0")}
                        :${String(time.getMinutes()).padStart(2, "0")}`}
                        </span> */}
                    </div>
                </div>
            </> : 
            <>
                <div className="w-full h-full flex items-center">
                    <img src={photoURL} alt="" className="w-[40px] h-[40px] rounded-[50%] mr-[10px]" />
                    <div className="flex">
                        <span className="w-full h-[35px] items-center bg-yellow-400 rounded-[5px] flex">{text}</span>
                        {/* <span className="text-[11px]">
                            {`${time.getFullYear()}-${String(time.getMonth()+1).padStart(2, "0")}-${String(time.getDate()).padStart(2, "0")} ·
                        ${String(time.getHours()).padStart(2, "0")}
                        :${String(time.getMinutes()).padStart(2, "0")}`}
                        </span> */}
                    </div>
                </div>
            </>
            }
      </div>
    </>
  );
}

export default Message;