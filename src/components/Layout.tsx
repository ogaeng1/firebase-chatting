import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children } : LayoutProps ) => {
    return (
        <div className="w-full h-screen flex items-center justify-center">{children}</div>
    );
}

export default Layout;