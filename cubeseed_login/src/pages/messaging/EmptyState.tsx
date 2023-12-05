import React from "react"
const EmptyState = () => {
  return (
    <>
      <div
        className="
    fixed
    flex
    min-h-screen
    items-center
    justify-center
    bg-gray-100
    px-4
    py-10
    sm:w-[60vw]
    sm:px-6
    lg:w-[70vw]
    lg:px-8"
      >
        <div className=" flex flex-col items-center text-center">
          <h3
            className="
      mt-2 text-xl font-semibold text-gray-700"
          >
            Select a chat to start a new conversation
          </h3>
        </div>
      </div>
    </>
  )
}

export default EmptyState
