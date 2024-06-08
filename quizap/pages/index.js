import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/LoginNavbar";
import Footer from "@/comps/Footer";
import ImageComp from "@/comps/ImageComp";
import ThreeImageSpread from "@/comps/ThreeImageSpread";
import LoginNavbar from "@/comps/LoginNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div className="main">
        <LoginNavbar />
        <ImageComp/>
        <h1 className={styles.landingSubtitle}>Make Studying a Game</h1>
        <ThreeImageSpread/>
        <a href="/login"><button className={styles.button} type="button">Try it now</button></a>
        <Footer />
      </div>
  );
}

