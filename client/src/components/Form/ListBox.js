import { Fragment, useEffect, useState } from "react";
import { Combobox, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { getLanguages } from "../../store/middlewares/thunk";
import { setLanguages } from "../../store/actions/actionCreator";
import { swalError } from "../../util/swal";

export default function MyListbox({ inputRef }) {
  const dispatch = useDispatch();
  const { languageList } = useSelector((state) => state.languageReducer);
  const [selected, setSelected] = useState({});
  const [query, setQuery] = useState("");

  inputRef.current = selected;
  const filtered = query === ''
    ? languageList
    : languageList.filter((language) => {
        return language.name.toLowerCase().includes(query.toLowerCase());
      });

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSelect = (language) => {
    setSelected(language)
    setQuery('')
  }

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
  }, []);

  return (
    <>
      <Combobox value={selected} onChange={handleSelect}>
        <div className="relative mt-1">
          <div className="flex gap-2">
            <Combobox.Input
              onChange={handleOnChange}
              displayValue={(language) => language.name}
              className="relative w-full px-3 py-2 text-left cursor-pointer bg-darker-gray focus:outline-none focus-visible:border-indigo-500 sm:text-sm"
            />
            <Combobox.Button className="relative w-1/3 cursor-pointer bg-darker-gray focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute z-20 w-full py-1 mt-1 overflow-auto overflow-y-auto text-base shadow-lg max-h-32 bg-darker-gray ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filtered.map((language) => (
                <Combobox.Option
                  key={language.id}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-main-color text-white" : "text-white"
                    }`
                  }
                  value={language}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {language.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </>
  );
}
