import React from 'react'

export default function VideoChat({onClose, visible, userVideo, partnerVideo}) {

    const handleOnClose = () => {
        onClose()
    }
    console.log(userVideo, "user")
    console.log(partnerVideo, 'partner')
    // if(!visible) return null;

  return (
    <div className={`fixed ${!visible ? 'hidden' : ''} inset-0 z-10 flex items-center justify-center bg-black bg-opacity-100`}>
        <video playsInline className='h-48 w-48'  ref={userVideo} autoPlay />
        <video playsInline className='h-48 w-48' ref={partnerVideo} autoPlay />
        <h2 className='text-white'>BAC</h2>
        <button className='text-white text-3xl' onClick={handleOnClose}>CLOSE</button>

    </div>
  )
}
