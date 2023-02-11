import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";

export default function Layout({ children }) {
  return (
    <>
      <Header className="font-sans" />
      <Cart />
      <main className="font-sans">{children}</main>
      <Footer className="font-sans" />
    </>
  );
}
