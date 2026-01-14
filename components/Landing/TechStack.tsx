"use client";

import Image from "next/image";
import { Container } from "../common/Container";
import { Heading } from "../Ui/Heading";
import { techstack } from "@/config/Hero";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function TechStack() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div className="p-0 flex flex-col gap-y-8 pt-2 text-lg">
      <Heading className="px-3 border bg-gray-100 text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800 py-0.5 text-sm">
        TECH STACK
      </Heading>

      <div className="flex justify-between items-center">
        {techstack.map((t, index) => (
          <div
            key={index}
            className="w-10 h-10 relative flex items-center justify-center"
          >
            <Image
              src={resolvedTheme === "dark" ? t.dark : t.light}
              alt={t.name}
              fill
              sizes="40px"
              className="object-contain transition-transform duration-300 ease-out hover:scale-110 cursor-grab"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
