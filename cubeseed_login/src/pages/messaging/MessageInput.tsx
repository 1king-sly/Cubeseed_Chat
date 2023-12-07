import React, { useState, useEffect } from "react"
import Image from "next/image"
import emoji from "./icons/emoji.svg"
import sendIcon from "./icons/send.svg"
import mic from "./icons/mic.svg"
import image from "./icons/image.svg"
import Recorder from "recorder-js"

const MessageInput = () => {
  const [inputValue, setInputValue] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)
  const [recorder, setRecorder] = useState(null)
  const [isRecording, setIsRecording] = useState(false)

  useEffect(() => {
    // Initialize recorder when the component mounts
    const initRecorder = async () => {
      try {
        const audioStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        })
        const audioContext = new AudioContext()
        const mediaStreamSource =
          audioContext.createMediaStreamSource(audioStream)
        const recorderInstance = new Recorder(mediaStreamSource)

        setRecorder(recorderInstance)
      } catch (error) {
        console.error("Error initializing recorder:", error)
      }
    }

    initRecorder()
  }, [])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setSelectedFile(file)
  }

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendClick()
    }
  }

  const handleMicClick = async () => {
    // Check if recorder is initialized
    if (recorder) {
      try {
        // Check if the recorder is in the "recording" state
        if (isRecording) {
          // If recording, stop the recorder
          await recorder.stop()
          const audioBlob = await recorder.getBlob()
          console.log("Recording stopped. Audio Blob:", audioBlob)
        } else {
          // If not recording, start the recorder
          await recorder.start()
          console.log("Recording started.")
        }

        // Toggle the recording state
        setIsRecording(!isRecording)
      } catch (error) {
        console.error("Error handling mic click:", error)
      }
    } else {
      console.warn("Recorder is not initialized.")
    }
  }

  const handleSendClick = async () => {
    // Handle sending message logic
    let message = inputValue

    if (selectedFile) {
      // If a file is selected, append its details to the message
      message += `<br/>File: ${selectedFile.name}, Type: ${selectedFile.type}`
    }

    // Clear the textarea and reset its height
    setInputValue("")
    setSelectedFile(null)
    adjustTextareaHeight()

    // Check if recorder is initialized
    if (recorder) {
      try {
        // Check if the recorder is in the "recording" state
        if (isRecording) {
          // Stop the recorder if it's still recording
          await recorder.stop()
          const audioBlob = await recorder.getBlob()
          // Now you can use the 'audioBlob' for sending the audio file
          console.log("Audio Blob:", audioBlob)

          // Toggle the recording state
          setIsRecording(false)
        }
      } catch (error) {
        console.error("Error stopping recorder:", error)
      }
    } else {
      console.warn("Recorder is not initialized.")
    }

    // Now you can use the 'message' variable for sending the complete message
    console.log("Complete Message:", message)
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
    <>
      <div className="fixed bottom-0  flex w-[100vw]  justify-center bg-white px-2 shadow-md sm:w-[60vw] sm:px-4 lg:w-[70vw] lg:px-4">
        <div className="flex w-full items-center justify-between gap-2">
          <Image src={emoji} alt="" className="emoji cursor-pointer" />
          <textarea
            id="messageTextarea"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
            className="mt-6 flex w-full resize-none border-none bg-transparent outline-none "
            placeholder="Message here...."
          />
          <div className="relative flex flex-row gap-6 pr-12 sm:pr-5 ">
            <Image
              src={mic}
              alt="User Image"
              className="cursor-pointer"
              onClick={handleSendClick}
            />
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
    </>
  )
}

export default MessageInput
