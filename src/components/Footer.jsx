import Image from "next/image";
import logo from "../assets/headphones/headphone15.png";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <Image src={logo} alt="logo" className="w-28 h-auto" />{" "}
          <ul className="flex flex-row justify-between items-center space-x-14 font-extrabold">
            <li>Home</li>
            <li>Abouts Us</li>
            <li>Explore</li>
          </ul>
        </div>
        <div className="flex flex-row justify-between items-center"></div>
        <div className="flex flex-row justify-between items-center"></div>
      </div>
    </>
  );
};

export default Footer;
