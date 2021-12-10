import { Fragment, ReactNode } from "react";
import Header from "../header/header";
import "./layout.scss";

type LayoutProps = {
    header?:boolean
    children: ReactNode
}

const Layout = ({ children, header }: LayoutProps) => {
    return (
        <Fragment>
            { header && <Header />}
            <div className="layout-main-container">
                {children}
            </div>
        </Fragment>
    );
};
export default Layout;