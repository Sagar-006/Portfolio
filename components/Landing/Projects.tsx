import { Container } from "../common/Container";
import { Heading } from "../Ui/Heading";
import { Accordion } from "../Ui/accordion";
import { projects } from "@/config/Hero";
import { ProjectCard } from "../common/ProjectCard";

export default function Projects() {
  return (
    <div className="  flex flex-col pb-2  gap-y-8 pt-2 text-sm md:text-lg ">
      <Heading className="px-3 border  py-0.5 text-sm bg-gray-100 text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800 ">
        PROJECTS
      </Heading>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col md:flex-wrap md:flex-row gap-4 ">
        {projects.map((p, index) => (
          <ProjectCard projectData={p} key={index} />
        ))}
      </Accordion>
    </div>
  );
}
