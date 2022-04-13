import Tooltips from "../components/mdp/dataDisplay/Tooltips";

export default {
	title: "MDP/DataDisplay/Tooltips",
	component: Tooltips,
	argTypes: {
		backgroundColor: {
			options: [
				"pink",
				"red",
				"yellow",
				"orange",
				"cyan",
				"green",
				"blue",
				"purple",
				"geekblue",
				"magneta",
				"volcano",
				"gold",
				"lime",
			],
			control: { type: "select" },
		},
		alignment: {
			options: [
				"top",
				"left",
				"right",
				"bottom",
				"topLeft",
				"topRight",
				"bottomLeft",
				"bottomRight",
				"leftTop",
				"leftBottom",
				"rightTop",
				"rightBottom",
			],
			control: { type: "select" },
		},
	},
};

const Template = (args) => <Tooltips {...args} />;

export const BasicToolTips = Template.bind({});
BasicToolTips.args = {
	promptText: "Prompt Text Shows Here",
	backgroundColor: "geekblue",
	visibleonReload: false,
	alignment: "top",
	paragraph: "Tooltip will show on mouse enter.",
};
