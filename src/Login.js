import { Button } from "@mui/material"
import React from "react"
import "./Login.css"
import {auth,provider} from "./Firebase.js"

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {

        }).catch((error) => alert(error.message));
    };
    return(
        <div className="login">
            <Button onClick={signIn}>
                Sign in with Google
            </Button>
        </div>
    )
}

export default Login