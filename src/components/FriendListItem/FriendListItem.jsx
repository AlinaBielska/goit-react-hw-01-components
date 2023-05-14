import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline, key}) => {
    return (
        <li class="item" key={key}>
            <span class="status"></span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendListItem;