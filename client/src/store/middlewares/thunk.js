import { setActiveSection, setThisUser, setGroups, setAllMessages } from "../actions/actionCreator";
import { URL_SERVER } from '../../baseUrl'
import axios from 'axios'
import swal from 'sweetalert'

const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjcyOTc4NjE4fQ.SUaOajp4WM-GI7qFy3BPq6wQR-j3VP11v8PXYjKa9pI'

export const handleSetThisUser = (user) => {
    return (dispatch, getState) => {
        dispatch(setThisUser(user))
    }
}

export const handleSetActiveSection = (section) => {
    return (dispatch, getState) => {
        dispatch(setActiveSection(section))
    }
}

export const register = (inputs) => {
    return async (dispatch, getState) => {
        try {
            const { username, email, password, confirmPassword, phoneNumber, country } = inputs

            const {data} = await axios({
                method: 'POST',
                url: `${URL_SERVER}/users/register`,
                data: {
                  username,
                  email,
                  password,
                  confirmPassword,
                  phoneNumber,
                  country
                }
            });
            
            swal("", `Please check your inbox. We have sent a verification link to ${data.user.email}. `);

        } catch(err) {
            if(err.response?.data?.message) {
                swal({
                    text: `${err.response.data.message}`,
                    icon: "error",
                });
            }
        }
    }
}

export const login = (inputs) => {
    return (dispatch, getState) => {
        const { email, password } = inputs

        return axios({
            method: 'POST',
            url: `${URL_SERVER}/users/login`,
            data: {
              email,
              password,
            }
        });
    }
}

export const handleFetchGroups = () => {
    return async (dispatch, getState) => {
        try {
            
            const {data} = await axios({
                method: 'get',
                url: `${URL_SERVER}/groups`,
                headers: {
                  'access_token': jwt
                }
            });
            dispatch(setGroups(data))
        } catch(err) {
            console.log(err)
        }
    }
}

export const handleFetchAllMessagesByGroupId = (groups) => {
    return async (dispatch, getState) => {
        try {
            const array = []

            groups.forEach(async(el) => {
                const {data} = await axios({
                    method: 'get',
                    url: `${URL_SERVER}/groups/${el.GroupId}/messages`,
                    headers: {
                      'access_token': jwt
                    }
                });
                if(data.length > 0) array.push(data)
            })
            
            dispatch(setAllMessages(array))
        } catch(err) {
            console.log(err)
        }
    }
}