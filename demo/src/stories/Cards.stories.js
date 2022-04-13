import Cards from "../components/mdp/cards/Cards";

// STORY DATA AND SUPPORT OBJECTS
// Example HTML Fragment for use in the header and footer
const data1 = [
	{
		title: "Program Revenue",
		value: 40000000,
		prefix: "$",
		key: "a",
		isUpward: true,
		cardBottomTitle: "Last Year",
		cardBottomValue: 3080000,
	},
	{
		title: "Web Traffic",
		value: 4420000,
		prefix: "$",
		key: "b",
		isUpward: false,
		cardBottomTitle: "Last Year",
		cardBottomValue: 4082000,
	},
	{
		title: "Outreach",
		value: 216000,
		key: "f",
		isUpward: true,
		cardBottomTitle: "Last Year",
		cardBottomValue: 200000,
	},
	{
		title: "Renewals",
		value: 152000,
		key: "ad",
		isUpward: false,
		cardBottomTitle: "Last Year",
		cardBottomValue: 1160000,
	},
];
const data2 = [
	{
		title: "Program Revenue!",
		value: 400900000,
		prefix: "$",
		key: "a",
		isUpward: true,
		cardBottomTitle: "Last Year",
		cardBottomValue: 30980000,
	},
	{
		title: "Web Traffic!",
		value: 4429000,
		prefix: "$",
		key: "b",
		isUpward: true,
		cardBottomTitle: "Last Year",
		cardBottomValue: 4092000,
	},
	{
		title: "Outreach!",
		value: 2169000,
		key: "c",
		isUpward: false,
		cardBottomTitle: "Last Year",
		cardBottomValue: 2090000,
	},
	{
		title: "Renewals!",
		value: 1529000,
		key: "d",
		isUpward: false,
		cardBottomTitle: "Last Year",
		cardBottomValue: 11690000,
	},
];
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "MDP/Cards/Cards",
	component: Cards,
}; // this is the story

const Template = (args) => <Cards {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// Create a function that returns our component ( button) and passes all ags to it

//STORY VERSIONS
// List different versions of the story below
export const Card = Template.bind({});
Card.args = {
	cardData: data1,
};

export const Ver2 = Template.bind({});
Ver2.args = {
	cardData: data2,
};
