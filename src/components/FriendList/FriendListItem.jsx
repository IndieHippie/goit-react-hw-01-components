import PropTypes from 'prop-types';
// import css from './FriendList.module.css';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
