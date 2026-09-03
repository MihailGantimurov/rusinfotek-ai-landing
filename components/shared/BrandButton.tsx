import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

type BrandButtonProps = {
  children: React.ReactNode;
  href: string;
  direction?: 'down' | 'up';
  tone?: 'dark' | 'light' | 'quiet';
  className?: string;
};

export function BrandButton({
  children,
  href,
  direction = 'up',
  tone = 'dark',
  className = '',
}: BrandButtonProps) {
  const Icon = direction === 'down' ? ArrowDownRight : ArrowUpRight;
  const toneClass = {
    dark: 'border-[#203f66] bg-[linear-gradient(135deg,#17385f,#0e294b)] text-white shadow-[0_16px_38px_rgba(7,23,42,.18)]',
    light: 'border-white/65 bg-white text-[#0a2340] shadow-[0_16px_42px_rgba(3,12,30,.2)]',
    quiet: 'border-white/16 bg-white/[0.07] text-white backdrop-blur-md hover:bg-white/[0.11]',
  }[tone];

  return (
    <Link
      className={`group inline-flex min-h-14 items-stretch overflow-hidden rounded-[14px] border text-[14px] font-semibold transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 focus-visible:outline-offset-3 sm:text-[15px] ${toneClass} ${className}`}
      href={href}
    >
      <span className="flex items-center px-5 py-3 sm:px-6">{children}</span>
      <span className="grid min-w-13 place-items-center border-l border-current/12 bg-white/[0.06]">
        <Icon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
