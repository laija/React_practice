import StratCardTile from "../components/mdp/cards/StratCardTile";

const data = {
	strategyKey: 4,
	strategyName: "Retention",
	strategyId: "0017e000007JzHyAAQ",
	activeCampaigns: 2,
	closedCampaigns: 4,
	availableFunds: 1620000.0,
	revenue: 4200000.0,
	keyindicator1: 2,
	keyindicator2: 4,
	keyindicator3: 1800000.0,
	keyindicator4: 1300000.0,
	unallocatedFunds: 350000.0,
	recoverableFunds: 100000.0,
	committedFunds: 1600000.0,
	uncommittedFunds: 3500000.0,
	searchSessions: 23000.0,
	recommendedScore: 33.0,
	favorabilityScore: 21.0,
	scenarioKey: 1,
};

export default {
	title: "MDP/Cards/StratCardTile",
	component: StratCardTile,
	subcomponents: { StratCardTile },
	argTypes: {
		iconSize: {
			options: ["18px", "24px", "36px", "48px"],
			control: { type: "inline-radio" },
		},
		dynamicIcon: {
			options: [
				"analytics",
				"lightbulb",
				"savings",
				"supervisor_account",
				"rocket_launch",
				"view_quilt",
				"hotel_class",
				"try",
			],
			control: { type: "select" },
		},
	},
};

const Template = (args) => <StratCardTile {...args} />;

export const CardTile = Template.bind({});
CardTile.args = {
	cardName: "Card Title",
	dynamicIcon: "lightbulb",
	iconSize: "24px",
	iconColor: "#97a4ba",
	subHeader1: "Recommender Score",
	keyindicator1: data.recommendedScore + "%",
	subHeader2: "Favorability",
	keyindicator2: data.favorabilityScore + "%",
	subHeader3: "Active Campaigns",
	keyindicator3: data.activeCampaigns,
	subHeader4: "Revenue",
	keyindicator4: "$" + data.revenue,
};
