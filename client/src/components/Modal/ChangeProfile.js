import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ChangeProfile({onClose, visible}) {

    const handleOnClose = () => {
      onClose()
    }
  
    if(!visible) return null;
  
    return (
      <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60'>
  
        <div className='flex flex-col w-full gap-5 p-5 mx-4 rounded h-5/6 md:mx-0 bg-darker-gray md:w-1/2 2xl:w-1/3 lg:h-fit'>
            <div className='flex items-center justify-between'>
                <h3 className='text-xl text-white'>Change Profile</h3>
            </div>
            <form className='flex flex-col gap-3 overflow-y-auto'>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' for='input-name'>NAME</label>
                    <input className='h-10 p-2 text-white rounded bg-black-blue focus:border-none focus:outline-none' id='input-name' type='text'></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' for='input-email'>EMAIL</label>
                    <input className='h-10 p-2 text-white rounded bg-black-blue focus:border-none focus:outline-none' id='input-email' type='text'></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' for='input-country'>COUNTRY</label>
                    <input className='h-10 p-2 text-white rounded bg-black-blue focus:border-none focus:outline-none' id='input-country' type='text'></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' for='native-languages'>NATIVE LANGUAGES</label>
                    <input className='h-10 p-2 text-white rounded bg-black-blue focus:border-none focus:outline-none' id='native-languages' type='text'></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' for='native-languages'>INTERESTS</label>
                    <input className='h-10 p-2 text-white rounded bg-black-blue focus:border-none focus:outline-none' id='native-languages' type='text'></input>
                </div>
                <div className='flex justify-center gap-10 mt-3 md:gap-5 md:justify-end'>
                    <div onClick={handleOnClose} className='flex items-center justify-center p-2 text-white cursor-pointer md:p-0 hover:underline'>
                        Cancel
                    </div>
                    <button type='submit' className='w-24 p-2 text-white rounded bg-main-color'>
                        DONE
                    </button>
                </div>
            </form>
        </div>
  
      </div>
  
    )
  }
