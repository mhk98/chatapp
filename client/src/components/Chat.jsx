import queryString from "query-string";
import React, { useEffect } from "react"
import { useLocation } from "react-router-dom";
import io from "socket.io-client"

let socket;
const Chat = () => {

    const {search} = useLocation()
    const {name, room} = queryString.parse(search)

    useEffect(() => {
      socket = io("http://localhost:5000")
    }, [])


    return (
        <div className="chat">Chat page</div>
    )
};

export default Chat;