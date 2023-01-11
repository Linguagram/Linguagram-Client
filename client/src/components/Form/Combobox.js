import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { getInterests } from "../../store/middlewares/thunk";
import { setInterests } from "../../store/actions/actionCreator";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { swalError, swalErrorStr } from "../../util/swal";

export default function ComboboxInterest({
  selectedInterest,
  setSelectedInterest,
  userInterests
}) {
  const dispatch = useDispatch();
  const { interestList } = useSelector((state) => state.interestReducer);

  const handleOnChange = (payload) => {
    if (payload.length < 1) {
      swalErrorStr('You must select minimum 1 topic')
    } else if (payload.length > 3) {
      swalErrorStr('You must select maximum 3 topics')
    } else {
      // console.log(payload, "<<<<< selectedInterests");
      setSelectedInterest(payload)
    }
  }

  useEffect(() => {
    dispatch(getInterests())
      .then((res) => {
        dispatch(setInterests(res.data));
        if (userInterests?.length)
          setSelectedInterest(userInterests);
        else setSelectedInterest([res.data[0]]);
      })
      .catch((err) => {
        if (err.response?.data?.message) {
          swalError(err);
        } else {
          console.log(err);
        }
      });
  }, []);

  if (interestList.length > 0 && selectedInterest.length > 0) {
    return (
      <Combobox
        value={selectedInterest}
        onChange={handleOnChange}
        multiple
      >
        <div className="relative">
          <Combobox.Button className="relative flex justify-between w-full pl-3 pr-2 text-xs text-left cursor-pointer md:py-2 bg-darker-gray focus:outline-none focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">Select interested topics</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></span>
            <ChevronUpDownIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute z-20 w-full py-1 mt-1 overflow-auto overflow-y-auto text-base shadow-lg max-h-32 bg-darker-gray ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {
                interestList.map((interest) => (
                  <Combobox.Option
                    key={interest.id}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 lg:text-base text-xs ${
                        active ? "bg-main-color text-white" : "text-white"
                      }`
                    }
                    value={interest}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {interest.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 text-white`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    );
  }
}
