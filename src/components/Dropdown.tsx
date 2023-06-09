import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

type DropdownProps = {
  children: ReactNode;
  label?: string;
};

export default ({ children, label }: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className='inline-flex items-center justify-center rounded-full shadow-[0_2px_10px] shadow-blackA7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black'
          aria-label={label}
        >
          {children}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade'
          sideOffset={5}
        >
          <Link to='/'>
            <DropdownMenu.Item className='group relative flex h-[25px] select-none items-center rounded px-[5px] pl-[25px] capitalize leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1'>
              your profile
            </DropdownMenu.Item>
          </Link>
          <Link to='/'>
            <DropdownMenu.Item className='group relative flex h-[25px] select-none items-center rounded px-[5px] pl-[25px] capitalize leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1'>
              upgrade
            </DropdownMenu.Item>
          </Link>
          <Link to='/'>
            <DropdownMenu.Item className='group relative flex h-[25px] select-none items-center rounded px-[5px] pl-[25px] capitalize leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1'>
              help
            </DropdownMenu.Item>
          </Link>

          <DropdownMenu.Separator className='m-[5px] h-[1px] bg-violet6' />

          <Link to='/'>
            <DropdownMenu.Item className='group relative flex h-[25px] select-none items-center rounded px-[5px] pl-[25px] capitalize leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1'>
              settings
            </DropdownMenu.Item>
          </Link>
          <Link to='/'>
            <DropdownMenu.Item className='group relative flex h-[25px] select-none items-center rounded px-[5px] pl-[25px] capitalize leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1'>
              logout
            </DropdownMenu.Item>
          </Link>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
