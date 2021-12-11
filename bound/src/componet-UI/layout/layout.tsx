import { ReactNode, useEffect, useState } from "react";
import Header from "../header/header";
import "./layout.scss";

type LayoutProps = {
    header?: boolean
    children: ReactNode
    title?: string
}

const Layout = ({ children, header, title }: LayoutProps) => {
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        if (typeof title === "string") {
            document.title = title;
        }
    },[title]);
    return (
        <>
            {header && <Header setOpen={setOpen} isOpen={isOpen} title={title} />}
            <div className="layout-main-container">
                {children}
            </div>
        </>
    );
};
export default Layout;