import React, { useState } from "react"
import MessageHeader from "../message-header"
import MessageSidebar from "../SideBar"
import MessagePanel from "../message-panel"
import "tailwindcss/tailwind.css"
import EmptyState from "../EmptyState"

const MessagePage = () => {
  const [selectedContact, setSelectedContact] = useState(null)

  const handleContactClick = (userName) => {
    setSelectedContact(userName)
  }
  return (
    <>
      <MessageHeader />

      <div className="absolute mt-[60px] flex ">
        <div className="sidebar overflow-y-scroll">
          <MessageSidebar onContactClick={handleContactClick} />
        </div>
        <div className="chats hidden h-full overflow-y-scroll sm:block">
          {selectedContact ? (
            <MessagePanel selectedContact={selectedContact} />
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </>
  )
}

export default MessagePage
