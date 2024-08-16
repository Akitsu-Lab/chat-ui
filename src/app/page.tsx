"use client";
import { Chatroom } from "@/interfaces";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<Chatroom[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/chatrooms")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);
  console.log("data: ", data);

  return (
    <>
      <h1>秋津ラボチャット</h1>
      <div>全てのチャットルーム</div>
      <div>
        {data.map((room) => (
          <div key={room.roomId}>
            <p>
              {room.roomName}
              <Button>Join</Button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
