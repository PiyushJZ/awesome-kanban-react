import { ReactNode } from 'react';

type IconButtonProps = {
  children: ReactNode;
  action: Function;
  current: boolean;
};

const IconButton = ({ children, action, current }: IconButtonProps) => {
  return (
    <button className='h-7 w-7 rounded-full' onClick={() => action(!current)}>
      {children}
    </button>
  );
};

export default IconButton;
