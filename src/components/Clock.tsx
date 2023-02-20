import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => currentTime(), 1000)
        return() => {
            clearInterval(timer)
        }
    })

    const currentTime = () => {
        setTime(new Date())
    }
    return (
        <>
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-col justify-center items-center gap-5">
                    <CurrentDate>{`${time.getFullYear()}-${String(time.getMonth()+1).padStart(2, "0")}-${String(time.getDate()).padStart(2, "0")}`}</CurrentDate>
                    <CurrentTime>{`${String(time.getHours()).padStart(2, "0")} : ${String(time.getMinutes()).padStart(2, "0")} : ${String(time.getSeconds()).padStart(2, "0")}`}</CurrentTime>
                </div>
            </div>
        </>
    );
}

export default Clock;

const CurrentDate = styled.div`
    font-size: 40px;
    color: #fff;
    font-weight: 900;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
    @media only screen and (max-width: 640px) {
        font-size: 30px;
    }
`;

const CurrentTime = styled.div`
    font-size: 40px;
    color: #fff;
    font-weight: 900;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #60ff6b, 0 0 30px #60ff6b, 0 0 40px #60ff6b, 0 0 55px #60ff6b, 0 0 75px #60ff6b;
    @media only screen and (max-width: 640px) {
        font-size: 30px;
    }
`;