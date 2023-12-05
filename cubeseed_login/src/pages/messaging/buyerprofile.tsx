import React from "react"
import Image from "next/image"
import Link from "next/link"
import phone from "./icons/call.svg"
import video from "./icons/video.svg"

interface BuyerProfileProps {
  userName: string
  lastSeen: string
  userImage: string
}

const BuyerProfile: React.FC<BuyerProfileProps> = ({
  userName,
  lastSeen,
  userImage,
}) => {
  return (
    <div
      className=" 
    fixed
    top-16
    z-50
    flex
    h-20
    items-center
    justify-between
    bg-white
    px-2
    py-10
    shadow-md
    sm:w-[60vw]
    sm:px-4
    lg:w-[70vw]
    lg:px-4"
    >
      <div className=" flex  cursor-pointer items-center gap-2">
        <div>
          <Image
            src={userImage}
            alt="Profile Image"
            className=" h-16 w-16 rounded-full"
          />
        </div>
        <div className="">
          <h5 className="">{userName}</h5>
          <p className=" text-sm">{lastSeen}</p>
        </div>
      </div>

      <div className=" flex gap-3 pr-6">
        <Link href={""}>
          <Image
            src={phone}
            alt="User Image"
            className="    cursor-pointer
"
          />
        </Link>
        <Link href={""}>
          <Image
            src={video}
            alt="User Image"
            className="    cursor-pointer
"
          />
        </Link>
      </div>
    </div>
  )
}

export default BuyerProfile
