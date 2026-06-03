import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Viktor = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-1 justify-center">
      <div className="flex flex-col justify-center items-center">
        <p className="flex my-2.5 bg-gray-900/40 justify-center items-center text-lg text-bold w-50 text-center h-10 rounded-2xl">
          viktor_srhk
        </p>
        <div className="relative h-32 w-32">
          <Image
            src="/logo.webp"
            alt="Photo of viktor_srhk"
            fill
            className="rounded-full"
          />
        </div>
        <div className="grid grid-row-3 gap-1 h-1 w-full mt-1 opacity-35">
          <hr className="h-px w-full max-w-20 justify-self-center" />
          <hr className="h-px w-full max-w-15 justify-self-center" />
          <hr className="h-px w-full max-w-10 justify-self-center" />
        </div>
      </div>
      <Link
        href="https://instagram.com/viktor_srhk"
        className="justify-self-center h-fit w-fit scale-100 opacity-80 transition-all ease-in hover:opacity-100 hover:scale-105 mt-9"
        target="_blank"
        hrefLang="en"
      >
        <div className="flex justify-center items-center m-2 border rounded-xl w-fit border-white/10 p-3 space-x-2 max-h-8">
          <FaInstagram />
          <span className="text-gray-500">@viktor_srhk</span>
        </div>
      </Link>
    </div>
  );
};

export default Viktor;
