import { Rate } from "antd";
import PropTypes from "prop-types";

function Ratings({ halfRatings, defaultRating, readOnly }) {
	return (
		<div className="generalContainer">
			<Rate
				allowHalf={halfRatings}
				defaultValue={defaultRating}
				disabled={readOnly}
			/>
		</div>
	);
}

Ratings.propTypes = {
	halfRatings: PropTypes.bool,
	defaultRating: PropTypes.number,
	readOnly: PropTypes.bool,
};

export default Ratings;
