import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import SignUp from "./pages/SignUp";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default Router;