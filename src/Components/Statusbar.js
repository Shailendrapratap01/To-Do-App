import React from "react";
import { MdOutlineWifi } from "react-icons/md";
import { LuSignal } from "react-icons/lu";
import { IoBatteryFullOutline } from "react-icons/io5";
import moment from "moment/moment";

function Statusbar() {
  return (
    <div className="d-flex justify-content-between align-items-center py-2 px-4">
      <div>{moment().format('HH:mm')}</div>
      <div className="fs-5 d-flex gap-1 align-items-center">
        <LuSignal className="fs-6" />
        <MdOutlineWifi />
        <IoBatteryFullOutline />
      </div>
    </div>
  );
}

export default Statusbar;
