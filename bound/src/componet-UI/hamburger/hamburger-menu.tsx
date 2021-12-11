import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import "./hamburger-menu.scss";


type HamburgerMenuProps = {
    isOpen: boolean
    setOpen: any
}

const HamburgerMenu = ({ isOpen, setOpen }: HamburgerMenuProps) => {
    return (
        <div className="hamburger-main-container">
            <Hamburger toggled={isOpen} toggle={setOpen} />
            {isOpen &&
            <nav onClick={()=>setOpen(false)} className="navigation-main-container">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chat">Chat</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </nav>
            }
        </div>
    );
};

export default HamburgerMenu;