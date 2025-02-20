import { use } from 'react';
import { ColorContext } from '../page';

interface MessageProps {
  greeting: string;
}

function Message({ greeting }: MessageProps) {
  const color = use(ColorContext);

  return <p style={{ color }}>{greeting}</p>;
}

export default Message;
