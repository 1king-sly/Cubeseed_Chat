import React, { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import message from "./icons/newMessage.svg"
import bar from "./icons/bar.svg"
import search from "./icons/search.svg"
import MessageContact from "./message-contact"
import profile from "./icons/profile.png"
import Alert from "./Alert"
import { io } from "socket.io-client"

interface MessageSidebarProps {
  onContactClick: (userName: string, userImage: StaticImageData | null) => void
}

const MessageSidebar: React.FC<MessageSidebarProps> = ({ onContactClick }) => {
  const [rooms, setRooms] = useState([])
  const [notifications, setNotifications] = useState<{
    [room: string]: number
  }>({})
  const [allNotificationsCount, setAllNotificationsCount] = useState(0)
  const [alert, setAlert] = useState<string | null>(null)

  useEffect(() => {
    const socket = io("ws://127.0.0.1:8000/ws/rooms")
    socket.on("online_user_list", (data) => {
      setRooms(data.users)
      console.log(data.users)
    })

    const notificationSocket = io("ws://127.0.0.1:8000/ws/notifications/")
    notificationSocket.on("single_conversation_unread_count", (data) => {
      setNotifications((prevNotifications) => {
        const updatedNotifications = { ...prevNotifications }
        updatedNotifications[data.room] = data.unread_count
        return updatedNotifications
      })
      setAllNotificationsCount((prevCount) => prevCount + data.unread_count)
    })

    // Alert when a user joins
    socket.on("user_join", (data) => {
      setAlert(`${data.user} joined the room.`)
    })

    // Alert when a user leaves
    socket.on("user_leave", (data) => {
      setAlert(`${data.user} left the room.`)
    })

    return () => {
      socket.disconnect()
      notificationSocket.disconnect()
    }
  }, [])

  const closeAlert = () => {
    setAlert(null)
  }

  return (
    <>
      <div className="flex min-h-screen w-[100vw] justify-center overflow-x-hidden  py-2 sm:w-[40vw] lg:w-[30vw] ">
        <div className="fixed z-20 w-[100vw] bg-white px-4 sm:w-[40vw] lg:w-[30vw] ">
          <div className="flex w-full items-center justify-between">
            <h4 className="text-2xl">Messages</h4>
            <p className="flex items-center">
              <Image src={message} alt="" />
              <span className="h-full items-start justify-start text-sm text-[#45dfa9]">
                {allNotificationsCount > 0 && allNotificationsCount}
              </span>
            </p>
          </div>
          <div className="flex h-12 w-full items-center justify-between">
            <p className="cursor-pointer">
              <Image src={bar} alt="" />
            </p>
            <input
              id="search"
              type="text"
              placeholder="Search messages"
              className="h-full border-none outline-none"
            />
            <p className="cursor-pointer">
              <Image src={search} alt="" />
            </p>
          </div>
        </div>

        <div className="mt-20 flex w-full flex-col items-center px-4  ">
          {rooms.map((room, index) => (
            <MessageContact
              key={index}
              userName={room}
              userImage={profile}
              unreadCount={notifications[room] || 0}
              onClick={() => onContactClick(room, profile)}
            />
          ))}
        </div>

        {alert && <Alert message={alert} onClose={closeAlert} />}
      </div>
    </>
  )
}

export default MessageSidebar
