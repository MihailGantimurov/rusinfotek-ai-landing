type LogoProps = {
  className?: string;
  inverse?: boolean;
};

export function Logo({ className = 'h-[28px] w-auto sm:h-[30px]', inverse = false }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt="РусИнфоТек"
      className={className}
      height="118"
      src={inverse ? '/brand/logo-white.png' : '/brand/logo-black.png'}
      width="874"
    />
  );
}
