import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SaveButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 hover:shadow-sm"
    >
      <FontAwesomeIcon icon={faSave} className="h-5 w-5" />
    </button>
  );
};

export default SaveButton;
