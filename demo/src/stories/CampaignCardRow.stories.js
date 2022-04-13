import CampaignCardRow from "../components/mdp/cards/CampaignCardRow";
import CardRow from "../components/mdp/cards/Cards";

// STORY DATA AND SUPPORT OBJECTS
// Example HTML Fragment for use in the header and footer
const data1 = [
	{ title: "Total Revenue", value: 30970000, prefix: "$", key: "a" },
	{ title: "Total Customers", value: 776000, prefix: "", key: "ab" },
	{ title: "New Customers", value: 2600, prefix: "", key: "c" },
];
const data2 = [
	{ title: "Total Revenue!", value: 39970000, prefix: "@", key: "a" },
	{ title: "Total Cats", value: 776000, prefix: "", key: "ab" },
	{ title: "New Cats", value: 2600, prefix: "", key: "c" },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "MDP/Cards/CampaignCardRow",
	component: CampaignCardRow,
	subcomponents: { CardRow },
}; // this is the story

const Template = (args) => <CampaignCardRow {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// Create a function that returns our component ( button) and passes all ags to it

//STORY VERSIONS
// List different versions of the story below
export const CCard = Template.bind({});
CCard.args = {
	cardData: data1,
};

export const Ver2 = Template.bind({});
Ver2.args = {
	cardData: data2,
};
