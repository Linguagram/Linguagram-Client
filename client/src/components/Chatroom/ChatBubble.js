import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  handleDeleteMessage,
  handleEditMessage,
  handleTranslate,
} from "../../store/middlewares/thunk";
import { useDispatch, useSelector } from "react-redux";
import { getUserAvatar } from "../../util/getAvatar";

export default function ChatBubble({ msg }) {
  const [content, setContent] = useState('')
  const [editing, setEditing] = useState(null)
  const [counterUser, setCounterUser] = useState({})
  const { thisUser, counterpartUser, nativeLanguage } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const translateMessage = async (content, toLanguage) => {
    try {
      const translated = await handleTranslate(content, toLanguage);
      setContent(translated)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setContent(msg.content)
  }, [msg])

  const deleteMessage = (groupId, msgId) => {
    dispatch(handleDeleteMessage(groupId, msgId, thisUser.id));
  }

  const editingElement = useRef(null);

  const editMessage = (e, groupId, msgId) => {
    e.preventDefault();
    const editContent = editingElement.current?.value;

    const data = {
      content: editContent,
      GroupId: groupId,
      MessageId: msgId,
      UserId: thisUser.id,
    };

    dispatch(handleEditMessage(data));
    setEditing(null);
  }

  useEffect(() => {
    if(counterpartUser?.type === 'group') {
      const counterUserTemp = counterpartUser.GroupMembers.find(el => el.UserId === msg.UserId)
      setCounterUser(counterUserTemp)
    }
  }, [])

  console.log(counterUser);

  if (msg.UserId === thisUser.id) {
    return (
      <div className="flex justify-end">
        <div className="flex items-end gap-3 mb-7">
          <div className="flex flex-col gap-1">
            <div className="flex justify-end gap-2">
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
                  <FontAwesomeIcon
                    className="text-sm text-gray-400 cursor-pointer"
                    icon="ellipsis-vertical"
                    aria-hidden="true"
                  />
                </Menu.Button>
                { !msg.deleted && <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg max-w-fit ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 bg-darker-gray">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="button"
                            onClick={() => setEditing(msg.id)}
                            className={classNames(
                              active
                                ? "bg-gray text-gray-300"
                                : "text-gray-400",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Edit
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="button"
                            onClick={() =>
                              deleteMessage(msg.GroupId, msg.id)
                            }
                            className={classNames(
                              active
                                ? "bg-gray text-gray-300"
                                : "text-gray-400",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Delete
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              }
              </Menu>
              <div
                className="flex flex-col gap-3 p-3 rounded min-w-10 bg-gray message-box"
                style={{ maxWidth: "70%" }}
              >
                {msg.deleted ? (
                  <h5
                    className="text-sm italic text-slate-500"
                    style={{ wordBreak: "break-word" }}
                  >
                    This message has been deleted
                  </h5>
                ) : (
                    msg.id === editing
                      ? (<form onSubmit={(e) => { editMessage(e, msg.GroupId, msg.id) }} className="flex flex-col gap-1">
                        {msg.MediaId ? (
                          <img
                            className="w-full img-chat"
                            src={msg.Medium.url}
                            alt="picture-chat"
                          ></img>
                        ) : (
                            ""
                          )}
                        <textarea
                          ref={editingElement}
                          className="px-2 py-1 text-sm text-white bg-transparent rounded focus:border-none focus:outline-none bg-darker-gray"
                          style={{ wordBreak: "break-word" }}
                          defaultValue={ content }
                        />
                        <div className="flex gap-1 text-xs text-gray-600">
                        <input
                          style={{ color: "white" }}
                          type="submit"
                          className="text-left cursor-pointer"
                          value="Save"/>
                        <button
                          style={{ color: "white" }}
                          className="text-left cursor-pointer"
                          onClick={() => setEditing(null)}
                        >Cancel</button>
                        </div>
                      </form>)
                      : (<div className="flex flex-col gap-1">
                        {msg.MediaId ? (
                          <img
                            className="w-full img-chat"
                            src={msg.Medium.url}
                            alt="picture-chat"
                          ></img>
                        ) : (
                            ""
                          )}
                        <h5
                          className="text-white"
                          style={{ wordBreak: "break-word" }}
                        >
                          { content }{" "}
                          {msg.edited ? (
                            <span className="text-xs text-slate-500">(edited)</span>
                          ) : (
                              ""
                            )}
                        </h5>
                      </div>)
                  )}
                <div className="flex items-center justify-end gap-1">
                  <FontAwesomeIcon
                    className="text-xs text-gray-400"
                    icon="check"
                  />
                  <h6 className="text-xs text-gray-400">
                    {new Date(msg.updatedAt).toLocaleString("id-ID").slice(0,15).replace('.',':')}
                  </h6>
                </div>
              </div>
            </div>
            <div className="text-right text-gray-400">{thisUser.username}</div>
          </div>
          <div>
            <img
              src={
                getUserAvatar(thisUser)
              }
              className="avatar-chat"
              alt="avatar"
            ></img>
          </div>
        </div>
      </div>
    );
  } else if(counterUser?.id) {
    return (
      <div className="">
        <div className="flex items-end gap-3 mb-7">
          <div>
            <img
              src={
                getUserAvatar(counterUser.User)
              }
              className="avatar-chat"
              alt="avatar"
            ></img>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <div
                className="flex flex-col gap-3 p-3 rounded min-w-10 bg-main-color message-box"
                style={{ maxWidth: "70%" }}
              >
                {msg.deleted ? (
                  <h5
                    className="text-sm text-slate-500"
                    style={{ wordBreak: "break-word" }}
                  >
                    (This message has been deleted)
                  </h5>
                ) : (
                  <div className="flex flex-col gap-1">
                    {msg.MediaId ? (
                      <img
                        className="w-full img-chat"
                        src={msg.Medium.url}
                        alt="picture-chat"
                      ></img>
                    ) : (
                      ""
                    )}
                    <h5
                      className="text-white"
                      style={{ wordBreak: "break-word" }}
                    >
                      { content }{" "}
                      {msg.edited ? (
                        <span className="text-xs text-slate-500">(edited)</span>
                      ) : (
                        ""
                      )}
                    </h5>
                  </div>
                )}
                <div className="flex items-center justify-start gap-1">
                  <FontAwesomeIcon
                    className="text-xs text-gray-400"
                    icon="check"
                  />
                  <h6 className="text-xs text-gray-400">
                    {new Date(msg.updatedAt).toLocaleString("id-ID").slice(0,15).replace('.',':')}
                  </h6>
                </div>
              </div>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
                  <FontAwesomeIcon
                    className="text-sm text-gray-400 cursor-pointer"
                    icon="ellipsis-vertical"
                    aria-hidden="true"
                  />
                </Menu.Button>
                { !msg.deleted && <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg max-w-fit ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 bg-darker-gray">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="button"
                            onClick={() => translateMessage(
                              msg.content,
                              nativeLanguage.name
                            )}
                            className={classNames(
                              active
                                ? "bg-gray text-gray-300"
                                : "text-gray-400",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Translate
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              }
              </Menu>
            </div>
              <div className="text-gray-400">
                { counterUser.User.username }
              </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="">
        <div className="flex items-end gap-3 mb-7">
          <div>
            <img
              src={
                getUserAvatar(counterpartUser)
              }
              className="avatar-chat"
              alt="avatar"
            ></img>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <div
                className="flex flex-col gap-3 p-3 rounded min-w-10 bg-main-color message-box"
                style={{ maxWidth: "70%" }}
              >
                {msg.deleted ? (
                  <h5
                    className="text-sm text-slate-500"
                    style={{ wordBreak: "break-word" }}
                  >
                    (This message has been deleted)
                  </h5>
                ) : (
                  <div className="flex flex-col gap-1">
                    {msg.MediaId ? (
                      <img
                        className="w-full img-chat"
                        src={msg.Medium.url}
                        alt="picture-chat"
                      ></img>
                    ) : (
                      ""
                    )}
                    <h5
                      className="text-white"
                      style={{ wordBreak: "break-word" }}
                    >
                      { content }{" "}
                      {msg.edited ? (
                        <span className="text-xs text-slate-500">(edited)</span>
                      ) : (
                        ""
                      )}
                    </h5>
                  </div>
                )}
                <div className="flex items-center justify-start gap-1">
                  <FontAwesomeIcon
                    className="text-xs text-gray-400"
                    icon="check"
                  />
                  <h6 className="text-xs text-gray-400">
                    {new Date(msg.updatedAt).toLocaleString("id-ID").slice(0,15).replace('.',':')}
                  </h6>
                </div>
              </div>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
                  <FontAwesomeIcon
                    className="text-sm text-gray-400 cursor-pointer"
                    icon="ellipsis-vertical"
                    aria-hidden="true"
                  />
                </Menu.Button>
                { !msg.deleted && <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg max-w-fit ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 bg-darker-gray">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="button"
                            onClick={() => translateMessage(
                              msg.content,
                              nativeLanguage.name
                            )}
                            className={classNames(
                              active
                                ? "bg-gray text-gray-300"
                                : "text-gray-400",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Translate
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              }
              </Menu>
            </div>
            <div className="text-gray-400">{counterpartUser.username}</div>
          </div>
        </div>
      </div>
    );
  }
}
