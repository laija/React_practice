import ConfigurableAreaChart from "../components/mdp/graphs/ConfigurableAreaChart";
// import "./style.css";

// Example data
const demoData = [
	{
		name: "Week 1",
		revenue: 4500,
		xfd: "Round 1",
	},
	{
		name: "Week 2",
		revenue: 2800,
		xfd: "Round 2",
	},
	{
		name: "Week 3",
		revenue: 3000,
		xfd: "Round 3",
	},
	{
		name: "Week 4",
		revenue: 4250,
		xfd: "Round 4",
	},
	{
		name: "Week 5",
		revenue: 4500,
		xfd: "Round 5",
	},
	{
		name: "Week 6",
		revenue: 7500,
		xfd: "Round 6",
	},
	{
		name: "Week 7",
		revenue: 4750,
		xfd: "Round 7",
	},
	{
		name: "Week 9",
		revenue: 8720,
		xfd: "Round 8",
	},
];

//EXAMPLE CONFIGURATIONS
const defaultAreaStyle = { fill: "#0000FF" };

const defaultLineStyle = {
	color: "#FF0033",
	style: {
		stroke: "black",
	},
	size: 5,
};

const LineStyleWithFill = {
	color: "#FF0033",
	style: {
		fill: "#81D99C",
		stroke: "black",
	},
	size: 5,
};

const defaultPointStyle = {
	size: 5,
	shape: "circle",
	style: {
		fill: "#81D99C",
		stroke: "#81D99C",
		lineWidth: 2,
	},
};

const defaultToolTip = {
	showMarkers: true,
};

const defaultDotPattern = {
	type: "dot",
	cfg: {
		backgroundColor: "#ff3399",
		fill: "#00ffff",
		fillOpacity: 1,
		stroke: "#002222",
		strokeOpacity: 0.5,
		lineWidth: 4,
		opacity: 0.8,
		rotation: 0,
		size: 9, // ONLY for Dot Pattern
		padding: 4, // ONLY for Dot Pattern
		isStagger: true, // ONLY for Dot Pattern
	},
};

const defaultLinePattern = {
	type: "line",
	cfg: {
		backgroundColor: "#0F2E38",
		fill: "#0F2E38",
		fillOpacity: 0.5,
		stroke: "#0F2E38",
		strokeOpacity: 0.5,
		lineWidth: 3,
		opacity: 0.8,
		rotation: 0,
	},
};

const defaultSquarePattern = {
	type: "line",
	cfg: {
		backgroundColor: "#0F2E38",
		fill: "#0F2E38",
		fillOpacity: 0.5,
		stroke: "#0F2E38",
		strokeOpacity: 0.5,
		lineWidth: 3,
		opacity: 0.8,
		rotation: 0,
	},
};

const defaultAnnotations = [
	{
		type: "text",
		position: ["min", "median"],
		content: "MEDIAN VALUE",
		offsetY: -4,
		style: {
			textBaseline: "bottom",
		},
	},
	{
		type: "line",
		start: ["min", "median"],
		end: ["max", "median"],
		style: {
			stroke: "red",
			lineDash: [2, 2],
		},
	},
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "MDP/Graphs/ConfigurableAreaChart",
	component: ConfigurableAreaChart,
	id: "ConfigurableAreaChart",
	parameters: {
		docs: {
			description: {
				component: `This is an Example of an Area Chart. This component is based on the Area Graph component from Ant Charts. This Configurable version of the Area chart is a custom implementation where each parameter is passed in separately. When crafting one of these charts you have the option of pressing the show code button and copying the configuration for the chart. Then, you can save that configuration in an object. You can then pass this object to the base Ant Chart component as a config option.
            
Basically, the configuration version of the chart just maps the individual parameters to the individual variables you pass in while the original graph maps parameters to properties in the config object. We have provided this convenience version of the component otherwise you would only be able to interactively configure the chart via 1 complex control ( the config control ).`,
			},
		},
	},
}; // this is the base story

const Template = (args) => <ConfigurableAreaChart {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// List different versions of the story below
export const BasicAreaChart = Template.bind({});
BasicAreaChart.args = {
	autoFit: true,
	data: demoData,
	xField: "xfd",
	yField: "revenue",
	smooth: true,
	startOnZero: false,
	color: "#81D99C",
	areaStyle: defaultAreaStyle,
	line: defaultLineStyle,
	point: defaultPointStyle,
	tooltip: defaultToolTip,
	isStack: true,
	isPercent: false,
	// state:{}   // add state later
};

export const AreaChartWithLineAnnotation = Template.bind({});
AreaChartWithLineAnnotation.args = {
	autoFit: true,
	annotations: defaultAnnotations,
	data: demoData,
	xField: "xfd",
	yField: "revenue",
	smooth: true,
	startOnZero: false,
	color: "#81D99C",
	areaStyle: defaultAreaStyle,
	line: defaultLineStyle,
	point: defaultPointStyle,
	tooltip: defaultToolTip,
	isStack: true,
	isPercent: false,
	pattern: defaultDotPattern,
	// state:{}   // add state later
};

export const BasicGraph2 = Template.bind({});
BasicGraph2.args = {
	data: demoData,
	xField: "name",
	yField: "revenue",
	smooth: true,
	startOnZero: false,
	color: "#0000FF",
	areaStyle: defaultAreaStyle,
	line: defaultLineStyle,
	point: defaultPointStyle,
	tooltip: defaultToolTip,
	pattern: defaultSquarePattern,
};

export const StackedAreaChartSlider = Template.bind({});
StackedAreaChartSlider.args = {
	data: altData,
	xField: "date",
	yField: "value",
	seriesField: "country",
};
