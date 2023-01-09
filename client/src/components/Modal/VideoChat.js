import React from 'react'

export default function VideoChat({onClose, visible, userVideo, partnerVideo}) {

    const handleOnClose = () => {
        onClose()
    }

    // if(!visible) return null;

  return (
    <div className={`fixed ${!visible ? 'hidden' : ''} inset-0 z-10 flex items-center justify-center bg-black bg-opacity-100`}>
        <div className='flex flex-col'>
          <div className='flex gap-20'>
            <div className='flex flex-col h-52 w-52'>
              <h2 className='text-white'>MY VIDEO</h2>
              <video playsInline className='h-full w-full' muted ref={userVideo} autoPlay />
            </div>
            <div className='flex flex-col  h-96 w-96'>
              <h2 className='text-white'>OTHER USER VIDEO</h2>
              <video playsInline className='h-full w-full' ref={partnerVideo} autoPlay />
            </div>
          </div>
          <button className='text-white text-3xl' onClick={handleOnClose}>CLOSE</button>
        </div>

    </div>
  )
}
