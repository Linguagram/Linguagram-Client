import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux';
import { getLanguages } from '../../store/middlewares/thunk';
import { setLanguages } from '../../store/actions/actionCreator';
import { swalError } from '../../util/swal';

export default function MyListbox({ inputRef }) {
  const dispatch = useDispatch()
  const { languageList } = useSelector((state) => state.languageReducer);
  const [selected, setSelected] = useState({})

  inputRef.current = selected

  useEffect(() => {
    dispatch(getLanguages())
    .then((res) => {
      dispatch(setLanguages(res.data));
      setSelected(res.data[0]);
    })
    .catch((err) => {
      if (err.response?.data?.message) {
        swalError(err);
      } else {
        console.log(err);
      }
    });
  }, [])

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default bg-darker-gray py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-32 w-full overflow-auto bg-darker-gray py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20 overflow-y-auto">
              {languageList.map((language) => (
                <Listbox.Option
                  key={language.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-main-color text-white' : 'text-white'
                    }`
                  }
                  value={language}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {language.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  )
}
