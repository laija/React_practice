import { Area } from "@ant-design/plots";
import PropTypes from "prop-types";

function ConfigurableAreaChart({
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
	xAxis,
	yAxis,
	legend,
	seriesField,
	slider,
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
			xAxis={xAxis}
			yAxis={yAxis}
			legend={legend}
			seriesField={seriesField}
			slider={slider}
		/>
	);
}

ConfigurableAreaChart.propTypes = {
	data: PropTypes.array,
	xField: PropTypes.string,
	areaStyle: PropTypes.object,
};

export default ConfigurableAreaChart;
