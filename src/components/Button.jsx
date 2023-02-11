import Image from "next/image";
import Link from "next/link";
import arrowSVG from "../assets/shared/desktop/icon-arrow-right.svg";

const Button = ({ link, type, children }) => {
  switch (type) {
    case "primary":
      return (
        <button className=" p-1  text-[#191919] border-2 rounded-2xl border-[#191919] text-sm font-bold hover:bg-[#191919] hover:text-white ">
          <Link href={!link === true ? "/" : link}>{children}</Link>
        </button>
      );
    case "secondary-1":
      return (
        <button className="h-[48px] w-[160px]  text-[#191919] border-2 border-[#191919] text-subtitle font-bold hover:bg-[#191919] hover:text-white uppercase">
          <Link href={!link === true ? "/" : link}>{children}</Link>
        </button>
      );
    case "secondary-2":
      return (
        <button className="h-[48px] w-[160px] bg-[#191919] text-white border-2 border-[#191919] text-subtitle font-bold hover:bg-[#ffffff] hover:text-[#191919] uppercase">
          <Link href={!link === true ? "/" : link}>{children}</Link>
        </button>
      );
    case "ternary":
      return (
        <div className="flex justify-between items-center w-[58px] h-[18px] font-bold text-subtitle text-black opacity-50 hover:text-[#D87D4A] hover:cursor-pointer ">
          <Link href={!link === true ? "/" : link}>{children}</Link>
          <Image src={arrowSVG} alt="arrow" />
        </div>
      );
  }
};

export default Button;
