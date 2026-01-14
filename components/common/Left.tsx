'use client'
import Image from "next/image";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Button } from "../Ui/Button";
import { TbWorld } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import { AvailabilityBadge } from "../Ui/availabilityBadge";
import { TypeAnime } from "./TypeAnime";
import { SiReaddotcv } from "react-icons/si";
import { VscSend } from "react-icons/vsc";
import Link from "next/link";
import { Container } from "./Container";
import WorldIcon from '../Ui/world-icon'
import SendIcon from "../Ui/send-icon";
import { IoReorderThreeOutline } from "react-icons/io5";
import {useState} from 'react'
import { IoIosClose } from "react-icons/io";
// import { ContactDetails } from "../Ui/ContactDetails";
import {ContactInfo} from '../Ui/ContactInfo'



export function Left() {
  const [icon,setIcon] = useState<boolean>(false);
  return (
    <div className=" main sticky top-0 md:top-6  rounded-2xl w-full   md:w-50 h-auto md:h-48  tracking-tighter leading-tight flex flex-col  md:flex-col gap-y-1 md:gap-y-2 items-center">
      <div className="  first-child w-full md:h-auto h-[166px]  bg-white text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800 flex   md:flex-col gap-y-2.5 p-2  md:p-2 rounded-xl  border">
        <div className="md:h-auto min-h-[155px]   text-center  md:w-full flex px-1">
          <Image
            className="rounded-lg object-cover  w-full h-[155px]
      md:w-[180px] md:h-[193px]"
            src={"/Profile2.jpeg"}
            alt="Profile"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col gap-y-1 ">
          <div className="  gap-x-2 flex flex-row justify-between ">
            <h1 className="text-[22px] md:text-[24px]  px-1 font-semibold text-shadow-amber-50 ">
              Hello I'm <br /> <TypeAnime />
            </h1>
            <div
              className="  md:hidden  min-w-[32px] min-h-[32px] pl-2"
              onClick={() => setIcon((prev) => !prev)}
            >
              {icon ? (
                <IoIosClose className="text-2xl" />
              ) : (
                <IoReorderThreeOutline className="text-2xl" />
              )}
            </div>
          </div>

          <p className=" text-[16px] md:text-md px-1">
            Full stack developer <br /> & Web Designer.
          </p>
          <div className="w-[160px] md:w-full">
            <AvailabilityBadge />
          </div>
          <div className="flex item-center text-xs md:text-sm gap-x-1 px-1">
            <MdOutlineLocationOn /> <span>Pune,Maharashtra</span>
          </div>
        </div>
      </div>
      <div className={` w-full md:block ${icon ? "block" : "hidden"}`}>
        <ContactInfo />
      </div>
    </div>
  );
}
