import { setUser, setGroups, setAllMessages } from "../actions/actionCreator";
import { URL_SERVER } from "../../baseUrl";
import axios from 'axios'

const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjcyOTc4NjE4fQ.SUaOajp4WM-GI7qFy3BPq6wQR-j3VP11v8PXYjKa9pI'

export const handleSetUser = (user) => {
    return (dispatch, getState) => {
        dispatch(setUser(user))
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