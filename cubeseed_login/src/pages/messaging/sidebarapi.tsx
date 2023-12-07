import React, { useEffect, useState } from "react"
import Image from "next/image"
import profile from "@/assets/farmer image 1.png"
import message from "./icons/newMessage.svg"
import bar from "./icons/bar.svg"
import search from "./icons/search.svg"
import MessageContact from "./message-contact"
import { io } from "socket.io-client"

const MessageSidebar: React.FC = ({ onContactClick }) => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const socket = io("ws://127.0.0.1:8000/ws/rooms")
    socket.on("online_user_list", (data) => {
      setRooms(data.users)
    })

    return () => {
      socket.disconnect()
    }
  }, [])
  return (
    <>
      <div className="flex min-h-screen w-[100vw] justify-center overflow-x-hidden  py-2 sm:w-[40vw] lg:w-[30vw] ">
        <div className="fixed z-20 w-[100vw] bg-white px-4 sm:w-[40vw] lg:w-[30vw] ">
          <div className="flex w-full items-center justify-between">
            <h4 className="text-2xl">Messages</h4>
            <p>
              {" "}
              <Image src={message} alt="" />
            </p>
          </div>
          <div className="flex h-12 w-full items-center justify-between">
            <p className=" cursor-pointer">
              {" "}
              <Image src={bar} alt="" />
            </p>
            <input
              type="text"
              placeholder="Search messages"
              className="h-full border-none outline-none"
            />
            <p className=" cursor-pointer">
              {" "}
              <Image src={search} alt="" />
            </p>
          </div>
        </div>

        <div className="mt-20 flex  w-full flex-col items-center px-4  ">
          {rooms.map((room, index) => (
            <MessageContact
              key={index}
              userName={room}
              userImage={profile}
              onClick={() => onContactClick(room)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default MessageSidebar
