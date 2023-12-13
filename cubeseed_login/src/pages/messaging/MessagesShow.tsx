import React from "react"
import SingleMessage from "./SingleMessage"

interface Message {
  type: string
  message: string
  multimedia_url: string
  date_added: string
  from_user: {
    username: string
  }
  room: string
}

interface MessagesShowProps {
  chats: Message[]
}

const MessagesShow: React.FC<MessagesShowProps> = ({ chats }) => {
  return (
    <div className="max-h-[500px] w-full overflow-y-auto px-4 py-8">
      {chats.map((chat, index) => (
        <SingleMessage key={index} chat={chat} />
      ))}
    </div>
  )
}

export default MessagesShow
