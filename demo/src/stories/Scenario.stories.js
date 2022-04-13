import Scenario from "../components/mdp/Scenario";
import "./style.css";

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
const sceHeader = <div>Campaigns</div>;
const sceFooter = <a>View All</a>;
const sceData = [
	{
		campaignKey: 1,
		campaignName: "Social Media Campaign",
		campaignId: "0015e000007JzHyAAK",
		strategy: "Brand Awareness",
		campaignStatus: "Active",
		startDate: "2019-12-28T18:25:43.511Z",
		endDate: "2020-03-28T18:25:43.511Z",
		campaignLength: 144,
		budget: 1200000,
		revenue: 4200000,
		unallocatedFunds: 350000,
		dollarsTied: 50000,
		campaignType: "Social",
		targetRevenue: 2400000,
		costsPerDay: 22864.07,
		scenarioKey: 1,
	},
	{
		campaignKey: 2,
		campaignName: "Email Outreach Campaign",
		campaignId: "0015e000007JzHyAAE",
		strategy: "Brand Awareness",
		campaignStatus: "Active",
		startDate: "2019-12-28T18:25:43.511Z",
		endDate: "2020-03-28T18:25:43.511Z",
		campaignLength: 144,
		budget: 4000000,
		revenue: 675000,
		unallocatedFunds: 15000,
		dollarsTied: 55000,
		campaignType: "Email",
		targetRevenue: 890000,
		costsPerDay: 10344.62,
		scenarioKey: 1,
	},
	{
		campaignKey: 3,
		campaignName: "Campaign #4",
		campaignId: "0015e000007JzHyZZE",
		strategy: "Brand Awareness",
		campaignStatus: "Inactive",
		startDate: "2019-11-28T18:25:43.511Z",
		endDate: "2019-04-28T18:25:43.511Z",
		campaignLength: 214,
		budget: 275000,
		revenue: 375000,
		unallocatedFunds: 25000,
		dollarsTied: 55000,
		campaignType: "Email",
		targetRevenue: 890000,
		costsPerDay: 10344.62,
		scenarioKey: 1,
	},
	{
		campaignKey: 4,
		campaignName: "Campaign #5",
		campaignId: "0015e000007JzHyXZE",
		strategy: "Brand Awareness",
		campaignStatus: "Inactive",
		startDate: "2019-11-28T18:25:43.511Z",
		endDate: "2019-05-28T18:25:43.511Z",
		campaignLength: 184,
		budget: 175000,
		revenue: 665000,
		unallocatedFunds: 25000,
		dollarsTied: 55000,
		campaignType: "Video",
		targetRevenue: 890000,
		costsPerDay: 10344.62,
		scenarioKey: 1,
	},
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "MDP/Lists/Scenario",
	component: Scenario,
	argTypes: {
		// custom types that appear in the Controls
		footerContent: {
			options: ["Div", "Link", "Scenario"],
			mapping: {
				Div: divFooter,
				Link: linkFooter,
				Scenario: "sceFooter",
			},
		},
		headerContent: {
			options: ["Div", "Link", "Fancy", "Scenario"],
			mapping: {
				Div: divHeader,
				Link: linkHeader,
				Fancy: fancyHeader,
				Scenario: sceHeader,
			},
		},
	},
}; // this is the story

const Template = (args) => <Scenario {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// List different versions of the story below

export const ScenarioPlanningList = Template.bind({});
ScenarioPlanningList.args = {
	headerContent: "Div",
	footerContent: "Link",
	data: sceData,
};
