import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';
import { Link } from 'react-router-dom';

const DebugLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-4 flex flex-col space-y-4">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbLink asChild>
              <Link to="/debug">Debug Top</Link>
            </BreadcrumbLink>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DebugLayout;
