import Ratings from "../components/mdp/dataDisplay/Ratings";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "MDP/DataDisplay/Ratings",
	component: Ratings,
}; // this is the story

const Template = (args) => <Ratings {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// Create a function that returns our component ( button) and passes all ags to it

//STORY VERSIONS
// List different versions of the story below
export const Rate = Template.bind({});
Rate.args = {
	halfRatings: true,
	defaultRating: 2.5,
	readOnly: false,
};
