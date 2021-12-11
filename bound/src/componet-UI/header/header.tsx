import "./header.scss";
import { IconButton } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../hamburger/hamburger-menu";

type HeaderProps = {
    title?: string
    isOpen: boolean
    setOpen: any
}

const Header = ({ title,isOpen,setOpen }: HeaderProps) => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("chat-auth");
        navigate("/");
    };

    return (
        <div className="header-main-container">
            <div className="header-title">
                <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />
                <div>{title}</div>
            </div>
            <IconButton size={"small"} onClick={logout} aria-label="fingerprint" color="primary">
                <div>Logout</div>
                <Logout />
            </IconButton>
        </div>
    );
};
export default Header;