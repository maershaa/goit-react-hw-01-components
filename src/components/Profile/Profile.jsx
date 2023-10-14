import PropTypes from "prop-types";
import css from 'components/Profile/Profile.module.css'


// ========= Без деструктуризации (с вынесением в константу) =================================:
//  const Profile = (props) => {
//    const { username, tag, location, avatar, stats: { followers, views, likes } } = props;
//     Ваш код компонента }

// =============================  С деструктуризацией:  ====================================
   const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
    <div className={css.profile}>
  <div className={css.description}>
    <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
    />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{ tag }</p>
        <p className={css.location}>{ location }</p>
  </div>

      <ul className={css.stats}>
    <li>
          <span className={css.label}>Followers </span>
          <span className={css.quantity}>{followers}</span>
    </li>
    <li>
      <span className={css.label}>Views </span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li>
      <span className={css.label}>Likes </span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
    );
};
  
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  
  // Объект "статистика" (обязательный объект)
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

export default Profile;

