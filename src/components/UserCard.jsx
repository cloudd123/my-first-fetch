import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function UserCard({ user }) {
  console.log(user);
  return (
    <Link to={`/user/${user.id}`} >    <div>
      <h2>{user.username}</h2>
    </div>
    </Link>

  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    address: PropTypes.shape({
      geolocation: PropTypes.shape({
        lat: PropTypes.string,
        long: PropTypes.string,
      }),
      city: PropTypes.string,
      street: PropTypes.string,
      number: PropTypes.number,
      zipcode: PropTypes.string,
    }),
    id: PropTypes.number,
    email: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    name: PropTypes.shape({
      firstname: PropTypes.string,
      lastname: PropTypes.string,
    }),
    phone: PropTypes.string,
  }),
};

export default UserCard;
