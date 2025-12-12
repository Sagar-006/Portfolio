import Image from "next/image";
import { Container } from "../common/Container";
import { Heading } from "../Ui/Heading";

export function TechStack() {
  return (
    <Container className="border p-0 flex flex-col gap-y-8 pt-2 text-lg">
      <Heading className="px-3 border border-gray-300 py-0.5 text-sm">
        TECH STACK
      </Heading>

      <div className=" flex justify-between ">
        <Image src="/nextjs.svg" alt="React" width={40} height={40} />
        <Image src="/tailwind.svg" alt="React" width={40} height={40} />
        <Image src="/TS.png" alt="React" width={40} height={40} />
        <Image src="/postgresql.svg" alt="React" width={40} height={40} />
        <Image src="/Figma-logo.svg" alt="React" width={25} height={25} />
        <Image src="/nodejs-icon.svg" alt="React" width={40} height={40} />
      </div>
    </Container>
  );
}
