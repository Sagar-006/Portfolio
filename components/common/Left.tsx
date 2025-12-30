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

export function Left() {
  return (
    <Container>
      <div className="border-0 rounded-2xl w-[200px] h-[400px]  tracking-tighter leading-tight flex flex-col gap-y-2 items-center">
        <div className=" bg-white text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800 flex flex-col gap-y-2.5 p-2  rounded-xl border ">
          <div className=" text-center  w-full flex px-1">
            <Image
              className="rounded-lg object-cover h-50"
              src={"/images/profile.avif"}
              alt="Profile"
              width={200}
              height={200}
            />
          </div>
          <div>
            <h1 className="text-[24px] px-1 font-semibold text-shadow-amber-50 ">
              Hello I'm <br /> <TypeAnime />
            </h1>
          </div>

          <p className="text-md px-1">
            Full stack developer <br /> & Web Designer.
          </p>
          <div>
            <AvailabilityBadge />
          </div>
          <div className="flex item-center text-sm gap-x-1 px-1">
            <MdOutlineLocationOn /> <span>Pune,Maharashtra</span>
          </div>
        </div>
        <div className=" border  bg-white text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800 flex flex-col gap-y-2.5 px-2 py-2 w-full rounded-xl ">
          <div className="text-sm flex items-center gap-x-1">
            <TbWorld />
            <p className="weight-">InstantDesign.com</p>
          </div>
          <div className="flex text-sm items-center gap-x-1">
            <FiSmartphone />
            <p>9545431913</p>
          </div>
          <div className="text-sm flex items-center gap-x-1">
            <AiOutlineMail className="shrink-0" />
            <p className="truncate">sagarbiradar7030@gmail.com</p>
          </div>
          <div className="flex flex-col items-center  ">
            <div>
              <Link
                href="sagar_resume_01.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={"default"}
                  className="bg-white inline-flex items-center gap-x-1 hover:bg-white border text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800 cursor-pointer w-46"
                  size={"lg"}
                >
                  <SiReaddotcv />
                  Resume / CV
                </Button>
              </Link>
            </div>
            <div rel="noopener noreferrer">
              <Link href={"/contact"}>
                <Button
                  className="w-46 inline-flex gap-x-0.5  items-center bg-black text-white hover:bg-gray-800 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
                  variant={"secondary"}
                  size={"lg"}
                >
                  <VscSend className="rotate-320" />
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
