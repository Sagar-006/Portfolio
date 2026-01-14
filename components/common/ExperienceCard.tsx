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
            <div className="border  flex flex-row h-[56px] w-full items-stretch">
              {/* LEFT STRIP */}

              {/* RIGHT CONTENT */}
              <div className="border  w-full h-full flex flex-1 flex-col gap-1 px-4 py-3 md:flex-row md:items-center ">
                <div className="flex w-[48px] md:w-[56] h-full items-center justify-center bg-blue-100">
                  <Image
                    src={experienceData.logo}
                    alt={experienceData.title}
                    width={54}
                    height={40}
                    className="object-contain h-full w-auto"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm md:text-[16px] font-semibold">
                    {experienceData.title}
                  </p>
                  <p className="text-sm text-gray-600">{experienceData.role}</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 md:text-sm md:whitespace-nowrap flex items-center">
                <p>{experienceData.date}</p>
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
