import BasicDatePicker from "../components/mdp/dataDisplay/BasicDatePicker";
import moment from 'moment'

const PICKERFORMAT = [
	"week",
	"month",
	"quarter",
	"year"
];

const DATEFORMAT = [
	"YYYY/MM/DD",
	"MM/DD",
	"YYYY/MM",
	'MMMM Do YYYY, h:mm:ss a',
	'dddd',
	"MMM Do YY"
];

const SIZE = [
	"large",
	"default",
	"small"
];

export default {
	title: "MDP/DataDisplay/BasicDatePicker",
	component: BasicDatePicker,
    argTypes: {
		pickerFormat: {
			options: PICKERFORMAT,
			control: { type: "select" }			
		},
		format: {
			options: DATEFORMAT,
			control: { type: "select" }			
		},
		datePickerSize : {
			options: SIZE,
			control: { type: "select" }
		},
		defaultPickerValue : {
			control: 'object'
		},
		showNow: { 
			control: { type: "boolean"}
		},
		showTime: { 
			control: { type: "boolean"}
		}
	}	
}; // this is the story

const Template = (args) => <BasicDatePicker {...args} />; // Create a function that returns our component ( BasicDatePicker and passes all ags to it

// Create a function that returns our component (BasicDatePicker) and passes all ags to it

//STORY VERSIONS
// List different versions of the story below

export const DatePicker = Template.bind({});
DatePicker.args = {
	allowClear: true,
	bordered: true,
	disabled: false,
	format: DATEFORMAT[0],
	pickerFormat: PICKERFORMAT[0],
	defaultPickerValue: moment(),
	datePickerSize: SIZE[1],
	showNow: false,
	showTime: false
};

