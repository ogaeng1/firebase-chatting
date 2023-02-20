import React, { useState, useRef } from "react";
import { auth, db } from "../firebase";
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message";
import { BiSend } from "react-icons/bi";
import styled from "styled-components";

const ChattingRoom = () => {
  const messagesRef = collection(db, "message");
  const q = query(messagesRef, orderBy("createdAt"));
  const [messages] = useCollectionData(q, { idField: "id" });

  const [msg, setMsg] = useState("");
  const scroll = useRef();

  const onChange = (e) => {
    setMsg(e.target.value);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await addDoc(messagesRef, {
      text: msg,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-full p-[10px] flex flex-col justify-between">
      <header className="text-center">
        <span>사람들과 대화를 나눠보세요</span>
        <hr className="my-[10px] bg-blue-500" />
      </header>
      <ChatContainer>
        {messages &&
          messages.map((el, idx) => (
            <Message key={idx} {...el} scroll={scroll} />
          ))}
        <div ref={scroll}></div>
      </ChatContainer>
      <hr />
      <FormStyle
        onSubmit={sendMessage}
        className="w-full h-[50px] flex items-center justify-center"
      >
        <input
          type="text"
          placeholder="대화를 입력하세요"
          className="w-[90%] h-[40px] rounded-[10px] border border-black mr-[5px]"
          value={msg}
          onChange={onChange}
        />
        {msg === "" ? (
          <button
            type="submit"
            className="w-[50px] h-[40px] flex justify-center items-center text-lg mx-[5px] border border-inherit rounded-[5px] bg-slate-300 text-white"
            disabled
          >
            <BiSend />
          </button>
        ) : (
          <button
            type="submit"
            className="w-[50px] h-[40px] flex justify-center items-center text-lg mx-[5px] border border-inherit rounded-[5px] transition-colors bg-blue-400 text-black"
          >
            <BiSend />
          </button>
        )}
      </FormStyle>
    </div>
  );
};

export default ChattingRoom;

const ChatContainer = styled.div`
  width: 100%;
  height: 85%;
  border: 1px solid skyblue;
  border-radius: 5px;
  overflow-y: auto;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(#5d88ff, #5d59ce);
    border-radius: 25px;
  }
`;

const FormStyle = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;
