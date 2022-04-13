import { Breadcrumb } from "antd";
import "material-icons/iconfont/material-icons.css";
import PropTypes from "prop-types";

function Breadcrumbs({
	item1,
	item2,
	item3,
	item4,
	item5,
	separator,
	iconColor,
	dynamicIcon1,
	dynamicIcon2,
}) {
	return (
		<Breadcrumb separator={separator}>
			<Breadcrumb.Item>
				<span
					className="material-icons span-icons"
					style={{
						color: `${iconColor}`,
					}}
				>
					{dynamicIcon1}
				</span>
				{item1}
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<span
					className="material-icons span-icons"
					style={{
						color: `${iconColor}`,
					}}
				>
					{dynamicIcon2}
				</span>
				{item2}
			</Breadcrumb.Item>
			<Breadcrumb.Item>{item3}</Breadcrumb.Item>
			<Breadcrumb.Item>{item4}</Breadcrumb.Item>
			<Breadcrumb.Item>{item5}</Breadcrumb.Item>
		</Breadcrumb>
	);
}

Breadcrumbs.propTypes = {
	item1: PropTypes.string,
	item2: PropTypes.string,
	item3: PropTypes.string,
	item4: PropTypes.string,
	item5: PropTypes.string,
	separator: PropTypes.string,
	dynamicIcon1: PropTypes.string,
	dynamicIcon2: PropTypes.string,
	iconColor: PropTypes.string,
};

export default Breadcrumbs;
