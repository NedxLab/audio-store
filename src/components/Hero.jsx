import Image from "next/image";
import hero from "../assets/headphones/headphone1.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-row p-7 items-center font-sans">
      <div className="flex flex-col items-center space-y-5 min-w-[37vw]">
        <p className="opacity-[49.64%] text-left font-semibold w-full uppercase">
          new product
        </p>
        <h1 className="text-5xl leading-[3rem] tracking-[1.29px] font-extrabold uppercase mb-7">
          xx99 mark II headphones
        </h1>
        <p className=" font-medium opacity-75 mb-7">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast
        </p>
        <div className="float-left w-full">
          <Button
            link={"/headphones/xx99-mark-two-headphones"}
            type={"secondary-1"}
          >
            see product
          </Button>
        </div>
      </div>
      <Image src={hero} alt="HeadPhones" />
    </div>
  );
};

export default Hero;
