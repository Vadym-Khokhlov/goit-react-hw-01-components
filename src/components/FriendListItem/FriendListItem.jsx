import { FriendCard, FriendImage, FriendName } from './FriendListItem.styled';

export function FriendListItem({ friends: { avatar, name, isOnline } }) {
  return (
    <FriendCard>
      <span class="status">{isOnline}</span>
      <FriendImage src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
}

// Profile.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.number.isRequired,
//   };
