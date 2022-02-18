import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import Layout from "../../components/Layout";
import { getAllPostsIds, getPost } from "../../lib/posts";

interface IData {
  id: number;
  title: string;
  body: string;
}
interface IProps {
  data: IData;
}
const Post: NextPage<IProps> = ({ data }) => {
  return (
    <Layout>
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
    </Layout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getAllPostsIds(),
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;

  return {
    props: { data: await getPost(id) },
  };
};
