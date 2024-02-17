import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SampleLayout from '../_components/layout';

const BulleinBoardPage = () => {
  return (
    <SampleLayout>
      <div>BulleinBoardPage</div>
      <FontAwesomeIcon icon={faPen} className="mr-2 h-6 w-6" />
    </SampleLayout>
  );
};

export default BulleinBoardPage;
