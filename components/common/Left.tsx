import Image from "next/image";
import { Heading } from "../Ui/Heading";
import { FaLocationDot } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Button } from "../Ui/Button";
import { TbWorld } from "react-icons/tb";

export function Left(){
    return (
      <div className="border-0 rounded-2xl  tracking-tighter leading-tight flex flex-col gap-y-2 items-center">
        <div className="bg-white flex flex-col gap-y-3 p-2  w-[230px] rounded-xl border ">
          <div className=" text-center  w-full flex px-1">
            <Image
              className="rounded-lg object-cover h-50"
              src={"/images/profile.avif"}
              alt="Profile"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-[24px] px-1 font-semibold text-shadow-amber-50">
            Hello I'm <br /> Sagar Biradar
          </h1>
          <p className="text-md px-1">
            Web Designer,Content <br /> Creator & writer.
          </p>
          <Heading className=" border text-gray-800 py-1 px-3 flex text-sm ">
            Available for work.
          </Heading>
          <div className="flex item-center text-sm gap-x-1 px-1">
            <FaLocationDot className="text-gray-600 " />{" "}
            <span>Pune,Maharashtra</span>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-y-3 px-2 py-2 w-[230px] rounded-xl h-[190px]">
          <div className="text-sm flex items-center gap-x-1">
            <TbWorld />
            <p>InstantDesign.com</p>
          </div>
          <div className="flex text-sm items-center gap-x-1">
            <FiSmartphone />
            <p>9545431913</p>
          </div>
          <div className="text-sm flex items-center gap-x-1">
            <AiOutlineMail />
            <p>sagarbiradar7030@gmail.com</p>
          </div>
          <div className="flex flex-col items-center border ">
            <Button
              variant={"default"}
              className="bg-white text-gray-800 border border-gray-300 hover:bg-white cursor-pointer w-46"
              size={"lg"}
            >
              Download CV
            </Button>
            <Button className="w-46" variant={"secondary"} size={"lg"}>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    );
}