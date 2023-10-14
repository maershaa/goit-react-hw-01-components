import PropTypes from "prop-types"
import css from 'components/Friends/FriendList.module.css'
import  FriendListItem from './FriendListItem'

const FriendList = ({ friends }) => {
  return (
      <ul className={css.friendList}>
          
          {friends.map(({ id, isOnline, avatar, name }) => (
              <FriendListItem
                  key={id}
                  isOnline={isOnline}
                  avatar={avatar}
                  name={name}
              />
              ))}
          
        </ul>
    )
}




export default FriendList

FriendList.propTypes = {
friends: PropTypes.array.isRequired,
}
