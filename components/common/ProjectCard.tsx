import Image from "next/image";
import { BorderBeam } from "../Ui/border-beam";
import { Heading } from "../Ui/Heading";
import Link from "next/link";
import { FiLink, FiGithub } from "react-icons/fi";


type projectData = {
  projectname: string;
  image: string;
  link: string;
  github: string;
  description: string;
  technologies: string[];
};

export function ProjectCard({ projectData }: { projectData: projectData }) {
  return (
    <div className="relative w-[280px] h-[350px] bg-white rounded-xl p-4">
      <BorderBeam className="rounded-xl" duration={4} size={200} />

      <div className="flex flex-col gap-y-2 relative z-10">
        {/* IMAGE */}
        <div className="w-full h-[120px] border ">
          <Image
            src={projectData.image}
            alt={projectData.projectname}
            width={300}
            height={200}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* TEXT */}
        <div className="flex border  items-center justify-between">
          <h1 className="font-semibold text-[20px] text-black">
            {projectData.projectname}
          </h1>
          <div className="flex gap-x-2 mr-4">
            <Link href={projectData.link}>
              <FiLink />
            </Link>
            <Link href={projectData.link}>
              <FiGithub />
            </Link>
          </div>
        </div>
        <p className="text-[16px] tracking-tight leading-tight text-gray-600">
          {projectData.description}
        </p>

        {/* <Link href={projectData.link} className="flex">
          <Heading className="px-3 border flex items-center gap-x-2 border-gray-300 py-0.5 text-sm text-gray-700">
            Live <span className="text-xs"></span>
          </Heading>
        </Link> */}

        {/* TECHNOLOGIES */}
        <div className="flex flex-col gap-y-2">
          <p className="text-[14px] text-gray-600">Technologies</p>

          <div className="flex gap-x-4">
            {projectData.technologies.map((TechIcon, index) => (
              <Image
                key={index}
                src={TechIcon}
                alt="Tech icon"
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
