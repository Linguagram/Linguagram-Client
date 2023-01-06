import { setActiveSection, setUser } from "../actions/actionCreator";

// titip sementara const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjcyOTc4NjE4fQ.SUaOajp4WM-GI7qFy3BPq6wQR-j3VP11v8PXYjKa9pI'

export const handleSetActiveSection = (section) => {
    return (dispatch, getState) => {
        dispatch(setActiveSection(section))
    }
}

export const handleSetUser = (payload) => {
    return (dispatch, getState) => {
        dispatch(setUser(payload))
    }
}