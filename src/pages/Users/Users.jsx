import './Users.css';
import Leftbar from '../../components/sidebar/Leftbar';
import UsersList from './UsersList';

const Users = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <Leftbar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2" style={{ marginTop: '30px' }}>
        <h1 style={{ fontWeight: '400' }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
