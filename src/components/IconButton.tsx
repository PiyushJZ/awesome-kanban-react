type IconButtonProps = {
  children: string;
  action: Function;
};

const IconButton = ({ children, action }: IconButtonProps) => {
  return (
    <button className='h-7 w-7 rounded-full' onClick={() => action}>
      {children}
    </button>
  );
};

export default IconButton;
