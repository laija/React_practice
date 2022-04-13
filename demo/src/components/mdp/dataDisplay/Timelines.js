import { Timeline } from "antd";
import PropTypes from "prop-types";

function Timelines({
	step1,
	step2,
	step3,
	step4,
	colorStep1,
	colorStep2,
	colorStep3,
	colorStep4,
}) {
	return (
		<Timeline>
			<Timeline.Item color={colorStep1}>{step1}</Timeline.Item>
			<Timeline.Item color={colorStep2}>{step2}</Timeline.Item>
			<Timeline.Item color={colorStep3}>{step3}</Timeline.Item>
			<Timeline.Item color={colorStep4}>{step4}</Timeline.Item>
		</Timeline>
	);
}

Timelines.propTypes = {
	step1: PropTypes.string,
	colorStep1: PropTypes.string,
	step2: PropTypes.string,
	colorStep2: PropTypes.string,
	step3: PropTypes.string,
	colorStep3: PropTypes.string,
	step4: PropTypes.string,
	colorStep4: PropTypes.string,
};

export default Timelines;
