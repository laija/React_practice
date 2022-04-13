import { Area } from "@ant-design/charts";
import PropTypes from "prop-types";
function CampaignChart({
	data,
	autofit,
	annotations,
	isStack,
	isPercent,
	pattern,
	yField,
	smooth,
	startOnZero,
	areaStyle,
	color,
	line,
	point,
	tooltip,
	xField,
}) {
	return (
		<Area
			data={data}
			xField={xField}
			yField={yField}
			smooth={smooth}
			startOnZero={startOnZero}
			color={color}
			areaStyle={areaStyle}
			line={line}
			point={point}
			tooltip={tooltip}
			autofit={autofit}
			annotations={annotations}
			isStack={isStack}
			isPercent={isPercent}
			pattern={pattern}
		/>
	);
}

CampaignChart.propTypes = {
	data: PropTypes.array,
	xField: PropTypes.string,
	areaStyle: PropTypes.object,
};

export default CampaignChart;
