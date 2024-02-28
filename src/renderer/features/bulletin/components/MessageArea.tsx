import { Textarea } from '@/components/ui/textarea';
import { bulletinSelectors } from '../stores/bulletinState';
import { fontSizeSelectors } from '../stores/fontSizeState';

type Props = {
  message: string;
  setMessage: (message: string) => void;
};

const MessageArea = ({ message, setMessage }: Props) => {
  const bulletin = bulletinSelectors.useGetBulletin(0);
  const fontSize = fontSizeSelectors.useGetFontSize();

  return (
    <Textarea
      style={{
        backgroundColor: `${bulletin?.isEditing ? 'lightyellow' : 'white'}`,
        borderColor: `${bulletin?.isEditing ? 'red' : 'black'}`,
        fontSize: `${fontSize}`,
        fontWeight: 'bold',
        color: `${bulletin?.isEditing ? 'red' : 'blue'}`,
        lineHeight: '1',
      }}
      onChange={(e) => setMessage(e.target.value)}
      value={message}
      readOnly={!bulletin?.isEditing}
      placeholder="Write something..."
      className="h-60"
    />
  );
};

export default MessageArea;
