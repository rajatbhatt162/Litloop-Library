import backgroundImage from "../../public/home/BgImg.png";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen">
      <Image
        className="blur-sm"
        src={backgroundImage}
        alt="Background"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />

      <div className="relative z-10 flex flex-col justify-center items-center bg-purple-100 rounded-md px-4 py-6 w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 max-w-md">
        <div className="flex items-center justify-center text-purple-800 text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 gap-2">
          <SparklesIcon className="w-8 h-8 sm:w-10 sm:h-10" />
          <p>Litloop Library</p>
        </div>
        <div
          className="bg-purple-700 text-white rounded-sm px-4 py-2 text-sm sm:text-base"
        >
          <Link href="/store">Check Store</Link>
        </div>
      </div>
    </div>
  );
}
