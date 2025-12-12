import { About } from "../Landing/About";
import { TechStack } from "../Landing/TechStack";
import { Skills } from "../Landing/Skills";
import { Experience } from "../Landing/Experience";
import Projects from "../Landing/Projects";
import { Education } from "../Landing/Education";

export function Right (){
    return (
      <div className="border min-h-screen border-blue-800  w-[600px]">
        {/* About */}
        <div className="w-full  border flex flex-col gap-y-4">
          <About />
          <Skills />
          <Experience />
          <TechStack />
          <Projects/>
          <Education/>
          
        </div>
      </div>
    );
}