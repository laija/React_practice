import ColumnChart from "../components/mdp/graphs/ColumnChart";

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

const altData = [
	{
		year: "1991",
		value: 5,
		type: "NYC",
	},
	{
		year: "1992",
		value: 2,
		type: "NYC",
	},
	{
		year: "1993",
		value: 4.5,
		type: "NYC",
	},
	{
		year: "1994",
		value: 7,
		type: "NYC",
	},
	{
		year: "1995",
		value: 2.9,
		type: "NYC",
	},
	{
		year: "1996",
		value: 4,
		type: "NYC",
	},
	{
		year: "1997",
		value: 6,
		type: "NYC",
	},
	{
		year: "1998",
		value: 1,
		type: "NYC",
	},
	{
		year: "1999",
		value: 7,
		type: "NYC",
	},
	{
		year: "1991",
		value: 13,
		type: "LA",
	},
	{
		year: "1992",
		value: 6,
		type: "LA",
	},
	{
		year: "1993",
		value: 1.5,
		type: "LA",
	},
	{
		year: "1994",
		value: 8,
		type: "LA",
	},
	{
		year: "1995",
		value: 2.9,
		type: "LA",
	},
	{
		year: "1996",
		value: 5,
		type: "LA",
	},
	{
		year: "1997",
		value: 9,
		type: "LA",
	},
	{
		year: "1998",
		value: 2,
		type: "LA",
	},
	{
		year: "1999",
		value: 7,
		type: "LA",
	},
];

const foodData = [
	{ city: "NY", type: "Fruit", value: 14500 },
	{ city: "NY", type: "Rice", value: 8500 },
	{ city: "NY", type: "Snacks", value: 10000 },
	{ city: "NY", type: "Drinks", value: 7000 },
	{ city: "London", type: "Fruit", value: 9000 },
	{ city: "London", type: "Rice", value: 8500 },
	{ city: "London", type: "Snacks", value: 11000 },
	{ city: "London", type: "Drinks", value: 6000 },
	{ city: "Paris", type: "Fruit", value: 16000 },
	{ city: "Paris", type: "Rice", value: 5000 },
	{ city: "Paris", type: "Snacks", value: 6000 },
	{ city: "Paris", type: "Drinks", value: 10000 },
	{ city: "Tokyo", type: "Fruit", value: 14000 },
	{ city: "Tokyo", type: "Rice", value: 9000 },
	{ city: "Tokyo", type: "Snacks", value: 10000 },
	{ city: "Tokyo", type: "Drinks", value: 9000 },
	{ city: "Singapore", type: "Fruit", value: 14000 },
	{ city: "Singapore", type: "Rice", value: 9000 },
	{ city: "Singapore", type: "Snacks", value: 10000 },
	{ city: "Singapore", type: "Drinks", value: 6000 },
	{ city: "Seoul", type: "Fruit", value: 9000 },
	{ city: "Seoul", type: "Rice", value: 8500 },
	{ city: "Seoul", type: "Snacks", value: 10000 },
	{ city: "Seoul", type: "Drinks", value: 6000 },
	{ city: "Amsterdam", type: "Fruit", value: 17000 },
	{ city: "Amsterdam", type: "Rice", value: 6000 },
	{ city: "Amsterdam", type: "Snacks", value: 7000 },
	{ city: "Amsterdam", type: "Drinks", value: 10000 },
	{ city: "Hong Kong", type: "Fruit", value: 18000 },
	{ city: "Hong Kong", type: "Rice", value: 11000 },
	{ city: "Hong Kong", type: "Snacks", value: 15000 },
	{ city: "Hong Kong", type: "Drinks", value: 14000 },
];

const storeData = [
	{
		product_type: "Office Supplies",
		country_origin: "USA",
		order_amt: 8,
		product_sub_type: "Eraser",
	},
	{
		product_type: "Office Supplies",
		country_origin: "USA",
		order_amt: 10,
		product_sub_type: "Bookshelf",
	},
	{
		product_type: "Office Supplies",
		country_origin: "USA",
		order_amt: 20,
		product_sub_type: "Ink Cart",
	},
	{
		product_type: "Office Supplies",
		country_origin: "Brazil",
		order_amt: 13,
		product_sub_type: "Ink Cart",
	},
	{
		product_type: "Office Supplies",
		country_origin: "Brazil",
		order_amt: 21,
		product_sub_type: "Eraser",
	},
	{
		product_type: "Office Supplies",
		country_origin: "Brazil",
		order_amt: 21,
		product_sub_type: "Bookshelf",
	},

	{
		product_type: "Appliances",
		country_origin: "USA",
		order_amt: 13,
		product_sub_type: "Washing Machine",
	},
	{
		product_type: "Appliances",
		country_origin: "Brazil",
		order_amt: 2,
		product_sub_type: "Washing Machine",
	},
	{
		product_type: "Appliances",
		country_origin: "USA",
		order_amt: 5,
		product_sub_type: "Microwave",
	},
	{
		product_type: "Appliances",
		country_origin: "USA",
		order_amt: 14,
		product_sub_type: "Air Fryer",
	},
	{
		product_type: "Appliances",
		country_origin: "Brazil",
		order_amt: 23,
		product_sub_type: "Microwave",
	},
	{
		product_type: "Appliances",
		country_origin: "Brazil",
		order_amt: 23,
		product_sub_type: "Air Fryer",
	},

	{
		product_type: "Electronics",
		country_origin: "USA",
		order_amt: 33,
		product_sub_type: "PC",
	},
	{
		product_type: "Electronics",
		country_origin: "Brazil",
		order_amt: 4,
		product_sub_type: "PC",
	},
	{
		product_type: "Electronics",
		country_origin: "Brazil",
		order_amt: 23,
		product_sub_type: "Mobile Phone",
	},
	{
		product_type: "Electronics",
		country_origin: "USA",
		order_amt: 20.9,
		product_sub_type: "Mobile Phone",
	},
	{
		product_type: "Electronics",
		country_origin: "USA",
		order_amt: 5.9,
		product_sub_type: "Game Console",
	},
	{
		product_type: "Electronics",
		country_origin: "Brazil",
		order_amt: 5.9,
		product_sub_type: "Game Console",
	},
];

export default {
	title: "MDP/Graphs/ColumnChart",
	component: ColumnChart,
	id: "ColumnChart",
	parameters: {
		docs: {
			description: {
				component: `Use a column to display the numeric value of the dimension. The horizontal axis shows the categorical dimension, and the vertical axis shows the corresponding value.`,
			},
		},
	},
};

const Template = (args) => <ColumnChart {...args} />; // Create a function that returns our component ( button) and passes all ags to it

export const BasicColumnChart = Template.bind({});
BasicColumnChart.args = {
	data: data,
	xField: "name",
	yField: "revenue",
};

export const StackedColumnChart = Template.bind({});
StackedColumnChart.args = {
	data: altData,
	xField: "year",
	yField: "value",
	seriesField: "type",
	isStack: true,
	label: {
		position: "middle",
		layout: [
			{
				type: "interval-adjust-position",
			},
			{
				type: "interval-hide-overlap",
			},
			{
				type: "adjust-color",
			},
		],
	},
};

export const GroupedColumnCharts = Template.bind({});
GroupedColumnCharts.args = {
	data: foodData,
	xField: "city",
	yField: "value",
	seriesField: "type",
	isGroup: "true",
	columnStyle: {
		radius: [20, 20, 0, 0],
	},
};

export const StackedGroupedColumnCharts = Template.bind({});
StackedGroupedColumnCharts.args = {
	data: storeData,
	xField: "product_type",
	yField: "order_amt",
	isGroup: true,
	isStack: true,
	seriesField: "product_sub_type",
	groupField: "country_origin",
};

export const PercentColumnChart = Template.bind({});
PercentColumnChart.args = {
	data: altData,
	xField: "year",
	yField: "value",
	seriesField: "type",
	isPercent: true,
	isStack: true,
	label: {
		position: "middle",
		content: (item) => {
			return item.value.toFixed(2);
		},
		style: {
			fill: "#fff",
		},
	},
};
