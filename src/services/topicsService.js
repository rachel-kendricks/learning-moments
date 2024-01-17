export const getAllTopics = async () => {
  const topics = await fetch("http://localhost:8088/topics?_embed=posts").then(
    (response) => response.json()
  );
  return topics;
};
