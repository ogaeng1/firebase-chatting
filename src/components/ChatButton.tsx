import React, { useState } from "react";
import ChattingRoom from "./ChattingRoom";

const ChatButton = () => {
    const [chatOpen, setChatOpen] = useState<boolean>(false);
    const onChatOpen = () => {
        setChatOpen(!chatOpen);
    }
    return (
        <>
            <div className="w-full">
                <div onClick={onChatOpen} className="w-[50px] h-[50px] border rounded-[50%] flex justify-center items-center fixed right-[30px] bottom-[30px] cursor-pointer z-20">ㅇ</div>
            </div>
            {chatOpen ? 
            <ChattingRoom>
                <header onClick={onChatOpen} className="w-full flex justify-end">닫기</header>
            </ChattingRoom> : null}
        </>
    );
}

export default ChatButton;