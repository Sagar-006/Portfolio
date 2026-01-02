import Image from "next/image";

type SkillBadgeProps = {
  title: string;
  logo: string;
};

export function SkillBadge({ title, logo }: SkillBadgeProps) {
  return (
    <div
      className="
        inline-flex items-center gap-x-2
        px-3 py-1.5
        border border-gray-300 dark:border-gray-700
        rounded-lg
        bg-white dark:bg-black
        text-black dark:text-white
        text-sm font-medium
      "
    >
      <Image
        src={logo}
        alt={title}
        width={20}
        height={20}
        className="object-contain"
      />
      <span>{title}</span>
    </div>
  );
}
