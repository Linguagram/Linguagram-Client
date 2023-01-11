import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function TutorialModal() {
  let [isOpen, setIsOpen] = useState(true);
  const [steps, setSteps] = useState(1)

  const nextStep = () => {
    if(steps < 3) setSteps(steps + 1)
  }

  const PrevStep = () => {
    if(steps > 1) setSteps(steps - 1)
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }


  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {steps === 1 ? <StepOne /> : ""}
                {steps === 2 ? <StepTwo /> : ""}

                  
                  <div className="my-4 flex justify-center gap-3">
                    <div className={`h-2 aspect-square rounded-full bg-slate-400`}></div>
                  </div>
                  <div className="mt-4 flex w-full gap-4">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={PrevStep}>
                      Back
                    </button>
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={nextStep}>
                      Next
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function StepOne() {
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900">
        Welcome to Linguagram
      </Dialog.Title>
      <div className="mt-2">
      <img src="https://ik.imagekit.io/mbahol5g6/linguagram-tutor/localhost_3001_explore_people__1_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673448389481" />
      <p className="mt-2">Learn language from someone who speaks it!</p>
      </div>
    </>
  );
}

function StepTwo() {
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900">
        Find Someone...
      </Dialog.Title>
      <div className="mt-2">
      <img className="w-full aspect-square object-contain object-center" src="https://ik.imagekit.io/mbahol5g6/linguagram-tutor/Screenshot_2023-01-11_at_23.11.07.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673449933688" />
      <p className="mt-2">Who match your interested language</p>
      </div>
    </>
  );
}
