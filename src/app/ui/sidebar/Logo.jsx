import { SparklesIcon } from "@heroicons/react/24/solid";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-purple-700 font-bold text-xl">
      <SparklesIcon className="w-8 h-8 sm:w-10 sm:h-10" />
      <p className="tracking-tight">Litloop</p>
    </div>
  );
};

export default Logo;
