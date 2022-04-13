import PropTypes from "prop-types";
import { List, Avatar, Card, Typography } from "antd";
const { Text, Link } = Typography;

function UpdatesList({ updatesData, href }) {
	return (
		<Card bordered={false} className="top-card-row">
			<List
				itemLayout="horizontal"
				dataSource={updatesData}
				size="small"
				renderItem={(updatesData) => (
					<List.Item>
						<List.Item.Meta
							title={<a href={href}>{updatesData.title}</a>}
							avatar={
								<Avatar
									icon={updatesData.user}
									style={{ background: "#A16FE7" }}
									size={{ xs: 24 }}
								></Avatar>
							}
							description={
								<Text type="secondary">{updatesData.description}</Text>
							}
						/>
					</List.Item>
				)}
			/>
		</Card>
	);
}

UpdatesList.propTypes = {
	updatesData: PropTypes.array,
	href: PropTypes.string,
};

export default UpdatesList;
