import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { StaticImageData } from "next/image"
import Link from "next/link"
import phone from "./icons/call.svg"
import video from "./icons/video.svg"
import profile from "./icons/profile.png"
import Peer from "simple-peer"

interface BuyerProfileProps {
  userName: string | null
  userImage: StaticImageData | null
}

const BuyerProfile: React.FC<BuyerProfileProps> = ({ userName, userImage }) => {
  const imageSource = userImage || profile
  const peerRef = useRef<Peer.Instance | null>(null)

  useEffect(() => {
    // Cleanup on component unmount
    return () => {
      if (peerRef.current) {
        peerRef.current.destroy()
        peerRef.current = null
      }
    }
  }, [])

  const startCall = (isVideoCall: boolean) => {
    navigator.mediaDevices
      .getUserMedia({ video: isVideoCall, audio: true })
      .then((stream) => {
        // Create a peer connection
        const peer = new Peer({ initiator: true, stream })

        // Save the reference for cleanup
        peerRef.current = peer

        // Handle incoming stream from the other peer (if needed)
        peer.on("stream", (incomingStream) => {
          // Handle incoming stream
          console.log("Incoming stream:", incomingStream)
        })
      })
      .catch((error) => {
        console.error("Error accessing media devices:", error)
      })
  }

  const handleAudioCall = () => {
    startCall(false) // Start audio call
  }

  const handleVideoCall = () => {
    startCall(true) // Start video call
  }

  return (
    <div className="fixed top-16 z-50 flex h-20 items-center justify-between bg-white px-2 py-10 shadow-md sm:w-[60vw] sm:px-4 lg:w-[70vw] lg:px-4">
      <div className="flex cursor-pointer items-center gap-2">
        <div>
          <Image
            src={imageSource}
            alt={`Profile of ${userName}`}
            className="h-16 w-16 rounded-full"
          />
        </div>
        <div className="">
          <h5 className="">{userName}</h5>
        </div>
      </div>

      <div className="flex gap-3 pr-6">
        <Link href="#">
          <Image
            src={phone}
            alt="Audio Call"
            className="cursor-pointer"
            onClick={handleAudioCall}
          />
        </Link>
        <Link href="#">
          <Image
            src={video}
            alt="Video Call"
            className="cursor-pointer"
            onClick={handleVideoCall}
          />
        </Link>
      </div>
    </div>
  )
}

export default BuyerProfile
