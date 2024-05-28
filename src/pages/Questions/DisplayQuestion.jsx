import Leftbar from '../../components/sidebar/Leftbar';
import RightSidebar from '../../components/sidebar/Rightbar';
import QuestionsDetails from './QuestionsDetails';

const DisplayQuestion = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <Leftbar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <QuestionsDetails />
        <RightSidebar />
      </div>
    </div>
  );
};

export default DisplayQuestion;
