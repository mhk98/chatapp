import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom"


let socket;

const Chat = () => {
  const [messages, setMessages] = useState([])
  const { search } = useLocation();
  const { name, room } = queryString.parse(search);
  const [users, setUsers] = useState([])
  useEffect(() => {
    if (!name || !room) return;

    socket = io("http://localhost:5000");

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    socket.on("message", (message) => {
      setMessages((existingMessages) => [...existingMessages, message])
    })

    socket.on("userList", ({roomUsers}) => {
      setUsers(roomUsers)
    } )

    return () => {
      socket.disconnect();
      socket.close();
      // console.log("Socket disconnected");
    };

   
  }, [name, room]);


  const sendMessage = (e) => {
    if(e.key === "Enter" && e.target.value){
      socket.emit("message", e.target.value);
      e.target.value = "";
    }
  }

  return (
    <div className="chat">
      <div className="user-list">
        <div>User Name</div>
        {users.map(user => <div>{user.name}</div>)}
      </div>

      <div className="chat-section">
      <div className="chat-head">
      <div className="room">{room}</div>
      <Link to='/'>X</Link>
      </div>
      <div className="chat-box">
        <ScrollToBottom className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${name === message.user ? "self": ""}`}>
                <span className="user">{message.user}</span>
                <span className="message-text">{message.text}</span>

                </div>
            ))}
        </ScrollToBottom>
        <input placeholder="message" onKeyDown={sendMessage}/>
      </div>
      </div>
     
    </div>
  );
};

export default Chat;
