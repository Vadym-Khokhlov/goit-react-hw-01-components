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
          class="avatar"
          width="120"
        />

        <ProfileName class="name">{username}</ProfileName>
        <ProfileInfo class="tag">@{tag}</ProfileInfo>
        <ProfileInfo class="location">
          <HiLocationMarker size={10} color={`silver `} />
          {location}
        </ProfileInfo>

        <StatsCard>
          <StatsInfo>
            <HiUserGroup size={24} color={`#ffa577`} />
            <span class="quantity">{stats.followers}</span>
          </StatsInfo>
          <StatsInfo>
            <HiEye size={24} color={`#D55448`} />
            <span class="quantity">{stats.views}</span>
          </StatsInfo>
          <StatsInfo>
            <HiHeart size={24} color={`#896E69 `} />
            <span class="quantity">{stats.likes}</span>
          </StatsInfo>
        </StatsCard>
      </ProfileCard>
    </ProfileWrap>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
