import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Friends, FriendPanel, FriendPanelHeading } from './FriendList.styled';
import { FriendCard } from 'components/FriendListItem/FriendListItem.styled';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <Friends>
      <FriendPanelHeading>Friends List</FriendPanelHeading>
      <FriendPanel>
        {friends.map(friend => (
          <FriendCard key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </FriendCard>
        ))}
      </FriendPanel>
    </Friends>
  );
}

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
