"use client";
import Image from "next/image";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Button } from "../Ui/Button";
import { TbWorld } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import { AvailabilityBadge } from "../Ui/availabilityBadge";
// import { TypeAnime } from "./TypeAnime";
import { SiReaddotcv } from "react-icons/si";
import { VscSend } from "react-icons/vsc";
import Link from "next/link";
// import { Container } from "./Container";
import WorldIcon from "../Ui/world-icon";
import SendIcon from "../Ui/send-icon";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
// import { ContactDetails } from "../Ui/ContactDetails";
// import { ContactInfo } from "../Ui/ContactInfo";

export function ContactInfo() {
  return (
    <div className="">
      <div className=" border bg-white dark:bg-black text-black dark:text-white border-gray-200 dark:border-gray-800 flex md:flex-col gap-y-2.5 px-2 py-2 w-full rounded-xl">
        <div className="text-xs md:text-sm flex flex-col gap-y-4 md:gap-y-1">
          <div className=" flex items-center gap-x-1 ">
            <WorldIcon className="w-4 h-4" />
            <Link href="https://sagarb.vercel.app/">
              <p>sagarb.com</p>
            </Link>
          </div>

          <div className="flex  items-center gap-x-1">
            <FiSmartphone />
            <p>9545431913</p>
          </div>

          <div className=" flex items-center gap-x-1">
            <AiOutlineMail className="shrink-0" />
            <p className="truncate">sagarbiradar7030@gmail.com</p>
          </div>
        </div>

        <div className=" flex flex-col items-center">
          <Link href="Sagar's.pdf" target="_blank">
            <Button size="lg">Resume / CV</Button>
          </Link>

          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
