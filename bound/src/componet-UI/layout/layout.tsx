import "./layout.scss"
import {ReactNode} from "react";

type LayoutProps={
    children:ReactNode
}

const Layout=({children}:LayoutProps)=>{
    return(
        <div className="layout-main-container">
            {children}
        </div>
    )
}
export default Layout