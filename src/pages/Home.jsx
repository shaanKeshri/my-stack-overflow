import '../App.css';
import HomeMainbar from '../components/Homeinterface/Homemainbar';
import Leftbar from '../components/sidebar/Leftbar';
import Rightbar from '../components/sidebar/Rightbar';

const Home = () => {
  return (
    <div className="home-container-1">
      <Leftbar />
      <HomeMainbar />
      <div className="home-container-2">
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
