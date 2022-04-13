import { Card, Space, Row, Col, Descriptions } from "antd";
import "material-icons/iconfont/material-icons.css";
import PropTypes from "prop-types";

function StratCardTile({
	cardName,
	subHeader1,
	subHeader2,
	subHeader3,
	subHeader4,
	iconSize,
	backgroundColor,
	iconColor,
	dynamicIcon,
	keyindicator1,
	keyindicator2,
	keyindicator3,
	keyindicator4,
}) {
	return (
		<Card className="brand-awareness">
			<Space direction="vertical">
				<span className="strat-row-titles">
					<span
						className="material-icons span-icons"
						style={{
							fontSize: `${iconSize}`,
							backgroundColor: `${backgroundColor}`,
							color: `${iconColor}`,
						}}
					>
						{dynamicIcon}
					</span>
					{cardName}
				</span>
				<Row gutter={24}>
					<Col span={24}>
						<Space
							direction="vertical"
							align="center"
							bordered
							style={{ width: "100%" }}
						>
							<Descriptions layout="vertical" size={"small"} column={4}>
								<Descriptions.Item label={subHeader1}>
									{keyindicator1}
								</Descriptions.Item>
								<Descriptions.Item label={subHeader2}>
									{keyindicator2}
								</Descriptions.Item>
								<Descriptions.Item label={subHeader3}>
									{keyindicator3}
								</Descriptions.Item>
								<Descriptions.Item label={subHeader4}>
									{keyindicator4}
								</Descriptions.Item>
							</Descriptions>
						</Space>
					</Col>
				</Row>
			</Space>
		</Card>
	);
}

StratCardTile.propTypes = {
	size: PropTypes.string,
	cardName: PropTypes.string,
	dynamicIcon: PropTypes.string,
	iconSize: PropTypes.string,
	backgroundColor: PropTypes.string,
	iconColor: PropTypes.string,
	subHeader1: PropTypes.string,
	subHeader2: PropTypes.string,
	subHeader3: PropTypes.string,
	subHeader4: PropTypes.string,
	keyindicator1: PropTypes.number,
	keyindicator2: PropTypes.number,
	keyindicator3: PropTypes.number,
	keyindicator4: PropTypes.number,
};

export default StratCardTile;
