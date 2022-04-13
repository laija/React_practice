import { Tabs } from "antd";
import PropTypes from "prop-types";

const { TabPane } = Tabs;

function TabsPanel({
	centeredOption,
	tabContent1,
	tabContent2,
	tabContent3,
	tabTitle1,
	tabTitle2,
	tabTitle3,
	disabledOption2,
	disabledOption3,
}) {
	return (
		<div>
			<Tabs defaultActiveKey="1" centered={centeredOption}>
				<TabPane tab={tabTitle1} key="1">
					{tabContent1}
				</TabPane>
				<TabPane tab={tabTitle2} key="2" disabled={disabledOption2}>
					{tabContent2}
				</TabPane>
				<TabPane tab={tabTitle3} key="3" disabled={disabledOption3}>
					{tabContent3}
				</TabPane>
			</Tabs>
		</div>
	);
}

TabsPanel.propTypes = {
	centeredOption: PropTypes.bool,
	tabTitle1: PropTypes.string,
	tabContent1: PropTypes.string,
	tabTitle2: PropTypes.string,
	disabledOption2: PropTypes.bool,
	tabContent2: PropTypes.string,
	tabTitle3: PropTypes.string,
	disabledOption3: PropTypes.bool,
	tabContent3: PropTypes.string,
};

export default TabsPanel;
