import { Row, Col, Typography } from "antd";
import PropTypes from "prop-types";

const { Text } = Typography;

function Banners({ bannerColor, bannerText, ellipsisStatus, textColor }) {
	return (
		<Row className="banner" style={{ backgroundColor: `${bannerColor}` }}>
			<Col span={24} className="banner-text">
				<Text ellipsis={ellipsisStatus} style={{ color: `${textColor}` }}>
					{bannerText}
				</Text>
			</Col>
		</Row>
	);
}

Banners.propTypes = {
	bannerColor: PropTypes.string,
	bannerText: PropTypes.string,
	textColor: PropTypes.string,
};

export default Banners;
