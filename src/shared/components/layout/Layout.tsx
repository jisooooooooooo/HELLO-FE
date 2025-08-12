import { Outlet } from 'react-router-dom';
import { type ReactNode } from 'react';

type LayoutProps = { header?: ReactNode };

const Layout = ({ header }: LayoutProps) => {
  return (
    <>
      <header>{header}</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
