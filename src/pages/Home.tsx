import React from "react";
import { auth } from "../firebase";
console.log(auth);

const Home = () => {
    return (
        <div className="w-full h-10 bg-blue-500">
            {auth.currentUser?.displayName + `님 안녕하세요`}
        </div>
    );
}

export default Home;