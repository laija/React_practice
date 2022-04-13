import { Pie } from "@ant-design/charts";
import PropTypes from "prop-types";

function PieChart({
	width,
	height,
	autoFit,
	padding,
	appendPadding,
	renderer,
	pixelRatio,
	limitInPlot,
	locale,
	data,
	meta,
	angleField,
	colorField,
	radius,
	innerRadius,
	startAngle,
	endAngle,
	color,
	pattern,
	pieStyle,
	state,
	tooltip,
	label,
	legend,
	annotations,
}) {
	return (
		<Pie
			data={data}
			angleField={angleField}
			colorField={colorField}
			innerRadius={innerRadius}
			radius={radius}
		/>
	);
}

PieChart.propTypes = {
	data: PropTypes.array,
	angleField: PropTypes.string,
	colorField: PropTypes.string,
	innerRadius: PropTypes.string,
	radius: PropTypes.string,
};

export default PieChart;
