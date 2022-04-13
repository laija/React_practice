import MiniCard from "../components/mdp/cards/MiniCard";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "MDP/Cards/MiniCard",
	component: MiniCard,
}; // this is the story

const Template = (args) => <MiniCard {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// Create a function that returns our component ( button) and passes all ags to it

//STORY VERSIONS
// List different versions of the story below
export const mdpMiniCard = Template.bind({});
mdpMiniCard.args = {
	statColor: "#67758D",
};
