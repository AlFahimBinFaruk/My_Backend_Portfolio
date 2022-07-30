import * as contentful from "contentful";

const client = contentful.createClient({
  space: "d2buf511rn5e",
  accessToken: "rVjWmsegZdSM_KMZeUhGH4jpecN6qhARWum4joxnBC8",
  host: "cdn.contentful.com",
});
export default client;
