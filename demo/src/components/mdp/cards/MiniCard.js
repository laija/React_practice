import { Card, Statistic, Row, Col } from "antd";
import PropTypes from "prop-types";

function MiniCard({
	cardTitle,
	cardNumber,
	cardPrefix,
	cardSuffix,
	statColor,
}) {
	return (
		<Row gutter={[24, 24]}>
			<Col span={4}>
				<Card className="mini-card">
					<div className="mini-card-title">
						<span>{cardTitle}</span>
					</div>
					<div className="mini-card-stat">
						<Statistic
							prefix={cardPrefix}
							value={cardNumber}
							suffix={cardSuffix}
							valueStyle={{ color: `${statColor}` }}
						/>
					</div>
				</Card>
			</Col>
		</Row>
	);
}

MiniCard.propTypes = {
	cardTitle: PropTypes.string,
	cardNumber: PropTypes.number,
	cardPrefix: PropTypes.string,
	cardSuffix: PropTypes.string,
	statColor: PropTypes.string,
};

export default MiniCard;
