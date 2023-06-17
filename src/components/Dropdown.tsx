import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useClickOutsideDiv } from '@/hooks/useClickOutsideDiv';

type DropdownProps = {
  children: ReactNode;
};

export default ({ children }: DropdownProps) => {
  const { isOpen, setIsOpen, domRef } = useClickOutsideDiv();

  return (
    <div className='relative' ref={domRef}>
      <div className='rounded-full'>
        <button onClick={() => setIsOpen(!isOpen)}>{children}</button>
      </div>

      {(isOpen && (
        <div
          className='absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900'
          role='menu'
        >
          <div className='p-2'>
            <Link
              to='user/profile'
              className='block rounded-lg px-4 py-2 text-sm text-black hover:bg-slate4 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
              role='menuitem'
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>

            <Link
              to='/'
              className='block rounded-lg px-4 py-2 text-sm text-black hover:bg-slate4 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
              role='menuitem'
              onClick={() => setIsOpen(false)}
            >
              Help
            </Link>

            <Link
              to='user/settings'
              className='block rounded-lg px-4 py-2 text-sm text-black hover:bg-slate4 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
              role='menuitem'
              onClick={() => setIsOpen(false)}
            >
              Settings
            </Link>
          </div>

          <div className='p-2'>
            <Link
              to='/'
              className='flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red11 hover:bg-red3 dark:text-red9 dark:hover:bg-red-600/10'
              role='menuitem'
              onClick={() => setIsOpen(false)}
            >
              Logout
            </Link>
          </div>
        </div>
      )) ||
        null}
    </div>
  );
};
