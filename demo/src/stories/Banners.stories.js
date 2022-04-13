import Banners from "../components/mdp/dataDisplay/Banners";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "MDP/DataDisplay/Banners",
	component: Banners,
	argTypes: {
		bannerColor: {
			options: ["#40A9FF", "#FFAB00", "#FF5630"],
			control: { type: "select" },
		},
	},
}; // this is the story

const Template = (args) => <Banners {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// Create a function that returns our component ( button) and passes all ags to it

//STORY VERSIONS
// List different versions of the story below
export const BasicBanners = Template.bind({});
BasicBanners.args = {
	bannerColor: "#40A9FF",
	bannerText:
		"Payment details needed. To stay on your current plan after your trial ends, add payment details by June 30, 2020.Payment details needed. To stay on your current plan after your trial ends, add payment details by June 30, 2020.Payment details needed. To stay on your current plan after your trial ends, add payment details by June 30, 2020.Payment details needed. To stay on your current plan after your trial ends, add payment details by June 30, 2020.",
	textColor: "#FFFFFF",
};
