import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";

const index: NextPage<{ data: any[] }> = ({ data }) => {
  return (
    <Layout>
      <h1>Lista de Blogs</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>
            <Link href={`/blog/${id}`}>
              <a>
                {" "}
                {id} - {title}
              </a>
            </Link>
          </h3>
          {/* <p>{body}</p> */}
        </div>
      ))}
    </Layout>
  );
};

export default index;

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    console.log(e);
  }
};
