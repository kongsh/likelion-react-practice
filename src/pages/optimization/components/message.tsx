interface MessageProps {
  greeting: string;
  color?: string;
}

function Message({ greeting, color }: MessageProps) {
  return <p style={{ color }}>{greeting}</p>;
}

export default Message;
