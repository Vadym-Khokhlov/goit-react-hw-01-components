import {
  FriendCard,
  FriendImage,
  FriendName,
  IsOnline,
} from './FriendListItem.styled';
import PropTypes from 'prop-types';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendCard>
      <FriendImage src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
      {isOnline && <IsOnline>online</IsOnline>}
    </FriendCard>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
