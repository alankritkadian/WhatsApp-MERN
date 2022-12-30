import React ,{useState} from "react";
import {Avatar, IconButton} from "@mui/material";
import "./Chat.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios'

function Chat({messages}){

    const [input,setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post("/messages/new",{
            message: input,
            name: "Demo App",
            timestamp: "now",
            received: false
        });
        setInput("");

    }

    return <div className="chat">
        <div className="chat_header">
            <Avatar />
            <div className="chat_headerInfo">
                <h3>Room name</h3>
                <p>Last seen at...</p>
            </div>
            <div className="chat_headerRight">
                <IconButton>
                    <SearchOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className="chat_body">
            {messages.map((message) => {
                return(
                <p className={`chat_message ${!message.received && "chat_receiver"}`}>
                <span className="chat_name">{message.name}</span>
                {message.message}
                <span className="chat_timestamp">{message.timestamp}</span>
                </p>)
            })}
        </div>
        <div className="chat_footer">
            <InsertEmoticonIcon/>
            <form>
                <input value = {input} onChange = {(e)=> setInput(e.target.value)} placeholder="Type a message" type="text" />
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <MicIcon/>
        </div>
    </div>
}

export default Chat;