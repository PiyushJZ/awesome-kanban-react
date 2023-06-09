import { ReactNode } from 'react';

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <div className='h-pg bg-white text-black dark:bg-black dark:text-white'>
      {children}
    </div>
  );
};

export default Page;
