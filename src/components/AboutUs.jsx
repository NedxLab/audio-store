import Image from "next/image";
import man from "../assets/listen.png";

const About = () => {
  return (
    <div className="flex flex-row-reverse items-center justify-center">
      <Image src={man} alt="headphones" className="p-7 max-w-[50vw] h-auto" />
      <div className="flex flex-col items-center text-left p-10">
        <h1 className="uppercase text-5xl leading-[3rem] tracking-[1.29px] font-extrabold mb-7 w-full">
          BRINGING YOU THE BEST AUDIO GEAR
        </h1>
        <p className="mb-4">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.{" "}
          <br />
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products.
          <br />
          Stop by our store to meet some of the fantastic people who make
          Audiophile the best place to buy your portable audio equipment.
        </p>{" "}
      </div>
    </div>
  );
};

export default About;
