import { Container } from "@/components/common/Container";
import { Left } from "@/components/common/Left";
import { Right } from "@/components/common/Right";

export default function Home() {
  return (
    <div className="w-full bg-gray-100 md:min-h-screen text-black dark:bg-black dark:text-white">
      <Container
        className="
          min-h-screen
          py-8
          pl-18
          flex
          flex-col md:flex-row
          gap-2
          bg-gray-100
          dark:bg-black
          border-gray-200
          dark:border-gray-800
           
        "
      >
        
        <div
          className="
            w-[370px] h-[166px] sticky top-0
            md:w-[230px]
            md:sticky
            md:top-10
          "
        >
          <Left />
        </div>

        
        <div className="flex-1 ">
          <Right />
        </div>
      </Container>
    </div>
  );
}
