import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { changeAvatarUser, handleSetThisUser } from "../../store/middlewares/thunk";
import { useDispatch } from "react-redux";

// Kalau udah fix, mungkin ini bisa dihapus ? -----
function OldChangeAvatar({ onClose, visible }) {
  const handleOnClose = () => {
    onClose();
  };

  return (
    <div
      className={`${
        visible ? "" : "hidden"
      } fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60`}
    >
      <div className="flex flex-col w-full gap-3 p-5 mx-4 rounded md:mx-0 md:w-1/2 bg-darker-gray lg:h-2/5 2xl:h-1/5 2xl:w-1/5 h-3/5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl text-white">Select an Image</h3>
          <h3
            onClick={handleOnClose}
            className="text-4xl text-gray-400 cursor-pointer"
          >
            &times;
          </h3>
        </div>
        <div className="flex w-full h-full gap-4">
          <div className="flex items-center justify-center w-1/2 h-full rounded cursor-pointer md:h-fit md:w-full -flex-col bg-black-blue">
            <div className="flex flex-col items-center gap-2 p-5 md:gap-5">
              <div className="flex items-center justify-center w-16 h-16 md:w-32 md:h-32 bg-main-color-icon">
                <FontAwesomeIcon
                  className="text-xl text-white"
                  icon="cloud-arrow-up"
                />
              </div>
              <h3 className="text-sm text-center text-gray-400 md:text-base">
                Upload Image
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/2 h-full rounded cursor-pointer md:h-fit md:w-full -flex-col bg-black-blue">
            <div className="flex flex-col items-center gap-2 p-5 md:gap-5">
              <div className="flex items-center justify-center w-16 h-16 md:w-32 md:h-32 bg-main-color-icon">
                <FontAwesomeIcon className="text-xl text-white" icon="ban" />
              </div>
              <h3 className="text-sm text-center text-gray-400 md:text-base">
                Remove Picture
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//-------------------------------------------------

// Karena ini kurang lebih copy-an dari yang di atas ---------
export default function ChangeAvatar({ onClose, visible }) {
  const dispatch = useDispatch()
  const fileInput = useRef(null);
  const formData = useRef(null);
  const [attachmentName, setAttachmentName] = useState("");

  const showFilePicker = (e) => {
    e.preventDefault();

    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleFileSubmit = (e) => {
    setAttachmentName(e.target.files[0].name);
    handleFormSubmit()
  }

  const handleFormSubmit = () => {
    if(formData.current) {
      for (const data of formData.current.elements) {
        console.log(data.name, data.value);
      }

      const data = {
        avatar: formData.current
      }

      dispatch(changeAvatarUser(data))
      .then((_) => {
        onClose()
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  return (
    <>
      <Transition appear show={visible} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
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
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-4/5 flex flex-col gap-8 items-center max-w-sm h-[75%] transform overflow-hidden rounded-2xl bg-darker-gray p-6 text-left align-middle transition-all">
                  <Dialog.Title
                    as="div"
                    className="text-xl font-medium leading-6 text-white"
                  >
                    <h3>Select an Image</h3>
                  </Dialog.Title>

                  <div className="flex flex-col h-full max-h-1/2 gap-4 md:flex-row">
                    <form
                    ref={formData}
                    encType="multipart/form-data"
                    onSubmit={handleFormSubmit}
                    >
                    <input
                      ref={fileInput}
                      onChange={handleFileSubmit}
                      style={{ display: "none" }}
                      type="file"
                      id="attachment-input"
                      name="avatar"
                    />
                    </form>
                    <button
                      type="button"
                      className="flex flex-1 flex-col gap-2 w-full aspect-square justify-center items-center rounded-md bg-black-blue px-4 py-2 text-sm font-medium text-white"
                      onClick={showFilePicker}
                    >
                      <FontAwesomeIcon
                        className="text-xl text-white"
                        icon="cloud-arrow-up"
                      />
                      Upload Image
                    </button>
                    <button
                      type="button"
                      className="flex flex-1 flex-col gap-2 w-full aspect-square justify-center items-center rounded-md bg-black-blue px-4 py-2 text-sm font-medium text-white"
                      onClick={onClose}
                    >
                      <FontAwesomeIcon
                        className="text-xl text-white"
                        icon="ban"
                      />
                      Remove Picture
                    </button>
                  </div>

                  <button
                    type="button"
                    className="flex flex-1 w-3/5 justify-center items-center rounded-md bg-black-blue px-4 py-2 text-sm font-medium text-white"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
// -----------------------------------------------------------
