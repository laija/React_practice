import { Steps } from "antd";
import PropTypes from "prop-types";

const { Step } = Steps;

function StepsBar({
	stepsSize,
	currentSteps,
	description1,
	description2,
	description3,
	stepText1,
	stepText2,
	stepText3,
	stepSubText,
}) {
	return (
		<div className="generalContainer">
			<Steps size={stepsSize} current={currentSteps}>
				<Step title={stepText1} description={description1} />
				<Step
					title={stepText2}
					subTitle={stepSubText}
					description={description2}
				/>
				<Step title={stepText3} description={description3} />
			</Steps>
		</div>
	);
}

StepsBar.propTypes = {
	currentSteps: PropTypes.number,
	stepsSize: PropTypes.string,
	stepText1: PropTypes.string,
	stepText2: PropTypes.string,
	stepText3: PropTypes.string,
	description1: PropTypes.string,
	description2: PropTypes.string,
	description3: PropTypes.string,
	stepSubText: PropTypes.string,
};

export default StepsBar;
