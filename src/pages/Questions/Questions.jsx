import '../../App.css';
import Leftbar from '../../components/sidebar/Leftbar';
import RightSidebar from '../../components/sidebar/Rightbar';
import HomeMainbar from '../../components/Homeinterface/Homemainbar';

const Questions = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <Leftbar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Questions;
