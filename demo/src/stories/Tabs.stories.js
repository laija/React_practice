import TabsPanel from "../components/mdp/dataDisplay/Tabs";

export default {
	title: "MDP/DataDisplay/TabsPanel",
	component: TabsPanel,
};

const Template = (args) => <TabsPanel {...args} />;

export const BasicTabsPanel = Template.bind({});
BasicTabsPanel.args = {
	centeredOption: false,
	tabTitle1: "Tab 1",
	tabContent1: "Lorem",
	tabTitle2: "Tab 2",
	disabledOption2: false,
	tabContent2: "Lorem ipsum",
	tabTitle3: "Tab 3",
	disabledOption3: false,
	tabContent3: "Lorem ipsum plus plus",
};
