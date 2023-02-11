import Image from "next/image";
import cart from "../assets/shared/desktop/icon-cart.svg";
import logo from "../assets/headphones/headphone12.png";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-around items-center">
        <div className="flex flex-row items-center">
          <Image src={logo} priority alt="Logo" className="w-10 h-auto" />
          <span className="p-2  text-lg font-bold shadow-2xl opacity-[70.64%]">
            AudioPhone!
          </span>
        </div>
        <ul className="uppercase opacity-[70.64%] text-base flex flex-row justify-between items-center space-x-14 font-bold">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/aboutus"}>Abouts Us</Link>
          </li>
          <li>
            <Link href={"/explore"}>Explore</Link>
          </li>
        </ul>
        <Image src={cart} alt="Cart" />
      </div>
      <hr />
    </>
  );
};

export default Header;
