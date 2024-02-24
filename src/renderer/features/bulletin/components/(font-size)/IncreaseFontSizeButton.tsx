import icon from '@assets/icons/font-size-increase-icon.svg';
import { useFontSizeDispatcher } from '../../hooks/useFontSizeDispatcher';

const IncreaseFontSizeButton = () => {
  const { increaseFontSize } = useFontSizeDispatcher();
  return (
    <button type="button" onClick={() => increaseFontSize()}>
      <img width="24" height="24" src={icon} alt="increase font size" />
    </button>
  );
};

export default IncreaseFontSizeButton;
