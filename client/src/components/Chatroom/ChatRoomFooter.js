import React, {useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../store/middlewares/thunk';

function TextAttachmentName({ attachmentName, clearAttachment }) {
  return (
    <div className="" style={{ padding: "14px 0px 0px 20px", color: "white", fontWeight: "bold" }}>
      <span>
        Attachment: {attachmentName}
      </span>
      <span className="mx-2" onClick={clearAttachment}>
        <FontAwesomeIcon className='text-gray-400 cursor-pointer small-icons' icon='trash-can'/>
      </span>
    </div>
  );
}

export default function ChatRoomFooter({ groupId }) {
  const dispatch = useDispatch();
  const [attachmentName, setAttachmentName] = useState("");

  /**
   * @type {{current: HTMLFormElement}}
   */
  const formData = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (groupId && formData.current) {
      for (const data of formData.current.elements) {
        console.log(data.value);
      };

      dispatch(sendMessage(groupId, formData));
    }
  }

  const fileInput = useRef(null);

  const showFilePicker = (e) => {
    e.preventDefault();

    if (fileInput.current) {
      fileInput.current.click();
    }
  }

  const handleFileInputChange = (e) => {
    setAttachmentName(e.target.files[0].name);
  }

  const clearAttachment = () => {
    setAttachmentName("");
    fileInput.current.value = "";
  }

  return (
    <form ref={formData} encType="multipart/form-data" onSubmit={handleSubmit} className='flex flex-col'>
      <div>
        {
        attachmentName && <TextAttachmentName clearAttachment={clearAttachment} attachmentName={attachmentName}/>
      }
      </div>
      <div className="flex justify-between gap-5 p-5">
        <input ref={fileInput} onChange={handleFileInputChange} style={{ display: "none" }} type="file" id="attachment-input" name="attachment" />
        <div className='flex items-center w-11/12 p-3 rounded 2xl:w-full bg-light-gray search-chat-container'>
          <input name="content" className='text-sm text-white bg-transparent focus:border-none focus:outline-none' type='text' placeholder='Type your message..'></input>
        </div>
        <div className='flex items-center justify-around w-1/12 gap-2 2xl:max-w-fit 2xl:gap-5'>
          <button type='button' onClick={showFilePicker}>
            <FontAwesomeIcon className='text-gray-400 cursor-pointer small-icons' icon='paperclip'/>
          </button>
          <button type='submit'>
            <FontAwesomeIcon className='text-gray-400 cursor-pointer small-icons' icon='paper-plane'/>
          </button>
        </div>
      </div>
    </form>
  )
}
