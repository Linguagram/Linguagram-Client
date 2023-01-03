import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ChangeAvatar({onClose, visible}) {

  const handleOnClose = () => {
    onClose()
  }

  if(!visible) return null;

  return (
    <div className='fixed z-10 flex justify-center items-center bg-black bg-opacity-60 inset-0'>

      <div className='bg-darker-gray w-1/4 h-1/3 flex flex-col gap-3 rounded p-5'>
        <div className='flex items-center justify-between'>
          <h3 className='text-white text-xl'>Select an Image</h3>
          <h3 onClick={handleOnClose} className='text-gray-400 text-4xl cursor-pointer'>&times;</h3>
        </div>
        <div className='flex h-4/5 gap-10'>
          <div className='bg-black-blue w-full rounded cursor-pointer'>
            <div className='flex items-center flex-col p-5 gap-5'>
              <div className='bg-main-color-icon flex justify-center items-center w-32 h-32'>
                <FontAwesomeIcon className='text-white text-xl' icon='cloud-arrow-up'/>
              </div>
              <h3 className='text-gray-400'>Upload Image</h3>
            </div>
          </div>
          <div className='bg-black-blue w-full rounded cursor-pointer'>
            <div className='flex items-center flex-col p-5 gap-5'>
              <div className='bg-main-color-icon flex justify-center items-center w-32 h-32'>
                <FontAwesomeIcon className='text-white text-xl' icon='ban'/>
              </div>
              <h3 className='text-gray-400'>Upload Image</h3>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}