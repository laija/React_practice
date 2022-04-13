import Cascaders from "../components/mdp/dataDisplay/Cascaders";

const options = [
	{
		value: "New York City",
		label: "New York City",
		children: [
			{
				value: "Manhattan",
				label: "Manhattan",
				children: [
					{
						value: "UWS",
						label: "66th - Lincoln St",
					},
				],
			},
		],
	},
	{
		value: "Brooklyn",
		label: "Brooklyn",
		children: [
			{
				value: "Williamsburg",
				label: "Williamsburg",
				children: [
					{
						value: "Allen St",
						label: "William St",
					},
				],
			},
		],
	},
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "MDP/DataDisplay/Cascaders",
	component: Cascaders,
	argTypes: {
		cascaderSize: {
			options: ["large", "small"],
			control: { type: "inline-radio" },
		},
	},
}; // this is the story

const Template = (args) => <Cascaders {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// Create a function that returns our component ( button) and passes all ags to it

//STORY VERSIONS
// List different versions of the story below
export const BasicCascader = Template.bind({});
BasicCascader.args = {
	options: options,
};
