import React from "react";
import ChatButton from "../components/ChatButton";
import Header from "../components/Header";
import MainBanner from "../components/home/MainBanner";
import Layout from "../components/Layout";

const Home = () => {
    return (
        <Layout>
            <div className="w-full h-full flex flex-col">
                <Header />
                <MainBanner />
                <ChatButton />
            </div>
        </Layout>
    );
}

export default Home;