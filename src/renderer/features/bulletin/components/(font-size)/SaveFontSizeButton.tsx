import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fontSizeSelectors } from '../../stores/fontSizeState';

const SaveFontSizeButton = () => {
  const fontSize = fontSizeSelectors.useGetFontSize();
  const onClick = () => {
    console.log('save fontSize: ', fontSize);
    window.config.setItem('fontSize', fontSize);
  };

  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black hover:bg-gray-200"
    >
      <FontAwesomeIcon icon={faSave} className="h-5 w-5" />
    </button>
  );
};

export default SaveFontSizeButton;
