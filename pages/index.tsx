import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anayata</title>
      </Head>

      <h1>Anayata</h1>
    </div>
  );
};

export default Home;
