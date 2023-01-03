import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ChangeProfile({onClose, visible}) {

    const handleOnClose = () => {
      onClose()
    }
  
    if(!visible) return null;
  
    return (
      <div className='fixed z-10 flex justify-center items-center bg-black bg-opacity-60 inset-0'>
  
        <div className='bg-darker-gray w-1/4 h-1/2 flex flex-col gap-10 rounded p-5'>
            <div className='flex items-center justify-between'>
                <h3 className='text-white text-xl'>Change Profile</h3>
            </div>
            <form className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' for='input-name'>NAME</label>
                    <input className='bg-black-blue rounded text-white focus:border-none h-10 focus:outline-none p-2' id='input-name' type='text'></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' for='input-email'>EMAIL</label>
                    <input className='bg-black-blue rounded text-white focus:border-none h-10 focus:outline-none p-2' id='input-email' type='text'></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' for='input-country'>COUNTRY</label>
                    <input className='bg-black-blue rounded text-white focus:border-none h-10 focus:outline-none p-2' id='input-country' type='text'></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' for='native-languages'>NATIVE LANGUAGES</label>
                    <input className='bg-black-blue rounded text-white focus:border-none h-10 focus:outline-none p-2' id='native-languages' type='text'></input>
                </div>
                <div className='flex mt-3 gap-10 justify-end'>
                    <div onClick={handleOnClose} className='text-white flex items-center justify-center cursor-pointer hover:underline'>
                        Cancel
                    </div>
                    <button type='submit' className='rounded p-2 w-24 text-white bg-main-color'>
                        DONE
                    </button>
                </div>
            </form>
        </div>
  
      </div>
  
    )
  }
