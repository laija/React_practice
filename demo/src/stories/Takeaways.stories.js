import Takeaways from "../components/mdp/Takeaways";
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "MDP/Lists/Takeaways",
	component: Takeaways,
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

const Template = (args) => <Takeaways {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// List different versions of the story below
export const ShortList = Template.bind({});
ShortList.args = {
	headerContent: "Div",
	footerContent: "Link",
	data: ["hello", "goodbye"],
};

export const LongList = Template.bind({});
LongList.args = {
	headerContent: "Div",
	footerContent: "Link",
	data: [
		"The budget for the Social Media Campaign has been increased by 50%",
		"Social Media Campaign has brought in the most customers.  ",
		"Campaign #3 has ended and did meet estimated revenue.",
		"Campaign #4 has the most unallocated funds: $350,000",
		"Campaign #5 budget has been slashed by 50%",
	],
};

export const ScenarioPlanningList = Template.bind({});
ScenarioPlanningList.args = {
	headerContent: "Div",
	footerContent: "Link",
	data: [
		"The budget for the Social Media Campaign has been increased by 50%",
		"Social Media Campaign has brought in the most customers.  ",
		"Campaign #3 has ended and did meet estimated revenue.",
		"Campaign #4 has the most unallocated funds: $350,000",
		"Campaign #5 budget has been slashed by 50%",
	],
};
