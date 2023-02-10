import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header className="font-sans" />
      <main className="font-sans">{children}</main>
      <Footer className="font-sans" />
    </>
  );
}
