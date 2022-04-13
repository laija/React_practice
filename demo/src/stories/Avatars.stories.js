import Avatars from "../components/mdp/dataDisplay/Avatars";

export default {
	title: "MDP/DataDisplay/Avatars",
	component: Avatars,
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
		avatarShape: {
			options: ["Circle", "Square"],
			control: { type: "inline-radio" },
		},
	},
};

const Template = (args) => <Avatars {...args} />;

export const BasicAvatars = Template.bind({});
BasicAvatars.args = {
	avatarLetter: "U",
	avatarSize: 64,
	avatarURL: "https://joeschmoe.io/api/v1/random",
	avatarShape: "square",
	badgeNumber: 1,
};
