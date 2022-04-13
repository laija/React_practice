import PieChart from "../components/mdp/graphs/PieChart";

// Example data
const demoData = [
	{
		name: "Brand Awareness",
		value: 27,
	},
	{
		name: "Retention",
		value: 25,
	},
	{
		name: "Acquistion",
		value: 18,
	},
	{
		name: "Unallocated",
		value: 15,
	},
];

//EXAMPLE CONFIGURATIONS

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "MDP/Graphs/PieChart",
	component: PieChart,
	id: "PieChart",
}; // this is the base story

const Template = (args) => <PieChart {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// List different versions of the story below
export const BasicPieChart = Template.bind({});
BasicPieChart.args = {
	appendPadding: 10,
	data: demoData,
	width: 250,
	height: 250,
	angleField: "value",
	colorField: "name",
	radius: 0.9,
	label: {
		type: "spider",
		labelHeight: 28,
		content: "{name}\n{percentage}",
	},
	interactions: [
		{
			type: "element-active",
		},
	],
};

export const Donut = Template.bind({});
Donut.args = {
	appendPadding: 10,
	data: demoData,
	radius: 1,
	innerRadius: 0.6,
	angleField: "value",
	colorField: "name",
	label: {
		type: "inner",
		offset: "-50%",
		content: "{value}",
		style: {
			textAlign: "center",
			fontSize: 14,
		},
	},
	interactions: [
		{
			type: "element-selected",
		},
		{
			type: "element-active",
		},
	],
	statistic: {
		title: false,
		content: {
			style: {
				whiteSpace: "pre-wrap",
				overflow: "hidden",
				textOverflow: "ellipsis",
			},
			content: "AntV\nG2Plot",
		},
	},
};
