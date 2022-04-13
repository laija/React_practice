import { Line } from "@ant-design/plots";
import PropTypes from "prop-types";

function LineChart({
	data,
	width,
	height,
	autofit,
	padding,
	appendPadding,
	renderer,
	pixelRatio,
	limitInPlot,
	xField,
	yField,
	seriesField,
	smooth,
	point,
	color,
	lineStyle,
	state,
	xAxis,
	yAxis,
	slider,
	annotations,
	legend,
	label,
	tooltip,
	isStack,
	animation,
}) {
	return (
		<Line
			data={data}
			xField={xField}
			yField={yField}
			xAxis={xAxis}
			yAxis={yAxis}
			seriesField={seriesField}
			smooth={smooth}
			color={color}
			point={point}
			tooltip={tooltip}
			autofit={autofit}
			annotations={annotations}
			isStack={isStack}
			slider={slider}
			legend={legend}
			animation={animation}
		/>
	);
}

LineChart.propTypes = {
	data: PropTypes.array,
	xField: PropTypes.string,
	yField: PropTypes.string,
	smooth: PropTypes.bool,
	color: PropTypes.string,
};

export default LineChart;
