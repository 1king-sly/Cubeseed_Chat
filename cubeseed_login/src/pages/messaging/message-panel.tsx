import React, { useEffect, useState } from "react"
import BuyerProfile from "./Buyerprofile"
import MessageInput from "./MessageInput"
import MessagesShow from "./MessagesShow"
import profile from "../messaging/icons/profile.png"
import { io, Socket } from "socket.io-client"

interface MessagePanelProps {
  selectedContact: string | null
}

const MessagePanel: React.FC<MessagePanelProps> = ({ selectedContact }) => {
  const [chats, setChats] = useState<any[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    if (!selectedContact) {
      return
    }

    // Close the existing socket connection before creating a new one
    if (socket) {
      socket.disconnect()
    }

    // Establish a WebSocket connection to the specific chat room
    const newSocket = io(`ws://127.0.0.1:8000/ws/${selectedContact}/`)
    setSocket(newSocket)

    // Listen for chat messages in the room
    newSocket.on("chat_message", (data) => {
      console.log("Received chat message:", data)
      setChats((prevChats) => [...prevChats, data])
    })

    // Clean up the socket connection on component unmount
    return () => {
      newSocket.disconnect()
    }
  }, [selectedContact, socket])

  const handleSendMessage = () => {
    if (!inputMessage.trim() || !selectedContact || !socket) {
      return
    }

    // Send the message to the specified chat room
    const messagePayload = {
      type: "chat_message",
      message: inputMessage,
      room: selectedContact,
    }

    // Emit the message to the server
    socket?.emit("chat_message", messagePayload)

    // For demonstration purposes, update the local state with the sent message
    setChats((prevChats) => [...prevChats, messagePayload])
    setInputMessage("") // Clear the input field
  }

  return (
    <div className="fixed flex min-h-screen justify-center bg-gray-100">
      <div className="flex w-full flex-col overflow-hidden bg-white sm:w-[60vw] lg:w-[70vw]">
        <BuyerProfile userName={selectedContact} userImage={profile} />
        <div className="mt-8 flex-1 overflow-y-auto bg-gray-100 px-4">
          <MessagesShow chats={chats} />
        </div>
        <div>
          <MessageInput
            onSendMessage={handleSendMessage}
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
          />
        </div>
      </div>
    </div>
  )
}

export default MessagePanel
