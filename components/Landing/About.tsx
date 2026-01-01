import { AnimatedThemeTogglerDemo } from "../common/AnimatedThemerTogglerDemo";
import { Container } from "../common/Container";
import { Heading } from "../Ui/Heading";

export function About() {
  return (
    <Container className=" p-0 flex flex-col  gap-y-8 pt-2 text-lg">
      <div className="flex  justify-between items-center">
        <Heading className="px-3 py-0.5 text-sm bg-gray-100 border text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800 ">
          ABOUT
        </Heading>

        <div className="cursor-pointer">
          <AnimatedThemeTogglerDemo />
        </div>
      </div>

      <p className="  text-black dark:bg-black dark:text-white  text-[16px] ">
        Hi,I'm Sagar Biradar, a Full Stack Web Developer . I build interactive
        web appliactions Using Typescript, React, NextJs and PostgreSQl, focusing on
        clean code, responsive design, and seamless user experiences.
      </p>
    </Container>
  );
}
