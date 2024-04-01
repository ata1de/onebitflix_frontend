import React, { useState } from 'react'
import {Toast, ToastBody} from 'reactstrap'

interface props {
    isOpen: boolean,
    message: string,
    color: string
}

const ToastComponent = ({isOpen, message, color}: props) => {
  return (
    <div>
        <Toast isOpen={isOpen} className={`${color} text-white fixed-top ms-auto mt-3`}>
            <ToastBody className='text-center'>{message}</ToastBody>
        </Toast>
    </div>
  )
}

export default ToastComponent