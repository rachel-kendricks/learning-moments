// http://localhost:8088/posts?_embed=likes&_expand=user&_expand=topic

export const getAllPosts = async () => {
  const allPosts = await fetch(
    "http://localhost:8088/posts?_embed=likes&_expand=user&_expand=topic"
  ).then((response) => response.json());
  return allPosts;
};
