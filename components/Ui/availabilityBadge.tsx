export function AvailabilityBadge() {
  return (
    <div
      className="w-full 
        inline-flex items-center gap-2
        px-2 py-1
        rounded-lg
        
        border border-gray-200 dark:border-gray-800
        bg-white dark:bg-black
        md:text-sm text-xs  text-gray-700 dark:text-gray-300
      "
    >
      {/* Green animated dot */}
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500 " />
      </span>
      Available for work
    </div>
  );
}
