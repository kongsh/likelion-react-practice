interface StatusProps {
  message: string;
}

function Status({ message }: StatusProps) {
  return <div>{message}</div>;
}

export default Status;
