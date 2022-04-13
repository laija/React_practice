import Breadcrumbs from "../components/mdp/dataDisplay/Breadcrumbs";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "MDP/DataDisplay/Breadcrumbs",
	component: Breadcrumbs,
}; // this is the story

const Template = (args) => <Breadcrumbs {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// Create a function that returns our component ( button) and passes all ags to it

//STORY VERSIONS
// List different versions of the story below
export const BasicBreadcrumbs = Template.bind({});
BasicBreadcrumbs.args = {
	item1: "",
	item2: "Application Center",
	item3: "Application List",
	item4: "Application Card",
	item5: "Appplication",
	separator: ">",
	dynamicIcon1: "home",
	dynamicIcon2: "person",
	iconColor: "#97a4ba",
};
