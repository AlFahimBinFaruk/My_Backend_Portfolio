import client from "./client";

const getContent = async (contentId) => {
  const response = await client.getEntry(contentId)
  return response.fields;
};

export default getContent;
