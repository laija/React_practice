import { Tooltip } from "antd";
import PropTypes from "prop-types";

function Tooltips({
	promptText,
	backgroundColor,
	visibleonReload,
	alignment,
	paragraph,
}) {
	return (
		<div className="generalContainer">
			<br />
			<Tooltip
				title={promptText}
				color={backgroundColor}
				defaultVisible={visibleonReload}
				placement={alignment}
			>
				<span>{paragraph}</span>
			</Tooltip>
		</div>
	);
}

Tooltips.propTypes = {
	promptText: PropTypes.string,
	backgroundColor: PropTypes.string,
	visibleonReload: PropTypes.bool,
	alignment: PropTypes.string,
	paragraph: PropTypes.string,
};

export default Tooltips;
