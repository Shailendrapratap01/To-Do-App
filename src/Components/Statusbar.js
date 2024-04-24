import React from "react";
import { MdOutlineWifi } from "react-icons/md";
import { LuSignal } from "react-icons/lu";
import { IoBatteryFullOutline } from "react-icons/io5";

function Statusbar() {
  function getTimeString() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    var timeString = hours + ":" + minutes;
    return timeString;
  }
  var currentTime = getTimeString();
  return (
    <div className="d-flex justify-content-between align-items-center py-2 px-4 bg-light">
      <div>{currentTime}</div>
      <div className="fs-5 d-flex gap-1 align-items-center">
        <LuSignal className="fs-6" />
        <MdOutlineWifi />
        <IoBatteryFullOutline />
      </div>
    </div>
  );
}

export default Statusbar;
