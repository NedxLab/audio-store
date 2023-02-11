import Image from "next/image";
import headphone from "../assets/headphones/headphone.png";
import headphone1 from "../assets/headphones/headphone1.png";
import headphone2 from "../assets/headphones/headphone2.png";
import headphone3 from "../assets/headphones/headphone3.png";
import headphone4 from "../assets/headphones/headphone4.png";
import headphone5 from "../assets/headphones/headphone5.png";
import headphone6 from "../assets/headphones/headphone6.png";
import headphone7 from "../assets/headphones/headphone7.png";
import headphone8 from "../assets/headphones/headphone8.png";
import headphone9 from "../assets/headphones/headphone9.png";
import headphone10 from "../assets/headphones/headphone10.png";
import headphone11 from "../assets/headphones/headphone11.png";
import headphone12 from "../assets/headphones/headphone12.png";
import headphone13 from "../assets/headphones/headphone13.png";
import headphone14 from "../assets/headphones/headphone14.png";
import headphone15 from "../assets/headphones/headphone15.png";
import headphone16 from "../assets/headphones/headphone16.png";
import headphone17 from "../assets/headphones/headphone17.png";
import headphone18 from "../assets/headphones/headphone18.png";
import headphone19 from "../assets/headphones/headphone19.png";
import { AiOutlineHeart } from "react-icons/ai";
import Button from "./Button";

const Headphones = () => {
  const headphones = [
    {
      image: headphone,
      price: "$870",
      name: "Mexa IIFE",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone1,
      price: "$700",
      name: "Z29 Buca-sound",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone2,
      price: "$400",
      name: "H260 BE",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone3,
      price: "$3,500",
      name: "P29 Audio",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone4,
      price: "$500",
      name: "Double D2",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone5,
      price: "$1,000",
      name: "Triple D2",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone6,
      price: "$1,500",
      name: "M29 Bazz",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone7,
      price: "$2,900",
      name: "Triple Bazz",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone8,
      price: "$600",
      name: "Auto Mtune",
      desc: "The SteelSeries Arctis 9X are wireless gaming headphones that are compatible with Xbox One consoles. These comfortable over-ears have a neutral sound profile and a long 28-hour continuous battery life. However, their audio delivery isn't very consistent across different users.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone9,
      price: "$1,000",
      name: "Brainwavz Koel",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone10,
      price: "$900",
      name: "Pretty Koel",
      desc: "Brainwavz has been hard at work over the past year, having released the HM100 headphones, the BLU-300 Bluetooth earphones, and the Zeta budget earphones over the past 12 months. But we are reviewing none of those today – instead, we'll be taking a look at their latest release, the Koel..",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone11,
      price: "$1,800",
      name: "MEE Audio Pinnacle P2",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone12,
      price: "$1,920",
      name: "Black Tie Optional",
      desc: "Not too long ago, an earphone design arms race reached a fever pitch. This race challenged IEM designers to cram as many drivers (speaker units) as they could into a single earpiece. This resulted in such incredible earphones as the JH Audio JH16 (with 8 drivers per side) and the Noble Kaiser 10 (with 10 drivers per side). ",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone13,
      price: "$1,600",
      name: "JH Audio JH16",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone14,
      price: "$2,000",
      name: "KZ ZS10",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone15,
      price: "$1,200",
      name: "MEE Audio BTC1",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone16,
      price: "$5,000",
      name: "MEE Audio M6 PRO Generation 2",
      desc: "The MEE Audio M6 has grown quite a bit over the years. It started out as an affordable, sport-oriented earphone dubbed the Sport-Fi M6, which was later retooled and released as the M6 PRO, marketed for performers and musicians. The success of the M6 PRO eventually led to the release of the M7 PRO, a higher-end pro audio model with a hybrid two-driver design.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone17,
      price: "$1,000",
      name: "M12 Stereo",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone18,
      price: "$1,000",
      name: "Stereo Astro",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
    {
      image: headphone19,
      price: "$1,000",
      name: "JBL m17",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Speaker unit",
        "Speaker cloth panel",
        "User manual",
        "3.5mm 10m headphone jack",
        "10m optical cable",
      ],
    },
  ];
  return (
    <>
      <h1 className="text-center my-5 text-4xl font-bold underline uppercase">
        Home of Loud and Quality Headphones
      </h1>
      <section className="flex  flex-wrap space-6 space-y-6 w-full items-center justify-center mb-6">
        <h1 className="text-4xl font-bold px-5">
          Headphones for <br /> You!
        </h1>
        {headphones.map((item, i) => (
          <div
            className="flex flex-col justify-center items-center relative space-y-1"
            key={i}
          >
            <Image
              src={item.image}
              alt="headphones"
              className="w-[11rem] p-3 max-w-[11rem] min-w-[11rem] h-40 bg-[#d4d4d487] m-3 rounded-lg"
            />
            <AiOutlineHeart className="absolute z-10 top-[1.1rem] right-[1.1rem]" />
            <div className="flex flex-row space-x-7">
              <h2 className="capitalize text-sm font-bold">{item.name}</h2>
              <h4 className="text-sm">{item.price}</h4>
            </div>

            <small>{item.desc.slice(0, 25)}...</small>

            <Button
              link={"/headphones"}
              type={"primary"}
              className="rounded-2xl"
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </section>
    </>
  );
};
export default Headphones;
