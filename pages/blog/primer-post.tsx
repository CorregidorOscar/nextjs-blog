import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/Layout";

const PrimerPost = () => {
  return (
    <Layout title="Mi primer post" description="Descripcion de primer post">
      <h1>Primer Post</h1>
      <Image src="/img/1.jpg" width={600} height={600} alt="image" />
      <Link href="/">
        <a>Volver al inicio</a>
      </Link>
    </Layout>
  );
};

export default PrimerPost;
