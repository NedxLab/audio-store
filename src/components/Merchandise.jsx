import Image from "next/image";
import headphone from "../assets/headphones/headphone4.png";
import speaker from "../assets/speakers/speaker1.png";
import earphone from "../assets/earphones/phone2.png";
import Button from "./Button";

const Merchandise = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row items-center justify-center">
        <Image
          src={speaker}
          alt="speaker"
          className="p-7 max-w-[55vw] h-auto"
        />
        <div className="flex flex-col items-center text-left p-10">
          <h1 className="uppercase text-5xl leading-[3rem] tracking-[1.29px] font-extrabold mb-7 w-full">
            ZX9 SPEAKER
          </h1>
          <p className="mb-4">
            Like nothing you've heard before. Depth, detail and delight. Dialled
            up beyond expectation.
            <br /> This is, quite simply, our finest headphone experience.{" "}
            <br /> Upgrade to premium speakers that are phenomenally built to
            deliver truly remarkable sound.
          </p>{" "}
          <div className="float-left w-full">
            <Button link={"/earphones/yx1-earphones"} type={"secondary-1"}>
              see product
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center">
        <Image
          src={headphone}
          alt="headphones"
          className="p-7 max-w-[45vw] h-auto"
        />
        <div className="flex flex-col items-center text-left p-10">
          <h1 className="uppercase text-5xl leading-[3rem] tracking-[1.29px] font-extrabold mb-7 w-full">
            WF-1000XM4 HeadPhones
          </h1>
          <p className="mb-4">
            Moving, masterful, mesmerising. Get lost in your music with
            adjustable noise-cancelling headphones that redefine grab-and-go
            listening.
            <br /> Upgrade to premium Head-Phones that are phenomenally built to
            deliver truly remarkable sound.
          </p>{" "}
          <div className="float-left w-full">
            <Button link={"/earphones/yx1-earphones"} type={"secondary-1"}>
              see product
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Image
          src={earphone}
          alt="headphones"
          className="p-7 max-w-[45vw] h-auto"
        />
        <div className="flex flex-col items-center text-left p-10">
          <h1 className="uppercase text-5xl leading-[3rem] tracking-[1.29px] font-extrabold mb-7 w-full">
            SenClaire IE 900
          </h1>
          <p className="mb-4">
            A brilliant pair of cheap in-ear headphones, offering excellent
            value for money. <br />
            Sensational in-ear headphones with excellent noise-cancelling and
            Bluetooth connectivity. <br />
            You'll struggle to find a better pair of wired in-ear headphones at
            this price.
          </p>{" "}
          <div className="float-left w-full">
            <Button link={"/earphones/yx1-earphones"} type={"secondary-1"}>
              see product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
