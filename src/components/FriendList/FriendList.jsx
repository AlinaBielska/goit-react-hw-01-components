import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => {
                return (
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                        key={friend.id}
                    />
                );
            })}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array,
}

export default FriendList;