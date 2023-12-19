import React from "react"
import Image from "next/image"

interface SingleMessageProps {
  chat: {
    type: string
    message: string
    multimedia_url: string
    date_added: string
    from_user: {
      username: string
    }
    room: string
  }
}

const SingleSentMessage: React.FC<SingleMessageProps> = ({ chat }) => {
  return (
    <>
      <div className="text-md flex flex-col items-end gap-5 p-4 text-gray-900">
        <div className="flex w-full flex-col gap-5">
          {/* Displaying multimedia content (image) */}
          {chat.multimedia_url && (
            <Image
              src={chat.multimedia_url}
              alt="Multimedia Content"
              className="max-w-[70%] rounded-lg rounded-bl-none shadow-lg"
            />
          )}

          {/* Displaying text message */}
          {chat.message && (
            <p className="h-fit w-fit max-w-[70%] rounded-lg rounded-bl-none bg-gray-200 p-2 shadow-lg">
              {chat.message}
            </p>
          )}

          <div className=" h-5 w-full justify-between px-1 ">
            <p>{chat.date_added}</p>
            <p>{chat.from_user.username} </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleSentMessage
