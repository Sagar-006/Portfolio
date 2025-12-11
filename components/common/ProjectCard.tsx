import Image from "next/image";
import { BorderBeam } from "../Ui/border-beam";
import { Heading } from "../Ui/Heading";
import Link from "next/link";

type projectData = {
  projectname: string;
  image: string;
  link: string;
  github: string;
  description: string;
  technologies: React.ReactNode[];
};

export function ProjectCard({ projectData }: { projectData: projectData }) {
  return (
    <div className="relative w-[280px] h-[350px] bg-white rounded-xl p-4">
      <BorderBeam className="rounded-xl" duration={4} size={200} />

      <div className="flex flex-col gap-y-2 relative z-10">
        {/* IMAGE */}
        <div className="w-full h-[120px] border border-red-500">
          <Image
            src={projectData.image}
            alt={projectData.projectname}
            width={300}
            height={200}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* TEXT */}
        <h1 className="font-semibold">{projectData.projectname}</h1>

        <p className="text-sm">{projectData.description}</p>

        <Link href={projectData.link}>
          <Heading className="px-3 border border-gray-300 py-0.5 text-sm text-gray-700">
            Click here
          </Heading>
        </Link>

        {/* TECHNOLOGIES */}
        <div>
          <p className="text-sm">Technologies</p>

          <div className="flex gap-2">
            {projectData.technologies.map((TechIcon, index) => (
              <span key={index}>{TechIcon}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
