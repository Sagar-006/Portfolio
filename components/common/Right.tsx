"use client";
import { About } from "../Landing/About";
import { TechStack } from "../Landing/TechStack";
import { Skills } from "../Landing/Skills";
import { Experience } from "../Landing/Experience";
import Projects from "../Landing/Projects";
import { Education } from "../Landing/Education";
import { Links } from "../Landing/Links";
import { Quote } from "../Landing/Quote";
import { motion } from "framer-motion";


const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport: { once: false, amount: 0.1 },
};


export function Right() {
  return (
    <div className="flex-1">
      <div className="min-h-screen w-[600px]">
        <div className="w-full flex flex-col gap-y-4">
          <motion.section {...reveal}>
            <About />
          </motion.section>

          <motion.section {...reveal}>
            <Skills />
          </motion.section>

          <motion.section {...reveal}>
            <Experience />
          </motion.section>

          <motion.section {...reveal}>
            <TechStack />
          </motion.section>

          <motion.section {...reveal}>
            <Projects />
          </motion.section>

          <motion.section {...reveal}>
            <Education />
          </motion.section>

          <motion.section {...reveal}>
            <Links />
          </motion.section>

          <motion.section {...reveal}>
            <Quote />
          </motion.section>
          {/* <motion.section {...reveal}>
            <Cpage />
          </motion.section> */}
        </div>
      </div>
    </div>
  );
}
