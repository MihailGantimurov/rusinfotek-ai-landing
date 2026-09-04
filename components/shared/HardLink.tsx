import type { AnchorHTMLAttributes, ReactNode } from 'react';

type HardLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  children: ReactNode;
  href: string;
};

export function HardLink({ children, href, ...props }: HardLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
