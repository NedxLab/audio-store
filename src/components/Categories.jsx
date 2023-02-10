import Image from "next/image";
import React from "react";
import headphonePNG from "../assets/headphones/headphone.png";
import speakerPNG from "../assets/speakers/speaker.png";
import earphonePNG from "../assets/earphones/phone.png";
import Button from "./Button";

const Categories = () => {
  return (
    <section className="flex flex-row items-center justify-evenly">
      <h1 className="text-3xl uppercase font-extrabold">
        Shop from our available
        <br />
        list of products
      </h1>
      <div className="flex flex-col items-center">
        <Image src={headphonePNG} alt="headphones" className="w-48 h-auto" />{" "}
        <h1>Head phones</h1>
        <Button link={"/headphones"} type={"ternary"}>
          shop
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <Image src={speakerPNG} alt="headphones" className="w-48 h-auto" />{" "}
        <h1>Speakers</h1>
        <Button link={"/headphones"} type={"ternary"}>
          shop
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <Image src={earphonePNG} alt="headphones" className="w-48 h-auto" />{" "}
        <h1>Earphones</h1>
        <Button link={"/headphones"} type={"ternary"}>
          shop
        </Button>
      </div>
    </section>
  );
};
export default Categories;
