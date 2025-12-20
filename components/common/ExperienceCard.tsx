"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../Ui/accordion";
import { Card } from "../Ui/card";
import Image from "next/image";

type ExperienceData = {
  logo: string;
  title: string;
  role: string;
  date: string;
  description: string;
};

export function ExperienceCard({
  experienceData,
}: {
  experienceData: ExperienceData;
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={experienceData.title} className="border-none">
        {/* CARD */}
        <Card className="overflow-hidden rounded-xl    border-dashed bg-white border text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800">
          {/* TRIGGER */}
          <AccordionTrigger className="p-0 hover:no-underline [&>svg]:ml-1 cursor-pointer">
            <div className="flex h-[57px] w-full items-stretch">
              {/* LEFT STRIP */}
              <div className="flex w-[56] h-full items-center justify-center bg-blue-100">
                <Image
                  src={experienceData.logo}
                  alt={experienceData.title}
                  width={56}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex flex-1 items-center justify-between px-4 py-3">
                <div>
                  <p className="text-[16px] font-semibold ">
                    {experienceData.title}
                  </p>
                  <p className="text-sm ">{experienceData.role}</p>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-500 ">
                  <p className="whitespace-nowrap">{experienceData.date}</p>
                </div>
              </div>
            </div>
          </AccordionTrigger>

          {/* CONTENT */}
          <AccordionContent className="px-4 py-3 text-sm text-gray-600 leading-relaxed">
            {experienceData.description}
          </AccordionContent>
        </Card>
      </AccordionItem>
    </Accordion>
  );
}
