import React from "react"
import SingleMessage from "./SingleMessage"

const MessagesShow = () => {
  return (
    <>
      <div className="max-h-[500px] w-full overflow-y-auto px-4 py-8 ">
        <SingleMessage />
      </div>
    </>
  )
}

export default MessagesShow
