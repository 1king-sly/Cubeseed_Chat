import React from "react"
import BuyerProfile from "./buyerprofile"
import MessageInput from "./MessageInput"
import MessagesShow from "./MessagesShow"
import profile from "@/assets/farmer image 1.png"

interface MessagePanelProps {
  selectedContact: string | null
}

const MessagePanel: React.FC<MessagePanelProps> = ({ selectedContact }) => {
  return (
    <div className="fixed flex min-h-screen justify-center  bg-gray-100">
      <div className="flex w-full flex-col overflow-hidden bg-white sm:w-[60vw] lg:w-[70vw]">
        <BuyerProfile
          userName={selectedContact}
          lastSeen="offline"
          userImage={profile}
        />
        <div className="mt-[50px] flex-1 bg-gray-100 ">
          <MessagesShow />
        </div>
        <div>
          <MessageInput />
        </div>
      </div>
    </div>
  )
}

export default MessagePanel
