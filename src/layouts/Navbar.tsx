import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import * as Separator from '@radix-ui/react-separator';
import {
  getStorageItem,
  deleteStorageItem,
  setStorageItem,
} from '@/utils/storage';
import { Avatar, Dropdown, NavigationButton } from '@/components';
import IconButton from '@/components/IconButton';

export default () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = '';
  const [darkMode, setDarkMode] = useState(
    getStorageItem('darkMode') ? true : false
  );
  const [open, setOpen] = useState(false);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <header
        className={`flex ${
          open ? 'items-start' : 'items-center'
        } justify-between bg-white p-2 drop-shadow-lg dark:bg-black dark:shadow-dark dark:drop-shadow-lg md:items-center`}
      >
        {/* Logo */}
        <Link
          to={location.pathname.includes('user') ? 'user' : '/'}
          className={`p-1`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
            id='feedback'
            className='h-14 w-14'
          >
            <path
              fill={darkMode ? 'white' : 'black'}
              d='M6 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-7C4.3 3 3 4.3 3 6s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z'
            ></path>
            <path
              fill={darkMode ? 'white' : 'black'}
              d='M6 8c-.5 0-1-.2-1.4-.6-.2-.2-.2-.5 0-.7s.5-.2.7 0c.4.4 1 .4 1.4 0 .2-.2.5-.2.7 0s.2.5 0 .7C7 7.8 6.5 8 6 8z'
            ></path>
            <circle
              cx='4.8'
              cy='5'
              r='.5'
              fill={darkMode ? 'white' : 'black'}
            ></circle>
            <circle
              cx='7.3'
              cy='5'
              r='.5'
              fill={darkMode ? 'white' : 'black'}
            ></circle>
            <path
              fill={darkMode ? 'white' : 'black'}
              d='M6 20c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-7c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z'
            ></path>
            <path
              fill={darkMode ? 'white' : 'black'}
              d='M7.1 17.5H4.9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H7c.3 0 .5.2.5.5s-.2.5-.4.5z'
            ></path>
            <circle
              cx='4.8'
              cy='15'
              r='.5'
              fill={darkMode ? 'white' : 'black'}
            ></circle>
            <circle
              cx='7.3'
              cy='15'
              r='.5'
              fill={darkMode ? 'white' : 'black'}
            ></circle>
            <path
              fill={darkMode ? 'white' : 'black'}
              d='M6 30c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-7c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z'
            ></path>
            <path
              fill={darkMode ? 'white' : 'black'}
              d='M7.1 28c-.1 0-.3 0-.4-.1-.4-.4-1-.4-1.4 0-.2.2-.5.2-.7 0s-.2-.5 0-.7c.7-.7 2.1-.7 2.8 0 .2.2.2.5 0 .7-.1.1-.2.1-.3.1z'
            ></path>
            <circle
              cx='4.8'
              cy='25'
              r='.5'
              fill={darkMode ? 'white' : 'black'}
            ></circle>
            <circle
              cx='7.3'
              cy='25'
              r='.5'
              fill={darkMode ? 'white' : 'black'}
            ></circle>
            <path
              fill={darkMode ? 'white' : 'black'}
              d='M17.5 9h-5c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h5c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5zM13 8h4V4h-4v4z'
            ></path>
            <path
              fill={darkMode ? 'white' : 'black'}
              d='M15.4 7.5c-.1 0-.3 0-.4-.1L13.6 6c-.2-.2-.2-.5 0-.7s.5-.2.7 0l1.1 1.1 3.2-3.2c.2-.2.5-.2.7 0s.2.5 0 .7l-3.5 3.5c-.1 0-.2.1-.4.1zM17.5 19h-5c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h5c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5zM13 18h4v-4h-4v4zm4.5 11h-5c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h5c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5zM13 28h4v-4h-4v4zm16.5-3h-9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5s-.2.5-.5.5zm-3 2h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5zm3-12h-9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5s-.2.5-.5.5zm-3 2h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5zm3-12h-9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5s-.2.5-.5.5zm-3 2h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5z'
            ></path>
          </svg>
        </Link>

        {/* Links */}
        {(!location.pathname.includes('user') && (
          <ul
            className={`${
              open ? 'mt-16 flex flex-col space-y-4' : 'hidden'
            } md:mt-0 md:flex md:h-7 md:grow md:flex-row md:space-y-0`}
          >
            <li className={`mx-10 capitalize text-black dark:text-white`}>
              <Link to='/' onClick={() => setOpen(false)}>
                home
              </Link>
            </li>
            <li className={`mx-10 capitalize text-black dark:text-white`}>
              <Link to='features' onClick={() => setOpen(false)}>
                features
              </Link>
            </li>
            <li className={`mx-10 capitalize text-black dark:text-white`}>
              <Link to='pricing' onClick={() => setOpen(false)}>
                pricing
              </Link>
            </li>
            <Separator.Root
              decorative
              className='bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full dark:bg-white md:hidden '
            />
            {(!token && (
              <li
                className={`mx-10 font-bold capitalize text-black hover:text-primary dark:text-primary md:hidden`}
              >
                <Link to='account/login' onClick={() => setOpen(false)}>
                  login
                </Link>
              </li>
            )) ||
              null}
            {(!token && (
              <li
                className={`mx-10 font-bold capitalize text-black hover:text-primary dark:text-primary md:hidden`}
              >
                <Link to='account/signup' onClick={() => setOpen(false)}>
                  signup
                </Link>
              </li>
            )) ||
              null}
            {(token && !location.pathname.includes('user') && (
              <li
                className={`mx-10 font-bold capitalize text-black hover:text-primary dark:text-primary md:hidden`}
              >
                <Link to='user/dashboard' onClick={() => setOpen(false)}>
                  dashboard
                </Link>
              </li>
            )) ||
              null}
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
          <ul
            className={`${
              location.pathname.includes('user')
                ? 'flex items-center'
                : 'hidden'
            } h-7 px-4 md:flex md:items-center`}
          >
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
          <div
            className={`${
              location.pathname.includes('user') ? 'hidden' : 'ml-4'
            } md:hidden`}
          >
            <IconButton current={open} action={setOpen}>
              {open ? (
                <svg
                  width='28'
                  height='28'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z'
                    fill={darkMode ? 'white' : 'black'}
                    fillRule='evenodd'
                    clipRule='evenodd'
                  ></path>
                </svg>
              ) : (
                <svg
                  width='28'
                  height='28'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z'
                    fill={darkMode ? 'white' : 'black'}
                    fillRule='evenodd'
                    clipRule='evenodd'
                  ></path>
                </svg>
              )}
            </IconButton>
          </div>
        </div>
      </header>
      {/* Outlet for the all the pages */}
      <Outlet />
    </div>
  );
};
