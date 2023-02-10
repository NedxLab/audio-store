import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Merchandise from "@/components/Merchandise";
import About from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>AudioPhones!</title>
        <meta name="description" content="Listen better with your ears." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Categories />
      <Merchandise />
      <About />
    </>
  );
}
