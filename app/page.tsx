import { Container } from "@/components/common/Container";
import { Left } from "@/components/common/Left";
import { Right } from "@/components/common/Right";

export default function Home() {
  return (
    <div className="w-full md:flex md:justify-center md:m-2  bg-gray-100 md:min-h-screen border  text-black dark:bg-black dark:text-white border-blue-800 ">
      <Container
        className="
        
        w-full
    md:mx-auto
    md:max-w-4xl
    px-4 sm:px-6
    min-h-screen
    py-4 md:py-8
    flex
    flex-col md:flex-row
    md:gap-6
    md:pl-16
    
           
        "
      >
        <div className=" flex-1 sticky top-0 md:top-0 z-20">
          <Left />
        </div>

        <div className="flex-1">
          <Right />
        </div>
      </Container>
    </div>
  );
}
