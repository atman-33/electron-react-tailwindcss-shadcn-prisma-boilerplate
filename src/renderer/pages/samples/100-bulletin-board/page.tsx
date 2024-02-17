import RecoilProvider from '@/components/providers/RecoilProvider';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SampleLayout from '../_components/layout';

const BulleinBoardPage = () => {
  return (
    <RecoilProvider>
      <SampleLayout>
        <div>BulleinBoardPage</div>
        <button
          type="button"
          className="hover:translate-y-0.5 hover:shadow-sm h-12 w-12 transform justify-center flex items-center rounded-full bg-green-400 shadow-lg hover:bg-green-500"
        >
          <FontAwesomeIcon icon={faPen} className="h-6 w-6" />
        </button>
      </SampleLayout>
    </RecoilProvider>
  );
};

export default BulleinBoardPage;
