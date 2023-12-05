import React from "react"
import Image from "next/image"
import PropTypes from "prop-types"
import MessageNotification from "./MessageNotification"

interface MessageContactProps {
  userName: string
  userImage: string
  onClick: (userName: string, userImage: string) => void
}

const MessageContact: React.FC<MessageContactProps> = ({
  userName,
  userImage,
  onClick,
}) => {
  return (
    <div
      className="bg-#45DFA9 m-1 flex h-16  w-full cursor-pointer
      items-center justify-between gap-4 rounded-md p-1  ease-in-out hover:bg-[#45DFA9]"
      onClick={() => onClick(userName, userImage)}
    >
      <div className="flex items-center gap-5">
        <div>
          <Image
            src={userImage}
            alt="User Image"
            className="h-12 w-fit rounded-full object-cover"
          />
        </div>
        <div>
          <h5 className="text-md font-medium">{userName}</h5>
        </div>
      </div>

      <div>
        <MessageNotification number={"5"} />
      </div>
    </div>
  )
}

MessageContact.propTypes = {
  userName: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MessageContact
