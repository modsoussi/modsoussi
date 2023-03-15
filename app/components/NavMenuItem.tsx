import type { ReactNode } from 'react';
import { Link, useLocation } from '@remix-run/react';

type NavMenuItemProps = {
  to: string,
  children: ReactNode | Array<ReactNode>,
};

const NavMenuItem = ({ to, children }: NavMenuItemProps) => {
  const location = useLocation();

  return (
    <Link 
      to={to} 
      className={`hover:text-dawn-500 transition-all duration-100 text-sm md:text-base${location.pathname.includes(to) ? ' text-dawn-500' : ''}`}>
      {children}
    </Link>
  );
}

export default NavMenuItem;