import { description, name, version } from "../package.json";

const doc = {
	info: {
		version, // by default: '1.0.0'
		title: name, // by default: 'REST API'
		description, // by default: ''
	},
	servers: [
		{
			url: "", // by default: 'http://localhost:3000'
			description: "", // by default: ''
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
