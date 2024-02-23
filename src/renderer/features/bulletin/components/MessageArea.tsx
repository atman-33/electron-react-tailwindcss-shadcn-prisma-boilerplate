import { Textarea } from '@/components/ui/textarea';
import { bulletinSelectors } from '../stores/bulletinState';

type Props = {
  message: string;
  setMessage: (message: string) => void;
};

const MessageArea = ({ message, setMessage }: Props) => {
  const bulletin = bulletinSelectors.useGetBulletin(0);

  return (
    <Textarea
      style={{
        backgroundColor: `${bulletin?.isEditing ? 'lightyellow' : 'white'}`,
        borderColor: `${bulletin?.isEditing ? 'red' : 'black'}`,
        fontSize: '18px',
        fontWeight: 'bold',
        color: `${bulletin?.isEditing ? 'red' : 'blue'}`,
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
