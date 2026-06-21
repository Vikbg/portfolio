import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { getImagePath } from "@/lib/paths";

const Viktor = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-bold my-2.5 flex h-10 w-50 items-center justify-center rounded-2xl bg-gray-900/40 text-center text-lg">
          viktor_srhk
        </p>
        <div className="relative h-32 w-32">
          <Image
            src={getImagePath("/logo.webp")}
            alt="Photo of viktor_srhk"
            fill
            className="rounded-full"
          />
        </div>
        <div className="grid-row-3 mt-1 grid h-1 w-full gap-1 opacity-35">
          <hr className="h-px w-full max-w-20 justify-self-center" />
          <hr className="h-px w-full max-w-15 justify-self-center" />
          <hr className="h-px w-full max-w-10 justify-self-center" />
        </div>
      </div>
      <Link
        href="https://instagram.com/viktor_srhk"
        className="mt-9 h-fit w-fit scale-100 justify-self-center opacity-80 transition-all ease-in hover:scale-105 hover:opacity-100"
        target="_blank"
        hrefLang="en"
      >
        <div className="m-2 flex max-h-8 w-fit items-center justify-center space-x-2 rounded-xl border border-white/10 p-3">
          <FaInstagram />
          <span className="text-gray-500">@viktor_srhk</span>
        </div>
      </Link>
    </div>
  );
};

export default Viktor;
