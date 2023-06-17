import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type NavigationButtonProps = {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  classProps: string;
  navigateTo?: string;
};

const NavigationButton = ({
  children,
  primary,
  secondary,
  classProps,
  navigateTo,
}: NavigationButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigateTo ? navigate(navigateTo) : navigate('.');
      }}
      className={`rounded-md p-2 capitalize text-black ${classProps} ${
        primary ? 'bg-primary' : ''
      } ${secondary ? 'bg-secondary' : ''}`}
    >
      {children}
    </button>
  );
};

export default NavigationButton;
