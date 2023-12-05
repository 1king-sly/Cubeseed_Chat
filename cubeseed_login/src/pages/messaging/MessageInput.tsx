import React, { useState, useEffect } from "react"
import Image from "next/image"
import emoji from "./icons/emoji.svg"
import send from "./icons/send.svg"
import mic from "./icons/mic.svg"
import image from "./icons/image.svg"

const MessageInput = () => {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      //sending message
      // setInputValue('')
    }
  }
  useEffect(() => {
    const textarea = document.getElementById("messageTextarea")
    if (textarea) {
      textarea.style.height = "auto"
      textarea.style.maxHeight = "150px"

      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [inputValue])

  return (
    <>
      <div className="fixed bottom-0  flex w-[100vw]  justify-center bg-white px-2 shadow-md sm:w-[60vw] sm:px-4 lg:w-[70vw] lg:px-4">
        <div className="flex w-full items-center justify-between gap-2">
          <Image src={emoji} alt="" className="cursor-pointer" />
          <textarea
            id="messageTextarea"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
            className="mt-6 flex w-full resize-none border-none bg-transparent outline-none "
            placeholder="Message here...."
          />
          <div className="relative flex flex-row gap-6 pr-12 sm:pr-5 ">
            <Image src={mic} alt="User Image" className="cursor-pointer" />
            <div className=" -mt-5 h-12 w-12   ">
              <label htmlFor="file-upload" className="">
                <Image
                  src={image}
                  alt="User Image"
                  className=" h-full w-full cursor-pointer"
                />
                <input
                  id="file-upload"
                  name="file-upload"
                  title="file-upload"
                  placeholder="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </div>
            <Image src={send} alt="User Image" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  )
}

export default MessageInput
