import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

const Home: NextPage = () => {
  return (
    <Layout
      title="Home | Next.js"
      description="Esta es la descripcion del home"
      home
    >
      <section className={utilStyles.headingMd}>
        <p>Hi, i am Oscar Web Developer</p>
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
    </Layout>
  );
};

export default Home;
