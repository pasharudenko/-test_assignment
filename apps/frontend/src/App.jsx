import { useRef, useEffect, useState } from "react";
import { MessageList, Input, Button } from "react-chat-elements";
import { io } from "socket.io-client";
import "./App.css";
import "react-chat-elements/dist/main.css";

function App() {
  const [user, setUser] = useState(1);
  const [list, setList] = useState([]);
  const inputRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = io(import.meta.env.VITE_API_URL);
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("message:get", (response) => {
      setList((prevState) => [
        ...prevState,
        {
          position: response.userId === 1 ? "right" : "left",
          type: "text",
          text: response.content,
          date: response.timestamp,
        },
      ]);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    fetch(`${import.meta.env.VITE_API_URL}/messages?limit=20`)
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        list.reverse();
        setList(
          list.map((item) => {
            return {
              position: item.userId === 1 ? "right" : "left",
              type: "text",
              text: item.content,
              date: item.timestamp,
            };
          })
        );
      });

    return () => {
      socket.disconnect();
    };
  }, []);

  const submitHandler = () => {
    const message = inputRef.current?.value.trim();
    if (message && socketRef.current?.connected) {
      socketRef.current.emit("message:create", {
        userId: user,
        content: message,
      });
    }
    if (inputRef.current) inputRef.current.value = "";
  };
  return (
    <>
      <h1>Welcome to chat application</h1>
      <h2>Choose your user:</h2>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 25 }}
      >
        <Button
          color="white"
          backgroundColor={user === 1 ? "green" : "black"}
          text="User 1"
          onClick={() => setUser(1)}
        />
        <Button
          color="white"
          backgroundColor={user === 2 ? "green" : "black"}
          text="User 2"
          onClick={() => setUser(2)}
        />
      </div>
      <MessageList
        className="message-list"
        lockable={true}
        toBottomHeight={"100%"}
        dataSource={list}
      />
      <Input
        referance={inputRef}
        placeholder="Type here..."
        multiline={true}
        rightButtons={
          <Button
            color="white"
            backgroundColor="black"
            text="Send"
            onClick={submitHandler}
          />
        }
      />
    </>
  );
}

export default App;
