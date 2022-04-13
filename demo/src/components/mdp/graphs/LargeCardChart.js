import { Row, Col, Card } from "antd";
import { Area } from "@ant-design/charts";
import PropTypes from "prop-types";

function LargeCardChart({
	cardData,
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
	lineStyle,
	point,
	tooltip,
	xField,
	cardName,
}) {
	return (
		<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
			<Col className="gutter-row" span={24}>
				<Card>
					<h2 className="top-card-row">{cardName}</h2>
					<Area
						data={cardData}
						xField={xField}
						yField={yField}
						smooth={smooth}
						startOnZero={startOnZero}
						color={color}
						areaStyle={areaStyle}
						line={line}
						lineStyle={lineStyle}
						point={point}
						tooltip={tooltip}
					/>
				</Card>
			</Col>
		</Row>
	);
}

LargeCardChart.propTypes = {
	cardName: PropTypes.string,
	cardData: PropTypes.array,
	xField: PropTypes.string,
	yField: PropTypes.string,
	areaStyle: PropTypes.object,
};

export default LargeCardChart;
