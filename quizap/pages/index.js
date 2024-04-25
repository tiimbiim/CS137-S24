import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import ImageComp from "@/comps/ImageComp";
import ThreeImageSpread from "@/comps/ThreeImageSpread";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

      <div>
        <ImageComp/>
        <h1 className={styles.landingSubtitle}>Make Studying a Game</h1>
        <ThreeImageSpread/>
        <button className={styles.button} type="button">Try it now</button>
      </div>
  );
}
