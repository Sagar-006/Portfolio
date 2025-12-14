"use client";
import {
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
    <AccordionItem value={experienceData.title} className="border-none">
      <Card className="rounded-xl border border-dashed border-gray-200 shadow-sm bg-white">
        <AccordionTrigger className="flex items-center border border-red-500 p-4 cursor-pointer">
          {/* LEFT SIDE */}
          <Image
            src={experienceData.logo}
            alt={experienceData.title}
            width={40}
            height={40}
            className="rounded-md  border border-red-500 "
          />
          <div className="flex items-center gap-3  border border-red-500">
            <div>
              <p className="font-semibold text-gray-900 text-[16px]">
                {experienceData.title}
              </p>
              <p className="text-sm text-gray-500 whitespace-nowrap">
                {experienceData.role}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE (DATE + CHEVRON CLOSE) */}
          <div className="ml-auto flex items-center gap-2">
            <p className="text-[12px] text-gray-600 whitespace-nowrap">
              {experienceData.date}
            </p>
            {/* Chevron icon is automatically rendered by AccordionTrigger */}
          </div>
        </AccordionTrigger>

        <AccordionContent className="p-4 pt-0 text-[14px] text-gray-600 leading-relaxed">
          {experienceData.description}
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
