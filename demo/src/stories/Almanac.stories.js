import Almanac from "../components/mdp/dataDisplay/Almanac";
import moment from 'moment'

export default {
	title: "MDP/DataDisplay/Almanac",
	component: Almanac,
    argTypes: {
		customHeader: {
			options: [true, false],
			control: { type: "inline-radio" },
		},
		defaultValue : {
			startDate: { control: 'date' }
		},
		fullscreen: {
			options: [true, false],
			control: { type: "inline-radio" },
		},
		mode: {
			options: ["month", "year"],
			control: { type: "inline-radio" },
		}
	}
};

const Template = (args) => <Almanac {...args} />; // Create a function that returns our component ( Almanac) and passes all ags to it

//STORY VERSIONS
// List different versions of the story below

export const BasicCalendar = Template.bind({});
BasicCalendar.args = {
	customHeader: false,
	defaultValue: moment().add(1, 'days'),
	fullscreen: false,
	header: "Add a new header",
	mode: 'month',
	startDisabledDays: 0,
	endDisableDays: 30
};
 