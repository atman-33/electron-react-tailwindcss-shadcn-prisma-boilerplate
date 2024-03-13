import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="m-4 flex space-x-2">
        <Link to="/">
          <Button variant="link">← Go back home</Button>
        </Link>
      </div>
      <div className="m-6">{children}</div>
    </>
  );
};

export default Layout;
