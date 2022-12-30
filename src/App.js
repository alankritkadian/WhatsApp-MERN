import React, {useEffect, useState} from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js"
import axios from './axios'
import Login from './Login.js'

function App() {

  const [user, setUser] = useState(null);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(response=>{
      setMessages(response.data)
    })
  }, [])
  
  useEffect(()=>{
    var pusher = new Pusher('b87f4dfd3c599a718fc9', {
      cluster: 'ap2'
    });
    
    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])
  
  console.log(messages);
  return (
    <div className="app">
      {user ? (<Login/>) : (
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>)}
    </div>
  );
}

export default App;
