import * as Avatar from '@radix-ui/react-avatar';

type AvatarProps = {
  source?: string;
  altText?: string;
  fallback?: string;
};

const bgColor: string[] = [
  'bg-violet7',
  'bg-red7',
  'bg-plum7',
  'bg-purple7',
  'bg-pink7',
  'bg-blue7',
  'bg-cyan7',
  'bg-slate7',
];

export default ({ source, altText, fallback }: AvatarProps) => {
  const i = Math.floor(Math.random() * bgColor.length);
  return (
    <Avatar.Root className='inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle'>
      <Avatar.Image
        className='h-full w-full rounded-[inherit] object-cover'
        src={source}
        alt={altText}
      />
      <Avatar.Fallback
        className={`flex h-full w-full items-center justify-center ${bgColor[i]} text-[15px] text-black`}
      >
        {fallback || 'PJ'}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};
