import Timelines from "../components/mdp/dataDisplay/Timelines";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "MDP/DataDisplay/Timelines",
	component: Timelines,
}; // this is the story

const Template = (args) => <Timelines {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// Create a function that returns our component ( button) and passes all ags to it

//STORY VERSIONS
// List different versions of the story below
export const BasicTimelines = Template.bind({});
BasicTimelines.args = {
	step1: "Create a services site 2015-09-01",
	colorStep1: "green",
	step2: "Solve initial network problems 2015-09-01",
	colorStep2: "green",
	step3: "Technical testing 2015-09-01",
	colorStep3: "red",
	step4: "Network problems being solved 2015-09-01",
	colorStep4: "gray",
};
