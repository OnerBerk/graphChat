import Layout from "../componet-UI/layout/layout";
import { gql, useSubscription } from "@apollo/client";
import { useEffect, useState } from "react";
import ChatBoard from "../componet-UI/chat-Board/chat-board";
import { Box, TextareaAutosize, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const CHAT_SUBSCRIPTION = gql`
    subscription NewRoomMessage($roomId: Int!) {
        newRoomMessage(roomId: $roomId) {
            message
        }
    }
`;
const Chat = () => {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState<Array<string>>(["Bienvenue dans le chat"]);
    const roomId = 1;
    const { data, loading } = useSubscription(
        CHAT_SUBSCRIPTION,
        { variables: { roomId } },
    );
    console.log(loading);
    useEffect(() => {
        data && setMessage(data.newRoomMessage.message);
    }, [data]);
    useEffect(() => {
        message && setMessageList([...messageList, message]);
    }, [data, message]);

    return (
        <Layout header={true} title="Chat-box">
            <ChatBoard>
                {messageList.map((el, i) => {
                    return (
                        <div key={i}>{el}</div>
                    );
                })}
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <AccountCircle sx={{ color: "white", mr: 1, my: 0.5 }} />
                    <TextField fullWidth id="input-with-sx" label="... Message" variant="standard" />
                </Box>
            </ChatBoard>
        </Layout>
    );
};
export default Chat;