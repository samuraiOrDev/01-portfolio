import React, { FC } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
interface Props {
  date: string;
  time: string;
}
export const ComponentDate: FC<Props> = ({ date, time }) => {
  return (
    <div className=" flex items-center justify-start gap-2">
      <div className="flex items-center justify-center gap-2 text-yellow-600">
        <BsCalendarDate />
        {date}
      </div>
      <div className="flex items-center justify-center gap-2 text-yellow-600">
        <IoTimeOutline />
        {time}
      </div>
    </div>
  );
};
