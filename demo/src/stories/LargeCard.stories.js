import LargeCard from "../components/mdp/cards/LargeCard";
const data = [
	{
		name: "Actual Revenue",
		value: "$4,200,000",
	},
	{
		name: "Schedule",
		value: "12/28/19 - 3/28/20",
	},
	{
		name: "Budget",
		value: "$1,200,000",
	},
	{
		name: "Estimated Revenue",
		value: "$2,700,000",
	},
	{
		name: "Unallocated",
		value: "$350,000",
	},
	{
		name: "Estimated ROI",
		value: "125%",
	},
	{
		name: "Dollars Tied to Activites",
		value: "$50,000",
	},
	{
		name: "Activities",
		value: "200 new messages",
		value2: "160 new posts",
	},
	{
		name: "Results",
		value: "1.2M Impressions",
		value2: "400K App Downloads",
	},
	{
		name: "Outcomes",
		value: "790 New Customers",
		value2: "$4.2M New Customer Revenue",
	},
];

export default {
	title: "MDP/Cards/LargeCard",
	component: LargeCard,
}; // this is the story

const Template = (args) => <LargeCard {...args} />;

export const CCard = Template.bind({});
CCard.args = {
	cardData: data,
};
