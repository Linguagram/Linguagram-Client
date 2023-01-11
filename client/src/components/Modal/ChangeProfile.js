import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputField from "../../components/Form/InputFiled";
import MyListbox from "../../components/Form/ListBox";
import ComboboxInterest from "../../components/Form/Combobox";
import { useRef, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { swalError, swalErrorStr } from "../../util/swal";
import swal from "sweetalert";
import { editProfile, handleSetThisUser } from '../../store/middlewares/thunk';

export default function ChangeProfile({onClose, visible}) {

    const {thisUser} = useSelector((state) => state.userReducer)
    const dispatch = useDispatch();

    const handleOnClose = () => {
      onClose()
    }

    const {pathname} = useLocation()

    const [selectedInterest, setSelectedInterest] = useState([]);

    const deleteInterest = (interestId) => {
        if(selectedInterest.length > 1) {
            const updatedSelectedInterest = selectedInterest.filter(el => el.id !== interestId)
            setSelectedInterest(updatedSelectedInterest)
        } else {
            swalErrorStr('You need to have at least one interest...')
        }
    }

    const inputUsernameRef = useRef();
    const inputEmailRef = useRef();
    const inputPasswordRef = useRef()
    const inputNewPasswordRef = useRef();
    const inputConfirmNewsPassword = useRef();
    const inputCountryRef = useRef();
    const inputPhoneNumberRef = useRef();
    const inputNativeLanguageRef = useRef();
    const inputInterestLanguageRef = useRef();
    const inputInterestsRef = useRef();
    

    const handleChangeProfile = async (e) => {
        e.preventDefault();
    
        const inputs = {
          username: inputUsernameRef.current.value,
          email: inputEmailRef.current.value,
          password: inputPasswordRef.current.value,
          newPassword: inputNewPasswordRef.current.value,
          confirmNewPassword: inputConfirmNewsPassword.current.value,
          country: inputCountryRef.current.value,
          phoneNumber: inputPhoneNumberRef.current.value,
          nativeLanguages: [inputNativeLanguageRef.current.id],
          interestLanguages: [inputInterestLanguageRef.current.id],
          interests: []
        };

        inputs.interests = selectedInterest.map(el => el.id)
        dispatch(editProfile(inputs))
        .then(() => {
            handleOnClose()
            swal(
            "",
            `Your profile has been updated `
            );
            inputUsernameRef.current.value = "";
            inputEmailRef.current.value = "";
            inputPasswordRef.current.value = "";
            inputNewPasswordRef.current.value = "";
            inputConfirmNewsPassword.current.value = "";
            inputPhoneNumberRef.current.value = "";
            inputCountryRef.current.value = ""
            setSelectedInterest([])
        })
        .catch((err) => {
            if (err.response?.data?.message) {
            swalError(err)
            inputPasswordRef.current.value = ''
            inputNewPasswordRef.current.value = "";
            inputConfirmNewsPassword.current.value = "";
            }
        });
        
    };
   
  
    if(!visible) return null;
  
    return (
      <div className='fixed inset-0 z-10 flex items-center justify-center overflow-auto bg-light-gray md:bg-black bg-opacity-60'>
        <div className={`flex flex-col w-full gap-5 p-5 mx-4 rounded h-5/6 md:mx-0 ${pathname === '/home/setting' ? 'bg-light-gray ': 'bg-darker-gray'} md:w-1/2 md:pt-80 md:h-min lg:pt-5 lg:w-fit lg:h-fit 2xl:w-1/3 `}>
            <div className='flex items-center justify-between'>
                <h3 className='text-xl text-white'>Change Profile</h3>
            </div>
            <form onSubmit={handleChangeProfile}>
                <div className="flex flex-col items-center gap-4 p-4 md:py-0 md:w-full">
                <div className="flex flex-col justify-between w-full gap-4 lg:flex-row">
                    <div className="flex flex-col w-full gap-4">
                    <InputField
                        inputRef={inputUsernameRef}
                        label={"Name"}
                        icon={"user-large"}
                        type={"text"}
                        placeholder={"Name"}
                        defaultValue={thisUser.username}
                    />
                    <InputField
                        inputRef={inputEmailRef}
                        label={"Email"}
                        icon={"envelope"}
                        type={"text"}
                        placeholder={"Email"}
                        defaultValue={thisUser.email}
                    />
                    <InputField
                        inputRef={inputNewPasswordRef}
                        label={"New Password"}
                        icon={"lock"}
                        type={"password"}
                        placeholder={"**********"}
                    />
                    <InputField
                        inputRef={inputConfirmNewsPassword}
                        label={"Confirm New Password"}
                        icon={"lock"}
                        type={"password"}
                        placeholder={"**********"}
                    />
                    <InputField
                        inputRef={inputPasswordRef}
                        label={"Password (required)"}
                        icon={"lock"}
                        type={"password"}
                        placeholder={"**********"}
                    />
                    </div>
                    <div className="flex flex-col w-full gap-4">
                    <InputField
                        inputRef={inputCountryRef}
                        label={"Country"}
                        icon={"globe"}
                        type={"text"}
                        placeholder={"Country"}
                        defaultValue={thisUser.country}
                    />
                    <InputField
                        inputRef={inputPhoneNumberRef}
                        label={"Phone Number"}
                        icon={"phone"}
                        type={"text"}
                        placeholder={"Phone Number"}
                        defaultValue={thisUser.phoneNumber}
                    />
                    <div className="flex flex-col">
                        <label className="mb-2 text-sm">Native in</label>
                        <div className="flex items-center flex-1 bg-darker-gray">
                        <FontAwesomeIcon
                            className="p-3 text-xl text-slate-500 bg-main-color-blur"
                            icon="language"
                        />
                        <div className="w-full">
                            <MyListbox inputRef={inputNativeLanguageRef}/>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 text-sm">Want to learn</label>
                        <div className="flex items-center flex-1 bg-darker-gray">
                        <FontAwesomeIcon
                            className="p-3 text-xl text-slate-500 bg-main-color-blur"
                            icon="language"
                        />
                        <div className="w-full">
                            <MyListbox inputRef={inputInterestLanguageRef} />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <label className="mb-2 text-sm">Interest Topic</label>
                    <div className="flex items-center flex-1 bg-darker-gray">
                    <FontAwesomeIcon
                        className="p-3 text-xl text-slate-500 bg-main-color-blur"
                        icon="person-biking"
                    />
                    <div className="w-full">
                        <ComboboxInterest
                        selectedInterest={selectedInterest}
                        setSelectedInterest={setSelectedInterest}
                        />
                    </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    {selectedInterest.map((interest) => (
                    <div className='flex items-center gap-1'>
                        <div
                            className="px-3 py-1 rounded bg-darker-gray"
                            key={interest.id}>
                            {interest.name}
                        </div>
                        <h6 onClick={() => deleteInterest(interest.id)} className='text-white cursor-pointer'>&times;</h6>
                    </div>
                    ))}
                </div>
                <div className='flex gap-10'>
                    <button
                        className="w-20 p-3 text-sm rounded bg-main-color"
                        onClick={onClose}
                        >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="w-20 p-3 text-sm rounded bg-main-color"
                        >
                        Edit
                    </button>
                </div>
                </div>
            </form>
        </div>
  
      </div>
  
    )
  }
