import "@/styles/globals.css";
import "@/styles/main.css";
import Layout from "@/components/Layout";
import { store } from "@/store/Store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
