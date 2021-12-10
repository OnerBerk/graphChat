import { useEffect, useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Layout from "../layout/layout";
import { useNavigate } from "react-router-dom";
import "./form.scss";

const CustomForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");
    const [errorMsg, setErrorMsg] = useState<string | undefined>();

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
        setErrorMsg(undefined);
    };
    const handlePasswordChange = (e: any) => {
        setPasword(e.target.value);
        setErrorMsg(undefined);
    };

    const LOGIN = gql`
        query login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
                id
                token
                role
            }
        }
    `;

    const [getToken, { data, error }] = useLazyQuery(LOGIN);
    useEffect(() => {
        if (data) {
            console.log(data);
            localStorage.setItem("chat-auth", JSON.stringify(data.login.token));
            navigate("/home");
        } else {
            setErrorMsg(error?.message);
        }
    }, [data, error, navigate]);


    const handleSubmit = async () => {
        try {
            getToken({ variables: { email, password } });
            setPasword("");
            setEmail("");
        } catch (err) {
            console.log("Handle me", err);
        }
    };

    return (
        <Layout>
            <div style={{ color: "red" }}>{errorMsg}</div>
            <form className="login-form">
                <TextField
                    required
                    id="outlined-search"
                    value={email}
                    onChange={handleEmailChange}
                    margin="normal"
                    placeholder="one@email.com"
                    label="Email"
                    variant="standard" />
                <TextField
                    required
                    id="outlined"
                    type="password"
                    value={password}
                    name="password"
                    autoComplete="on"
                    onChange={handlePasswordChange}
                    label="Password"
                    margin="normal"
                    variant="standard"
                    color="primary" />

                <Button
                    onClick={handleSubmit}
                    variant="text"
                    endIcon={<SendIcon />}>
                    Submit
                </Button>
            </form>
        </Layout>
    );
};
export default CustomForm;