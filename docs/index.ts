import { description, name, version } from "../package.json";

const doc = {
	info: {
		version, // by default: '1.0.0'
		title: name, // by default: 'REST API'
		description, // by default: ''
	},
	servers: [
		{
			url: "http://localhost:3333",
			description: "Documentacao de rotas api",
		},
		// { ... }
	],
	tags: [
		// by default: empty Array
		{
			name: "", // Tag name
			description: "", // Tag description
		},
		// { ... }
	],
	components: {},
};
export default doc;
