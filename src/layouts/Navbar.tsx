import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  getStorageItem,
  deleteStorageItem,
  setStorageItem,
} from '@/utils/storage';
import { Avatar, Dropdown, NavigationButton } from '@/components';

export default () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = 'fsdf';
  const [darkMode, setDarkMode] = useState(
    getStorageItem('darkMode') ? true : false
  );

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <header
        className={`flex items-center justify-between bg-white p-2 drop-shadow-lg dark:bg-black dark:shadow-dark dark:drop-shadow-lg`}
      >
        {/* Logo */}
        <Link to='/' className={`p-1`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke={darkMode ? 'white' : 'black'}
            className='h-14 w-14'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122'
            />
          </svg>
        </Link>

        {/* Links */}
        {(!location.pathname.includes('user') && (
          <ul className={`flex h-7 grow`}>
            <li className={`mx-10 capitalize text-black dark:text-white`}>
              <Link to='/'>home</Link>
            </li>
            <li className={`mx-10 capitalize text-black dark:text-white`}>
              <Link to='features'>features</Link>
            </li>
            <li className={`mx-10 capitalize text-black dark:text-white`}>
              <Link to='pricing'>pricing</Link>
            </li>
            <li className={`mx-10 capitalize text-black dark:text-white`}>
              <Link to='about-us'>about us</Link>
            </li>
          </ul>
        )) ||
          null}

        <div className='flex content-center'>
          {/* Theme Switching Button */}
          <div className='h-7'>
            <button
              className='h-7 w-7 rounded-full'
              onClick={() => {
                setDarkMode(!darkMode);
                // console.log(getStorageItem(""))
                getStorageItem('darkMode')
                  ? deleteStorageItem('darkMode')
                  : setStorageItem('darkMode', 'active');
              }}
            >
              {darkMode ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='white'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                  />
                </svg>
              ) : (
                <svg
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z'
                    fill='currentColor'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  ></path>
                </svg>
              )}
            </button>
          </div>
          {/* Action to login/signup or go to dashboard */}
          <ul className={`flex h-7 items-center px-4`}>
            {(!token && (
              <Link to='account/login' className='mx-2'>
                <li className={`dark: capitalize text-black dark:text-primary`}>
                  login
                </li>
              </Link>
            )) ||
              null}
            {(!token && (
              <li className={`mx-2`}>
                <button
                  onClick={() => navigate('account/signup')}
                  className={`flex w-24 items-center justify-between bg-primary p-2 capitalize`}
                >
                  signup{' '}
                  <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                      fill='currentColor'
                      fillRule='evenodd'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
              </li>
            )) ||
              null}
            {(token && (
              <>
                {(location.pathname.includes('user') && (
                  <Dropdown>
                    <Avatar />
                  </Dropdown>
                )) ||
                  null}
                {(!location.pathname.includes('user') && (
                  <li className={`ml-2`}>
                    <NavigationButton
                      classProps='flex w-32 items-center justify-between'
                      primary
                      navigateTo='user/dashboard'
                    >
                      dashboard{' '}
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                          fill='currentColor'
                          fillRule='evenodd'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </NavigationButton>
                  </li>
                )) ||
                  null}
              </>
            )) ||
              null}
          </ul>
        </div>
      </header>
      {/* Outlet for the all the pages */}
      <Outlet />
    </div>
  );
};
