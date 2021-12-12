import React from "react";
import "./chat-board.scss"

const ChatBoard:React.FC=({children})=>{
    return(
        <div className="chat-Board-main-container">{children}</div>
    )
}

export default ChatBoard

