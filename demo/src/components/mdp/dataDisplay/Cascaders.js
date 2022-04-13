import { Cascader } from "antd";
import PropTypes from "prop-types";

function Cascaders({ options, placeholderText, cascaderSize }) {
	return (
		<div className="generalContainer">
			<Cascader
				options={options}
				placeholder={placeholderText}
				size={cascaderSize}
			/>
		</div>
	);
}

Cascaders.propTypes = {
	options: PropTypes.array,
	placeholderText: PropTypes.string,
	cascaderSize: PropTypes.string,
};

export default Cascaders;
