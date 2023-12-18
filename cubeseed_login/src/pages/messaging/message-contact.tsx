import React, { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import PropTypes from "prop-types"
import MessageNotification from "./MessageNotification"
import { io } from "socket.io-client"
import profile from "./icons/profile.png"

interface MessageContactProps {
  userName: string
  userImage: StaticImageData | null
  unreadCount: number
  onClick: (userName: string, userImage: StaticImageData | null) => void
}

const MessageContact: React.FC<MessageContactProps> = ({
  userName,
  userImage,
  onClick,
}) => {
  const [notification, setNotification] = useState(Number)

  useEffect(() => {
    const socket = io(
      " ws://127.0.0.1:8000/ws/notifications/${username_of_other_person_in_conversation}/"
    )
    socket.on("single_conversation_unread_count", (data) => {
      setNotification(data.unread_count)
    })

    return () => {
      socket.disconnect()
    }
  }, [])
  return (
    <div
      className="bg-#45DFA9 m-1 flex h-16  w-full cursor-pointer
      items-center justify-between gap-4 rounded-md p-1  ease-in-out hover:bg-[#45DFA9]"
      onClick={() => onClick(userName, userImage)}
    >
      <div className="flex items-center gap-5">
        <div>
          <Image
            src={userImage || profile}
            alt="User Image"
            className="h-12 w-fit rounded-full object-cover"
          />
        </div>
        <div>
          <h5 className="text-md font-medium">{userName}</h5>
        </div>
      </div>

      <div>
        <MessageNotification number={notification} />
      </div>
    </div>
  )
}

// MessageContact.propTypes = {
//   userName: PropTypes.string.isRequired,
//   userImage: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// }

export default MessageContact
