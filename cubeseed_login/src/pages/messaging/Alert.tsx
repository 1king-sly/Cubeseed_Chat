import React, { useEffect, useState } from "react"

interface AlertProps {
  message: string
  onClose: () => void
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose()
    }, 3000) //

    return () => {
      clearTimeout(timeout)
    }
  }, [onClose])

  return (
    <div className="rounded-md bg-blue-500 p-2 text-white shadow-md">
      {message}
    </div>
  )
}

export default Alert
