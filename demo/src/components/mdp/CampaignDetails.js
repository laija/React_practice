import { List, Space } from "antd";
import PropTypes from 'prop-types';



function CampaignDetails ({data, headerContent, footerContent}) {
	return (
		<List
			header={headerContent}
			footer={footerContent}
			size="small"
			style={{ background: "#fff" }}
			itemLayout="horizontal"
			dataSource={data}
			renderItem={(item) => (
				<List.Item>
					<List.Item.Meta title={item.name} />
					<div>
						<Space direction="vertical">
							<div>{item.value}</div>
							<div>{item.value2}</div>
						</Space>
					</div>
				</List.Item>
			)}
		/>
	)
}

CampaignDetails.propTypes = {
	data: PropTypes.array,
	headerContent: PropTypes.node,
	footerContent: PropTypes.node
}

export default CampaignDetails;
