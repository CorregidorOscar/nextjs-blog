export const getAllPostsIds = async () => {
  try {
    const data = await getAllPost();
    return data.map((e: any) => ({ params: { id: `${e.id}` } }));
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getAllPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export const getPost = async (id: string) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
  } catch (e) {
    console.log(e);
    return {};
  }
};
