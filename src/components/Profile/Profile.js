import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileImage,
  ProfileName,
  ProfileInfo,
  ProfileWrap,
  StatsCard,
  StatsInfo,
} from './Profile.styled';
import { HiEye, HiHeart, HiUserGroup, HiLocationMarker } from 'react-icons/hi';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileWrap>
      <ProfileCard>
        <ProfileImage
          src={avatar}
          alt="User avatar"
          className="avatar"
          width="120"
        />

        <ProfileName className="name">{username}</ProfileName>
        <ProfileInfo className="tag">@{tag}</ProfileInfo>
        <ProfileInfo className="location">
          <HiLocationMarker size={20} color={`silver `} />
          {location}
        </ProfileInfo>

        <StatsCard>
          <StatsInfo>
            <HiUserGroup size={42} color={`#ffa577`} />
            <span className="quantity">{stats.followers}</span>
          </StatsInfo>
          <StatsInfo>
            <HiEye size={42} color={`#D55448`} />
            <span className="quantity">{stats.views}</span>
          </StatsInfo>
          <StatsInfo>
            <HiHeart size={42} color={`#896E69 `} />
            <span className="quantity">{stats.likes}</span>
          </StatsInfo>
        </StatsCard>
      </ProfileCard>
    </ProfileWrap>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
