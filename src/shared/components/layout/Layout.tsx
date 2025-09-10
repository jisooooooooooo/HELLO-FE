import { Outlet } from 'react-router-dom';
import { type ReactNode } from 'react';

type LayoutProps = { header?: ReactNode; children?: ReactNode };

const Layout = ({ header, children }: LayoutProps) => {
  return (
    <>
      <header>{header}</header>
      <main>{children ?? <Outlet />}</main>
    </>
  );
};

export default Layout;
