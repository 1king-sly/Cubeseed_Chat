import React from "react"
import Image from "next/image"
import profile from "@/assets/farmer image 1.png"
import message from "./icons/newMessage.svg"
import bar from "./icons/bar.svg"
import search from "./icons/search.svg"
import MessageContact from "./message-contact"

const MessageSidebar: React.FC = ({ onContactClick }) => {
  return (
    <>
      <div className="flex min-h-screen w-[100vw] justify-center overflow-x-hidden  py-1 sm:w-[40vw] lg:w-[30vw]  ">
        <div className="fixed z-20 w-[100vw] bg-white px-4 py-1 sm:w-[40vw] lg:w-[30vw] ">
          <div className="flex w-full items-center justify-between">
            <h4 className="text-2xl">Messages</h4>
            <p>
              {" "}
              <Image src={message} alt="" />
            </p>
          </div>
          <div className="flex h-12 w-full items-center justify-between">
            <p className=" cursor-pointer">
              {" "}
              <Image src={bar} alt="" />
            </p>
            <input
              type="text"
              placeholder="Search messages"
              className="h-full border-none outline-none"
            />
            <p className=" cursor-pointer">
              {" "}
              <Image src={search} alt="" />
            </p>
          </div>
        </div>

        <div className="mt-[84px] flex  w-full flex-col items-center px-4  ">
          <MessageContact
            userName="Byrone Kinsly"
            userImage={profile}
            onClick={() => onContactClick("Byrone Kinsly")}
          />
          <MessageContact
            userName="Val "
            userImage={profile}
            onClick={() => onContactClick("Val Nabiswa")}
          />
          <MessageContact
            userName="Laria"
            userImage={profile}
            onClick={() => onContactClick("Laria Kurere")}
          />
          <MessageContact
            userName="Phoebe"
            userImage={profile}
            onClick={() => onContactClick("Phoebe Christine")}
          />
          <MessageContact
            userName="Byrone Kinsly"
            userImage={profile}
            onClick={() => onContactClick("Byrone Kinsly")}
          />
          <MessageContact
            userName="Val "
            userImage={profile}
            onClick={() => onContactClick("Val Nabiswa")}
          />
          <MessageContact
            userName="Laria"
            userImage={profile}
            onClick={() => onContactClick("Laria Kurere")}
          />
          <MessageContact
            userName="Phoebe"
            userImage={profile}
            onClick={() => onContactClick("Phoebe Christine")}
          />
          <MessageContact
            userName="Byrone Kinsly"
            userImage={profile}
            onClick={() => onContactClick("Byrone Kinsly")}
          />
          <MessageContact
            userName="Val "
            userImage={profile}
            onClick={() => onContactClick("Val Nabiswa")}
          />
          <MessageContact
            userName="Laria"
            userImage={profile}
            onClick={() => onContactClick("Laria Kurere")}
          />
          <MessageContact
            userName="Phoebe"
            userImage={profile}
            onClick={() => onContactClick("Phoebe Christine")}
          />
          <MessageContact
            userName="Byrone Kinsly"
            userImage={profile}
            onClick={() => onContactClick("Byrone Kinsly")}
          />
          <MessageContact
            userName="Val "
            userImage={profile}
            onClick={() => onContactClick("Val Nabiswa")}
          />
          <MessageContact
            userName="Laria"
            userImage={profile}
            onClick={() => onContactClick("Laria Kurere")}
          />
          <MessageContact
            userName="Phoebe"
            userImage={profile}
            onClick={() => onContactClick("Phoebe Christine")}
          />
        </div>
      </div>
    </>
  )
}

export default MessageSidebar
