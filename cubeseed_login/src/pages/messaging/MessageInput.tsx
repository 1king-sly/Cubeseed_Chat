// MessageInput.tsx
import React, { useState, useEffect } from "react"
import Image from "next/image"
import emoji from "./icons/emoji.svg"
import sendIcon from "./icons/send.svg"
import mic from "./icons/mic.svg"
import image from "./icons/image.svg"
import Recorder from "recorder-js"
import stop from "./icons/stop.svg"

const audioContext: AudioContext | null =
  typeof window !== "undefined" &&
  (window.AudioContext || (window as any).webkitAudioContext)
    ? new ((window as any).AudioContext || (window as any).webkitAudioContext)()
    : null

const recorder = audioContext
  ? new Recorder(audioContext, { onAnalysed: (data) => console.log(data) })
  : null

interface MessageInputProps {
  onSendMessage: (message: string, file: Blob | null) => void
  inputMessage: string
  setInputMessage: React.Dispatch<React.SetStateAction<string>>
}

const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  inputMessage,
  setInputMessage,
}) => {
  const [selectedFile, setSelectedFile] = useState<Blob | null>(null)
  const [isRecording, setIsRecording] = useState(false)
  const [icon, setIcon] = useState(mic)

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => recorder?.init(stream))
      .catch((err) => console.log("Uh oh... unable to get stream...", err))
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]
    setSelectedFile(file)
  }

  const handleInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendClick()
    }
  }

  const handleMicClick = () => {
    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }

  const startRecording = () => {
    recorder?.start().then(() => {
      setIcon(stop)
      setIsRecording(true)
    })
  }

  const stopRecording = () => {
    recorder?.stop().then(({ blob }) => {
      setIcon(mic)
      setIsRecording(false)
      onSendMessage(inputMessage, blob)
    })
  }

  const handleSendClick = () => {
    onSendMessage(inputMessage, selectedFile)
    setInputMessage("")
    setSelectedFile(null)
    adjustTextareaHeight()
  }

  const adjustTextareaHeight = () => {
    const textarea = document.getElementById("messageTextarea")
    if (textarea) {
      textarea.style.height = "auto"
      textarea.style.maxHeight = "150px"
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  return (
    <div className="fixed bottom-0 flex w-[100vw] justify-center bg-white px-2 shadow-md sm:w-[60vw] sm:px-4 lg:w-[70vw] lg:px-4">
      <div className="flex w-full items-center justify-between gap-2">
        <Image src={emoji} alt="" className="emoji cursor-pointer" />
        <textarea
          id="messageTextarea"
          value={inputMessage}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          className="mt-6 flex w-full resize-none border-none bg-transparent outline-none "
          placeholder="Message here...."
        />
        <div className="relative flex flex-row gap-6 pr-12 sm:pr-5 ">
          <Image
            src={icon}
            alt="record"
            className="cursor-pointer"
            onClick={handleMicClick}
          />
          <div className="-mt-5 h-12 w-12">
            <label htmlFor="file-upload" className="">
              <Image
                src={image}
                alt=" Image"
                className="h-full w-full cursor-pointer"
              />
              <input
                id="file-upload"
                name="file-upload"
                title="file-upload"
                placeholder="file-upload"
                type="file"
                onChange={handleFileChange}
                className="sr-only"
              />
            </label>
          </div>
          <Image
            src={sendIcon}
            alt="Send Message"
            className="cursor-pointer"
            onClick={handleSendClick}
          />
        </div>
      </div>
    </div>
  )
}

export default MessageInput
