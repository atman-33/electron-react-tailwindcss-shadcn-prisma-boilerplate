import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EditButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 hover:shadow-sm"
    >
      <FontAwesomeIcon icon={faPen} className="h-5 w-5" />
    </button>
  );
};

export default EditButton;
