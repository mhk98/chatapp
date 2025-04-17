// import queryString from "query-string";
// import React, { useEffect } from "react"
// import { useLocation } from "react-router-dom";
// import io from "socket.io-client"

// let socket;
// const Chat = () => {

//     const {search} = useLocation()
//     const {name, room} = queryString.parse(search)

//     console.log(name, room)

//     useEffect(() => {
//       socket = io("http://localhost:5000");

//       socket.emit("join", {name, room}, (error) => {
//         if(error) {
//           alert(error)
//         }
//       });
//     }, [])


//     return (
//         <div className="chat">Chat page</div>
//     )
// };

// export default Chat;



import queryString from "query-string";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

let socket;

const Chat = () => {
  const { search } = useLocation();
  const { name, room } = queryString.parse(search);

  useEffect(() => {
    if (!name || !room) return;

    socket = io("http://localhost:5000");

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.disconnect();
      console.log("Socket disconnected");
    };
  }, [name, room]);

  return (
    <div className="chat">
      <h1>Welcome to {room}</h1>
      <p>Hello {name}!</p>
    </div>
  );
};

export default Chat;
