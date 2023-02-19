import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children } : LayoutProps ) => {
    return (
        <div className="w-full h-screen flex flex-col items-center">{children}</div>
    );
}

export default Layout;