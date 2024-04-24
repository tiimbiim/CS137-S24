import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import ImageComp from "@/comps/ImageComp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

      <div className={styles.hline}>
        <ImageComp/>
        <h1>THE DAWN OF A NEW WAY TO STUDY</h1>
      </div>
  );
}
