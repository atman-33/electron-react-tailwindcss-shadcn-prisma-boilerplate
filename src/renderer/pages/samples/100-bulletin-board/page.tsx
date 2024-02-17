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
          className="flex h-12 w-12 transform items-center justify-center rounded-full bg-green-400 shadow-lg hover:translate-y-0.5 hover:bg-green-500 hover:shadow-sm"
        >
          <FontAwesomeIcon icon={faPen} className="h-6 w-6" />
        </button>
      </SampleLayout>
    </RecoilProvider>
  );
};

export default BulleinBoardPage;
