import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ChangeAvatar({onClose, visible}) {

  const handleOnClose = () => {
    onClose()
  }

  return (
    <div className={`${ visible ? '' : 'hidden' } fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60`}>

      <div className='flex flex-col w-full gap-3 p-5 mx-4 rounded md:mx-0 md:w-1/2 bg-darker-gray lg:h-2/5 2xl:h-1/5 2xl:w-1/5 h-3/5'>
        <div className='flex items-center justify-between'>
          <h3 className='text-xl text-white'>Select an Image</h3>
          <h3 onClick={handleOnClose} className='text-4xl text-gray-400 cursor-pointer'>&times;</h3>
        </div>
        <div className='flex w-full h-full gap-4'>
          <div className='flex items-center justify-center w-1/2 h-full rounded cursor-pointer md:h-fit md:w-full -flex-col bg-black-blue'>
            <div className='flex flex-col items-center gap-2 p-5 md:gap-5'>
              <div className='flex items-center justify-center w-16 h-16 md:w-32 md:h-32 bg-main-color-icon'>
                <FontAwesomeIcon className='text-xl text-white' icon='cloud-arrow-up'/>
              </div>
              <h3 className='text-sm text-center text-gray-400 md:text-base'>Upload Image</h3>
            </div>
          </div>
          <div className='flex items-center justify-center w-1/2 h-full rounded cursor-pointer md:h-fit md:w-full -flex-col bg-black-blue'>
            <div className='flex flex-col items-center gap-2 p-5 md:gap-5'>
              <div className='flex items-center justify-center w-16 h-16 md:w-32 md:h-32 bg-main-color-icon'>
                <FontAwesomeIcon className='text-xl text-white' icon='ban'/>
              </div>
              <h3 className='text-sm text-center text-gray-400 md:text-base'>Remove Picture</h3>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}