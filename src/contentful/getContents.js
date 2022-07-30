import client from "./client";

const getContents = async (content_type) => {
  const response = await client.getEntries({
    content_type,
  });
  return response.items;
};

export default getContents;
