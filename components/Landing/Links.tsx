"use client";

import { links, social } from "@/config/Hero";
import { Container } from "../common/Container";
import { Heading } from "../Ui/Heading";
import Link from "next/link";
import { useState } from "react";

export function Links() {
  const [activeName, setActiveName] = useState<string>("LINKS");
  return (
    <Container className=" p-0 flex flex-col  gap-y-4 pt-2 text-lg">
      <Heading className="px-3 border bg-gray-100  text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800  py-0.5 text-sm ">
        {activeName}
      </Heading>

      <div className=" flex justify-around gap-x-0 ">
        {social.map((l, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveName(l.name)}
            onMouseLeave={() => setActiveName("LINKS")}
            className="cursor-pointer  bg-white  text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800   w-[58px] flex items-center justify-center p-4 border rounded-md transition-transform duration-100  duration-300 ease-out hover:scale-110 hover:border-gray-300 dark:hover:border-gray-600"
          >
            <Link target="_blank" rel="noopener noreferrer" href={l.link}>
              {l.logo}
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
