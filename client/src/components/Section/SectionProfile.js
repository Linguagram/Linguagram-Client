import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapsible from "react-collapsible";
import avatar from "../../pictures/avatar-1.3921191a8acf79d3e907.jpg";

export default function SectionProfile() {
  return (
    <>
      <div className="flex justify-between mb-8 text-white">
        <div className="text-xl text-white">My Profile</div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <img src={avatar} id="avatar-profile" alt="avatar"></img>
        <div className="flex flex-col items-center">
          <div className="text-white">Patricia Smith</div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon className="status-icon" icon="circle-dot" />
            <div className="text-sm text-gray-400">Active</div>
          </div>
        </div>
      </div>

      <hr className="mt-10 mb-5 line-break" />

      <div className="flex flex-col w-full h-full gap-2 overflow-y-auto scrollbar-hide">
        <div className="text-sm text-gray-400">
          If several languages coalesce, the grammar of the resulting language
          is more simple and regular than that of the individual.
        </div>

        <div className="text-sm text-white mt-7">
          <Collapsible
            className="w-full"
            triggerClassName="triggerCollapsible"
            triggerOpenedClassName="triggerCollapsible"
            openedClassName="bg-black-blue"
            contentInnerClassName="p-3"
            trigger={["About", <FontAwesomeIcon icon="caret-right" />]}
          >
            <div className="flex flex-col gap-5 p-2">
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Name</p>
                <p className="font-bold">Patricia Smith</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Email</p>
                <p className="font-bold">patty@mail.com</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Native Language</p>
                <p className="font-bold">English</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Country</p>
                <p className="font-bold">USA</p>
              </div>
            </div>
          </Collapsible>
        </div>
      </div>
    </>
  );
}
