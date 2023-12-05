import React from "react"
import Image from "next/image"
import logo from "@/assets/cubeseed.png"
import notificationIcon from "./icons/bell.svg"
import walletIcon from "./icons/wallet.svg"
import messageIcon from "./icons/messageFill.svg"

const MessageHeader = () => {
  return (
    <div className="h-15 fixed z-50 flex w-[100vw] items-center justify-between bg-white px-[10px] py-[2px] shadow-md ">
      <div>
        <Image
          src={logo}
          alt="Logo"
          className="h-[60px] w-[120px] object-contain"
        />
      </div>
      <div>
        <ul className="flex gap-4 ">
          <li>
            <Image src={notificationIcon} alt="Notification" />
          </li>
          <li>
            <Image src={messageIcon} alt="Message" />
          </li>
          <li>
            <Image src={walletIcon} alt="Wallet" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MessageHeader
