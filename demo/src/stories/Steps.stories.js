import StepsBar from "../components/mdp/dataDisplay/Steps";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "MDP/DataDisplay/Steps",
	component: StepsBar,
	argTypes: {
		stepsSize: {
			options: ["default", "small"],
			control: { type: "inline-radio" },
		},
	},
}; // this is the story

const Template = (args) => <StepsBar {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// Create a function that returns our component ( button) and passes all ags to it

//STORY VERSIONS
// List different versions of the story below
export const BasicSteps = Template.bind({});
BasicSteps.args = {
	currentSteps: 1,
	stepsSize: "default",
	stepText1: "Finished",
	stepText2: "In Progress",
	stepText3: "Waiting",
	description1: "This is a description.",
	description2: "This is a description.",
	description3: "This is a description.",
	stepSubText: "Left at 0:00:66",
};
