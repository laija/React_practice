import CampaignDetails from "../components/mdp/CampaignDetails";

// Example HTML Fragment for use in the header and footer
const divFooter = <div>Footer Example text</div>;
const linkFooter = <a href="#">Footer Example Link</a>;
const divHeader = (
	<div>
		Long List <button>footerHref</button>
	</div>
);
const linkHeader = <a>This is a link</a>;
const fancyHeader = (
	<div>
		<h1> Fancy Header</h1>
		<br />
		<h2>Fancy Sub Header</h2>
	</div>
);
const demoData = [
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
const scenarioData = [
	{
		name: "Social Media Campaign",
	},
	{
		name: "Email Outreach Campaign",
	},
	{
		name: "Campaign #3",
	},
	{
		name: "Campaign #4",
	},
	{
		name: "Campaign #5",
	},
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "MDP/Lists/CampaignDetails",
	component: CampaignDetails,
	argTypes: {
		// custom types that appear in the Controls
		footerContent: {
			options: ["Div", "Link", "Empty"],
			mapping: {
				Div: divFooter,
				Link: linkFooter,
				Empty: "",
			},
		},
		headerContent: {
			options: ["Div", "Link", "Fancy", "Empty"],
			mapping: {
				Div: divHeader,
				Link: linkHeader,
				Fancy: fancyHeader,
				Empty: "",
			},
		},
	},
}; // this is the story

const Template = (args) => <CampaignDetails {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// List different versions of the story below
export const LongList = Template.bind({});
LongList.args = {
	headerContent: "Div",
	footerContent: "Link",
	data: demoData,
};

export const ShortList = Template.bind({});
ShortList.args = {
	headerContent: "Empty",
	footerContent: "Link",
	data: scenarioData,
};
