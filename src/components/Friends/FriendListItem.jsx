import PropTypes from "prop-types"
import css from 'components/Friends/FriendList.module.css'



 const FriendListItem = ({ id, avatar, name, isOnline = false }) => {
    
   //  Если isOnline равно true, цвет фона будет зеленым (#005700), в противном случае - красным (#820000).
   const spanStatus = isOnline ? "#005700" : "#820000";
  const spanStatusStyles = {
  backgroundColor: spanStatus
   }
   
   
   return (
               <li className={css.item} key={id}>
              <span className={css.status} style={spanStatusStyles}> {isOnline} </span>
              <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
              <p className={css.name}>{ name }</p>
        </li>
    )
 }





export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};