import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar/NavBar";
// import Event from "./Components/EventPage/event";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Event /> */}
      <Head>
        <title>Verba Maximus 2024</title>
        <meta name="description" content="Official website for VM '24" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nosifer&display=swap"
        />
      </Head>
      <NavBar />
      <LandingPage />
    </div>
  );
}
