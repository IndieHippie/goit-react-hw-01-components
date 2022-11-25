import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
// import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="friend-item" key={friend.id}>
          <FriendListItem
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
