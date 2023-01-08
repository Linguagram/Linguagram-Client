import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import { FerrisWheelSpinner } from 'react-spinner-overlay'
import { URL_SERVER } from '../baseUrl'

export default function EmailVerification() {

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const [searchParams] = useSearchParams();
    const token = searchParams.get('verification')

    const verifyUser = async (token) => {
        try {
            const {data} = await axios({
                method: 'POST',
                url: `${URL_SERVER}/users/verify/?verification=${token}`
            });

            swal({
                text: data,
                icon: "success",
            });

            navigate('/home/chats')

            setLoading(false)
        } catch(err) {
            if(err.response?.data?.message) {
                if(err.response.data.message === 'Your email address has been verified') {
                    swal({
                        text: `${err.response.data.message}`,
                        icon: "success",
                    });
                    navigate('/home/chats')
                } else {
                    swal({
                        text: `${err.response.data.message}`,
                        icon: "error",
                    });
                }
            }
        }
    }

    verifyUser(token)

  return (
    <div className='flex bg-white h-screen justify-center items-center'>
        <FerrisWheelSpinner loading={loading}　size={80} overlayColor="rgba(255,255,146,0.3)" />
    </div>
  )
}
