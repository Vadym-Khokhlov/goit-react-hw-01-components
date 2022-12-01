import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Friends, FriendPanel, FriendPanelHeading } from './FriendList.styled';
import { FriendCard } from 'components/FriendListItem/FriendListItem.styled';

export function FriendList({ friends }) {
  return (
    <Friends>
      <FriendPanelHeading>Friends List</FriendPanelHeading>
      <FriendPanel>
        {friends.map(friend => (
          <FriendCard key={friend.id}>
            <FriendListItem friends={friend} />
          </FriendCard>
        ))}
      </FriendPanel>
    </Friends>
  );
}

// Profile.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.number.isRequired,
//   };
