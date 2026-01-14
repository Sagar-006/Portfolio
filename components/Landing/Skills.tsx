import { skills } from "@/config/Hero";
import { Container } from "../common/Container";
import { Heading } from "../Ui/Heading";

export function Skills (){
    return (
      <Container className=" p-0 flex flex-col gap-y-8 pt-2 text-lg">
        <Heading className="px-3 py-0.5 text-sm bg-gray-100 border text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800 ">
          SKILLS
        </Heading>
        <div className="flex gap-x-8 gap-y-4 text-xs md:text-sm flex-wrap  ">
          {skills.map((s, index) => (
            <Heading
              key={index}
              className="px-3 py-1.5  bg-white border text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 transition-all duration-100 ease-in-out cursor-grab"
            >
              {s.title}
            </Heading>
          ))}
        </div>
      </Container>
    );
}