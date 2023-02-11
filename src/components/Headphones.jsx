import Image from "next/image";
import { headphones } from "@/data/headphones";
import { AiOutlineHeart } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/features/CartSlice";

const Headphones = () => {
  const dispatch = useDispatch();
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
              <h4 className="text-sm">${item.price}</h4>
            </div>

            <small>{item.desc.slice(0, 25)}...</small>

            <button
              onClick={() => {
                dispatch(addToCart(item.name));
              }}
              className=" p-1  text-[#191919] border-2 rounded-2xl border-[#191919] text-sm font-bold hover:bg-[#191919] hover:text-white"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </>
  );
};
export default Headphones;
