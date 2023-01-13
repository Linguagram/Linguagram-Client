import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../store/middlewares/thunk";
import { useSelector } from "react-redux";

export default function ChatRoomFooter() {
  const dispatch = useDispatch();
  const [attachmentName, setAttachmentName] = useState("");

  const { openChat } = useSelector((state) => state.sectionReducer);
  const { thisUser } = useSelector((state) => state.userReducer);

  /**
   * @type {{current: HTMLFormElement}}
   */
  const formData = useRef(null);

  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (openChat?.id && formData.current) {
      for (const data of formData.current.elements) {
        console.log(data.name, data.value);
      }

      const data = {
        file: formData.current,
        GroupId: openChat.id,
        UserId: thisUser.id,
        content: formData.current.elements.namedItem("content").value,
      };

      console.log("[DATA MESSAGE]", data);

      dispatch(sendMessage(data));
      formData.current.reset();
      setAttachmentName("");
    }
  };

  const showFilePicker = (e) => {
    e.preventDefault();

    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleFileInputChange = (e) => {
    setAttachmentName(e.target.files[0].name);
  };

  const clearAttachment = () => {
    fileInput.current.value = '';
    setAttachmentName('');
  };

  return (
    <form
      ref={formData}
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="flex flex-col"
    >
      <div>
        {attachmentName && (
          <div
            className=""
            style={{
              padding: "14px 0px 0px 20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <span className="mx-2" onClick={clearAttachment}>
              <FontAwesomeIcon
                className="text-gray-400 cursor-pointer small-icons"
                icon="trash-can"
              />
            </span>
            <span>Attachment: {attachmentName}</span>
          </div>
        )}
      </div>
      <div className="flex justify-between gap-5 p-5">
        <input
          ref={fileInput}
          onChange={handleFileInputChange}
          style={{ display: "none" }}
          type="file"
          accept="audio/*, video/*, image/*"
          id="attachment-input"
          name="attachment"
        />
        <div className="flex items-center w-11/12 p-3 rounded 2xl:w-full bg-light-gray search-chat-container">
          <input
            name="content"
            className="text-sm text-white bg-transparent focus:border-none focus:outline-none w-full"
            type="text"
            placeholder="Type your message.."
          ></input>
        </div>
        <div className="flex items-center justify-around w-1/12 gap-2 2xl:max-w-fit 2xl:gap-5">
          <button type="button" onClick={showFilePicker}>
            <FontAwesomeIcon
              className="text-gray-400 cursor-pointer small-icons"
              icon="paperclip"
            />
          </button>
          <button type="submit">
            <FontAwesomeIcon
              className="text-gray-400 cursor-pointer small-icons"
              icon="paper-plane"
            />
          </button>
        </div>
      </div>
    </form>
  );
}
