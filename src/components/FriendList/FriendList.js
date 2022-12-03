import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Friends, FriendPanel, FriendPanelHeading } from './FriendList.styled';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <Friends>
      <FriendPanelHeading>Friends List</FriendPanelHeading>
      <FriendPanel>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </FriendPanel>
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
