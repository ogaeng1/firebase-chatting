import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children } : LayoutProps ) => {
    return (
        <div className="w-full h-screen flex flex-col items-center bg-slate-800">{children}</div>
    );
}

export default Layout;