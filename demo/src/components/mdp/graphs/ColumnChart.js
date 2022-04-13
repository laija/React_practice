import { Column } from "@ant-design/plots";
import PropTypes from "prop-types";

function ColumnChart({
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
	xField,
	yField,
	seriesField,
	groupField,
	isGroup,
	isStack,
	isRange,
	isPercent,
	meta,
	color,
	pattern,
	intervalPadding,
	dodgePadding,
	minColumnWidth,
	maxColumnWidth,
	columnStyle,
	columnWidthRatio,
	marginRatio,
	state,
	axis,
	legend,
	label,
	tooltip,
	annotations,
	slider,
	Scrollbar,
	conversionTag,
}) {
	return (
		<Column
			data={data}
			xField={xField}
			yField={yField}
			isStack={isStack}
			isPercent={isPercent}
			seriesField={seriesField}
			label={label}
			columnStyle={columnStyle}
			isGroup={isGroup}
			conversionTag={conversionTag}
			groupField={groupField}
		/>
	);
}

ColumnChart.propTypes = {
	data: PropTypes.array,
	xField: PropTypes.string,
	yField: PropTypes.string,
	columnWidthRatio: PropTypes.number,
	minColumnWidth: PropTypes.number,
	maxColumnWidth: PropTypes.number,
	conversionTag: PropTypes.bool,
};

export default ColumnChart;
