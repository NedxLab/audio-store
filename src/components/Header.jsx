import Image from "next/image";
import cart from "../assets/shared/desktop/icon-cart.svg";
import logo from "../assets/headphones/headphone15.png";

const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-around items-center">
        <Image src={logo} priority alt="Logo" className="w-10 h-auto" />

        <ul className="flex flex-row justify-between items-center space-x-14 font-extrabold">
          <li>Home</li>
          <li>Abouts Us</li>
          <li>Explore</li>
        </ul>
        <Image src={cart} alt="Cart" />
      </div>
      <hr />
    </>
  );
};

export default Header;
