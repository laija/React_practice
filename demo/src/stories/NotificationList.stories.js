import NotificationList from "../components/mdp/NotificationList";
import {
	RocketOutlined,
	TeamOutlined,
	ThunderboltOutlined,
} from "@ant-design/icons";

const data = [
	{
		title: "Assign an Agent to Metrology - Lead",
		user: <TeamOutlined />,
		description: "September 10th",
	},
	{
		title: "Marketing Team just qualified lead 300.",
		user: <RocketOutlined />,
		description: "September 11th",
	},
	{
		title: "Levi Ackerman is currently overutilized on 6 active leads.",
		user: <ThunderboltOutlined />,
		description: "September 12th",
	},
];

export default {
	title: "MDP/Lists/NotificationList",
	component: NotificationList,
}; // this is the story

const Template = (args) => <NotificationList {...args} />; // Create a function that returns our component ( button) and passes all ags to it

// Create a function that returns our component ( button) and passes all ags to it

//STORY VERSIONS
// List different versions of the story below
export const UpdatesList = Template.bind({});
UpdatesList.args = {
	updatesData: data,
};
