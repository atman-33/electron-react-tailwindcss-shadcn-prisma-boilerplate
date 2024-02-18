import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CancelButton = ({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onClick()}
      className={`flex h-10 w-10 items-center justify-center rounded-full  text-white shadow-lg  hover:shadow-sm ${disabled ? 'bg-destructive/50 hover:bg-destructive/40' : 'bg-destructive hover:bg-destructive/90'}`}
    >
      <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
    </button>
  );
};

export default CancelButton;
