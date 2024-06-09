import { description, name, version } from "../package.json";

const doc = {
  info: {
    version,
    title: name,
    description,
  },
  servers: [
    {
      url: "http://localhost:3333",
      description: "Documentacao de rotas api",
    },
  ],
  tags: [],
  components: {},
};
export default doc;
