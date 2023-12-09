import React from "react"

interface NotificationProps {
  number: number
}

const MessageNotification: React.FC<NotificationProps> = ({ number }) => {
  return (
    <>
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#45dfa9] text-sm text-gray-700">
        <span>{number}</span>
      </div>
    </>
  )
}

export default MessageNotification
