import "./header.scss"
import { IconButton } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header=()=>{
    const navigate = useNavigate()
    const logout=()=>{
        localStorage.removeItem("chat-auth")
        navigate("/")
    }

return(
    <div className="header-main-container" >
        <IconButton onClick={logout} aria-label="fingerprint" color="primary">
            Logout<Fingerprint />
        </IconButton>
    </div>
)
}
export default Header