import { Avatar, Badge } from "antd";
import PropTypes from "prop-types";
import { UserOutlined } from "@ant-design/icons";

function Avatars({
	avatarLetter,
	avatarSize,
	avatarURL,
	badgeNumber,
	avatarShape,
	backgroundColor,
}) {
	return (
		<div>
			<div className="avatar-row-1">
				<br />
				<Avatar
					style={{
						backgroundColor: `${backgroundColor}`,
					}}
					icon={<UserOutlined />}
					shape={avatarShape}
				/>
				<Avatar
					style={{
						backgroundColor: `${backgroundColor}`,
					}}
					shape={avatarShape}
				>
					{avatarLetter}
				</Avatar>
				<Avatar
					style={{
						backgroundColor: `${backgroundColor}`,
					}}
					size={avatarSize}
				>
					USER
				</Avatar>
				<Avatar
					style={{
						backgroundColor: `${backgroundColor}`,
					}}
					src={avatarURL}
				/>
			</div>
			<div>
				<span className="avatar-item">
					<Badge count={badgeNumber}>
						<Avatar shape={avatarShape} icon={<UserOutlined />} />
					</Badge>
				</span>
				<span>
					<Badge dot>
						<Avatar shape={avatarShape} icon={<UserOutlined />} />
					</Badge>
				</span>
			</div>
		</div>
	);
}

Avatars.propTypes = {
	avatarLetter: PropTypes.string,
	avatarSize: PropTypes.number,
	avatarURL: PropTypes.string,
	badgeNumber: PropTypes.number,
	avatarShape: PropTypes.string,
	backgroundColor: PropTypes.string,
};

export default Avatars;
