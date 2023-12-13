import React, { useEffect, useState } from "react"
import BuyerProfile from "./BuyerProfile"
import MessageInput from "./MessageInput"
import MessagesShow from "./MessagesShow"
import profile from "../messaging/icons/profile.png"
import { io } from "socket.io-client"

interface MessagePanelProps {
  selectedContact: string | null
}

const MessagePanel: React.FC<MessagePanelProps> = ({ selectedContact }) => {
  const [chats, setChats] = useState([])
  const [inputMessage, setInputMessage] = useState("")
  const [socket, setSocket] = useState<any>(null) // Declare socket state

  useEffect(() => {
    if (!selectedContact) {
      return
    }

    // Establish a WebSocket connection to the specific chat room
    const newSocket = io(`ws://127.0.0.1:8000/ws/${selectedContact}/`)
    setSocket(newSocket)

    // Listen for chat messages in the room
    newSocket.on("chat_message", (data) => {
      // Handle received chat message
      // You may want to update the chats state accordingly
      console.log("Received chat message:", data)
    })

    // Clean up the socket connection on component unmount
    return () => {
      newSocket.disconnect()
    }
  }, [selectedContact])

  const handleSendMessage = () => {
    if (!inputMessage.trim() || !selectedContact || !socket) {
      return // Don't send empty messages or if no contact is selected
    }

    // Send the message to the specified chat room
    // Emit a chat message event to the server
    const messagePayload = {
      type: "chat_message",
      message: inputMessage,
      room: selectedContact,
    }

    // Example: Emitting the chat message event to the server
    socket.emit("chat_message", messagePayload)

    // For demonstration purposes, update the local state with the sent message
    setChats((prevChats) => [...prevChats, messagePayload])
    setInputMessage("") // Clear the input field
  }

  return (
    <div className="fixed flex min-h-screen justify-center  bg-gray-100">
      <div className="flex w-full flex-col overflow-hidden bg-white sm:w-[60vw] lg:w-[70vw]">
        <BuyerProfile userName={selectedContact} userImage={profile} />
        <div className="mt-[50px] flex-1 bg-gray-100">
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
