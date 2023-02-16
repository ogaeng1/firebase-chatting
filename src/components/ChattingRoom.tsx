import React from "react";

interface ContentsProps {
    children: React.ReactNode;
}

const ChattingRoom = ({ children } : ContentsProps) => {
    return (
        <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 flex z-20 justify-center items-center">
            <div className="w-1/3 h-3/4 border border-gray-900 rounded-[10px] absolute box-border bg-[#fff]">
                <div className="w-full h-full">{children}</div>
            </div>
        </div>
    );
}

export default ChattingRoom;