import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import { FerrisWheelSpinner } from 'react-spinner-overlay'
import { URL_SERVER } from '../baseUrl'
import { useDispatch } from 'react-redux'
import { handleSetThisUser } from '../store/middlewares/thunk'

export default function EmailVerification() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)

    
    const [searchParams] = useSearchParams();
    const token = searchParams.get('verification')

    const verifyUser = async (token) => {
        try {
            const {data} = await axios({
                method: 'POST',
                url: `${URL_SERVER}/users/verify/?verification=${token}`
            });
            
            localStorage.setItem('access_token', data.access_token)
            localStorage.setItem('user_id', data.user.id)
  
            swal({
                text: data.message,
                icon: "success",
            });

            navigate('/explore/people')

            setLoading(false)
            dispatch(handleSetThisUser(data.user))
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
