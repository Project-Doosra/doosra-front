import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full md:max-w-[90vw] mx-auto h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden rounded-[0.5rem] mb-4 mt-2">
      <Image
        src="/assets/images/banner.tiff"
        alt="Fantasy Cricket"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        className="object-cover object-top"
        priority
      />
      <div className="absolute bottom-2 sm:bottom-3 w-full bg-[#074799] py-1 px-4 z-10">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <span className="text-base sm:text-lg text-white font-bold">
              Get Best Analysis!
            </span>
            <span className="text-base sm:text-lg text-white font-bold">
              Doosra
            </span>
          </div>
          <span className="text-xs sm:text-xs font-bold text-white">
            Win Big on Fantasy!
          </span>
        </div>
      </div>
    </div>
  );
}
