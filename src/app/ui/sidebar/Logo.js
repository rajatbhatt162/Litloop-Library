import { SparklesIcon } from "@heroicons/react/24/solid";

const Logo = () => {
  return(
    <div className="flex items-center leading-none text-white">
      <div className="flex items-center justify-center bg-white rounded-full p-1 mr-2">
        <SparklesIcon className="w-8 h-8 text-purple-600" />
      </div>
      <div>
        <p className="text-2xl font-bold tracking-tight">LitLoop</p>
        <p className="text-xs opacity-80 -mt-1">Online Bookstore</p>
      </div>
    </div>
  )
}

export default Logo;