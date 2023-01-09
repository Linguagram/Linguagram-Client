import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { getInterests } from "../../store/middlewares/thunk";
import { setInterests } from "../../store/actions/actionCreator";
import { swalError } from "../../util/swal";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function ComboboxInterest({
  selectedInterest,
  setSelectedInterest,
}) {
  const dispatch = useDispatch();
  const { interestList } = useSelector((state) => state.interestReducer);
  const [query, setQuery] = useState("");

  const filteredInterest =
    query === ""
      ? interestList
      : interestList.filter((interest) =>
          interest.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleDisplay = () => {
    interestList.map((interest) => interest.name).join(", ");
  };

  useEffect(() => {
    dispatch(getInterests())
      .then((res) => {
        dispatch(setInterests(res.data));
        setSelectedInterest([res.data[0], res.data[1]]);
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
        onChange={setSelectedInterest}
        multiple
      >
        <div className="relative mt-1">
          <Combobox.Button className="relative w-full cursor-default bg-darker-gray py-2 pl-3 pr-2 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm flex justify-between">
            <span className="block truncate">Select interested topics</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-32 w-full overflow-auto bg-darker-gray py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20 overflow-y-auto">
              {
                interestList.map((interest) => (
                  <Combobox.Option
                    key={interest.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-main-color text-white" : "text-white"
                      }`
                    }
                    value={interest}
                  >
                    {({ selectedInterest, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selectedInterest ? "font-medium" : "font-normal"
                          }`}
                        >
                          {interest.name}
                        </span>
                        {selectedInterest ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 text-white ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
