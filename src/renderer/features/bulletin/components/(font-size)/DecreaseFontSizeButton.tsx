import icon from '@assets/icons/font-size-decrease-icon.svg';
import { useFontSizeDispatcher } from '../../hooks/useFontSizeDispatcher';

const DecreaseFontSizeButton = () => {
  const { decreaseFontSize } = useFontSizeDispatcher();
  return (
    <button type="button" onClick={() => decreaseFontSize()}>
      <img width="18" height="18" src={icon} alt="decrease font size" />
    </button>
  );
};

export default DecreaseFontSizeButton;
