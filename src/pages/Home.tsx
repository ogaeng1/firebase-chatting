import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Clock from "../components/Clock";
import ChattingRoom from "../components/ChattingRoom";

const Home = () => {
    return (
        <Layout>
            <Header />
            <div className="w-full h-full flex flex-col items-center mdSize-mainScreen">
                <div className="w-full md:w-1/2">
                    <Clock />
                </div>
                <div className="w-[90%] h-[80vh] bg-[aliceblue] rounded-lg md:w-1/2 md:h-[90vh]">
                    <ChattingRoom />
                </div>
            </div>
        </Layout>
    );
}

export default Home;