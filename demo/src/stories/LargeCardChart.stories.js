import LargeCardChart from "../components/mdp/graphs/LargeCardChart";

// Example data
const data = [
	{
		name: "Week 1",
		revenue: 4500,
	},
	{
		name: "Week 2",
		revenue: 2800,
	},
	{
		name: "Week 3",
		revenue: 3000,
	},
	{
		name: "Week 4",
		revenue: 4250,
	},
	{
		name: "Week 5",
		revenue: 4500,
	},
	{
		name: "Week 6",
		revenue: 7500,
	},
	{
		name: "Week 7",
		revenue: 4750,
	},
	{
		name: "Week 9",
		revenue: 8720,
	},
];

export default {
	title: "MDP/Graphs/LargeCardChart",
	component: LargeCardChart,
	id: "LargeCardChart",
	parameters: {
		docs: {
			description: {
				component: `Use a column to display the numeric value of the dimension. The horizontal axis shows the categorical dimension, and the vertical axis shows the corresponding value.`,
			},
		},
	},
};

const Template = (args) => <LargeCardChart {...args} />; // Create a function that returns our component ( button) and passes all ags to it

export const BasicLargeCardChart = Template.bind({});
BasicLargeCardChart.args = {
	cardData: data,
	cardName: "Chart in Large Card",
	xField: "name",
	yField: "revenue",
	smooth: true,
	startOnZero: false,
	color: "#81D99C",
	areaStyle: {
		fill: "#81D99C",
	},
	point: [
		{
			size: 5,
			shape: "circle",
			style: {
				fill: "#81D99C",
				stroke: "#81D99C",
				lineWidth: 2,
			},
		},
	],
};
