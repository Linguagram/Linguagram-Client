import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputField from "../../components/Form/InputFiled";
import MyListbox from "../../components/Form/ListBox";
import ComboboxInterest from "../../components/Form/Combobox";
import { useRef, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { swalError } from "../../util/swal";
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

    const inputUsernameRef = useRef();
    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();
    const inputConfirmPasswordRef = useRef();
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
          confirmPassword: inputConfirmPasswordRef.current.value,
          country: inputCountryRef.current.value,
          phoneNumber: inputPhoneNumberRef.current.value,
          nativeLanguages: [inputNativeLanguageRef.current.id],
          interestLanguages: [inputInterestLanguageRef.current.id],
          interests: []
        };
        
        inputs.interests = selectedInterest.map(el => el.id)

        dispatch(editProfile(inputs))
      .then((response) => {
        dispatch(handleSetThisUser(response))

        swal(
          "",
          `Your profile has been updated `
        );

        inputUsernameRef.current.value = "";
        inputEmailRef.current.value = "";
        inputPasswordRef.current.value = "";
        inputConfirmPasswordRef.current.value = "";
        inputPhoneNumberRef.current.value = "";
        inputCountryRef.current.value = ""
        setSelectedInterest([])

      })
      .catch((err) => {
        if (err.response?.data?.message) {
          swalError(err)
          inputPasswordRef.current.value = "";
          inputConfirmPasswordRef.current.value = "";
        }
    });
        
    };
    
  
    if(!visible) return null;
  
    return (
      <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60'>
  
        <div className={`flex flex-col w-full gap-5 p-5 mx-4 rounded h-5/6 md:mx-0 ${pathname === '/home/setting' ? 'bg-light-gray ': 'bg-darker-gray'} md:w-1/2 2xl:w-1/3 lg:h-fit`}>
            <div className='flex items-center justify-between'>
                <h3 className='text-xl text-white'>Change Profile</h3>
            </div>
            <form onSubmit={handleChangeProfile}>
                <div className="flex flex-col gap-4 p-4 md:py-0 md:w-full items-center">
                <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                    <div className="flex flex-col gap-4 w-full">
                    <InputField
                        inputRef={inputUsernameRef}
                        label={"Name"}
                        icon={"user-large"}
                        type={"text"}
                        placeholder={"Name"}
                    />
                    <InputField
                        inputRef={inputEmailRef}
                        label={"Email"}
                        icon={"envelope"}
                        type={"text"}
                        placeholder={"Email"}
                    />
                    <InputField
                        inputRef={inputPasswordRef}
                        label={"Password"}
                        icon={"lock"}
                        type={"password"}
                        placeholder={"*****"}
                    />
                    <InputField
                        inputRef={inputConfirmPasswordRef}
                        label={"Confirm Password"}
                        icon={"lock"}
                        type={"password"}
                        placeholder={"*****"}
                    />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                    <InputField
                        inputRef={inputCountryRef}
                        label={"Country"}
                        icon={"globe"}
                        type={"text"}
                        placeholder={"Country"}
                    />
                    <InputField
                        inputRef={inputPhoneNumberRef}
                        label={"Phone Number"}
                        icon={"phone"}
                        type={"text"}
                        placeholder={"Phone Number"}
                    />
                    <div className="flex flex-col">
                        <label className="mb-2 text-sm">Native in</label>
                        <div className="flex flex-1 items-center bg-darker-gray">
                        <FontAwesomeIcon
                            className="text-slate-500 text-xl bg-main-color-blur p-3"
                            icon="language"
                        />
                        <div className="w-full">
                            <MyListbox inputRef={inputNativeLanguageRef} />
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 text-sm">Want to learn</label>
                        <div className="flex flex-1 items-center bg-darker-gray">
                        <FontAwesomeIcon
                            className="text-slate-500 text-xl bg-main-color-blur p-3"
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
                    <div className="flex flex-1 items-center bg-darker-gray">
                    <FontAwesomeIcon
                        className="text-slate-500 text-xl bg-main-color-blur p-3"
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
                    <div
                        className="bg-darker-gray py-1 px-3 rounded"
                        key={interest.id}>
                        {interest.name}
                    </div>
                    ))}
                </div>
                <div className='flex gap-10'>
                    <button
                        className="bg-main-color rounded p-3 text-sm w-20"
                        onClick={onClose}
                        >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-main-color rounded p-3 text-sm w-20"
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
