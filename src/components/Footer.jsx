import Image from "next/image";
import logo from "../assets/headphones/headphone15.png";
import facebooksvg from "../assets/socials/facebook.svg";
import twittersvg from "../assets/socials/twitter.svg";
import instagramsvg from "../assets/socials/instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full bg-[#191919] text-white space-y-6 px-10 py-3">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center">
            {" "}
            <Image src={logo} alt="logo" className="w-28 h-auto" />{" "}
            <span className="text-4xl font-bold shadow-2xl opacity-[70.64%]">
              AudioPhone!
            </span>
          </div>

          <ul className="flex flex-row justify-between items-center space-x-14 font-extrabold uppercase opacity-[69.64%]">
            <li>Home</li>
            <li>Abouts Us</li>
            <li>Explore</li>
          </ul>
        </div>
        <div className="flex flex-row justify-between w-full items-center">
          <p className="max-w-[40vw] opacity-[49.64%]">
            Audiophone is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. <br />
            Come and visit our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex flex-row justify-center gap-5 opacity-[49.64%]">
            <Image src={facebooksvg} alt="facebook" className="bg-black" />
            <Image src={twittersvg} alt="twitter" />
            <Image src={instagramsvg} alt="instagram" />
          </div>
        </div>
        <div className="flex flex-col opacity-[80.64%] items-center">
          {new Date().getFullYear()} &copy; Copyright. All Rights Reserved.
          <div>
            With ❤️ from <a href="mailTo:odoc047@gmail.com">Nedxlab</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
