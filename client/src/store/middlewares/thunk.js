import { setActiveSection } from "../actions/actionCreator";

export const handleSetActiveSection = (section) => {
    return (dispatch, getState) => {
        dispatch(setActiveSection(section))
    }
}