import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-4">
      <div className="flex space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
