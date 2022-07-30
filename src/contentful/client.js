import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_PUBLISHED_ACC_TOKEN,
  host: process.env.REACT_APP_CONTENTFUL_HOST,
});
export default client;
