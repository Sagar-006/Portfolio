import { education, experience } from "@/config/Hero";
import { Container } from "../common/Container";
import { Accordion } from "../Ui/accordion";
import { Heading } from "../Ui/Heading";
import { ExperienceCard } from "../common/ExperienceCard";

export function Education(){
    return (
      <Container className="border p-0 flex flex-col border-red-500  gap-y-8 pt-2 text-lg">
        <Heading className="px-3 border border-gray-300 py-0.5 text-sm className='text-gray-700'">
          EDUCATION
        </Heading>

        <Accordion type="single" collapsible className="flex flex-col gap-4 ">
          {education.map((m, index) => (
            <ExperienceCard key={index} experienceData={m} />
          ))}
        </Accordion>
      </Container>
    );
}