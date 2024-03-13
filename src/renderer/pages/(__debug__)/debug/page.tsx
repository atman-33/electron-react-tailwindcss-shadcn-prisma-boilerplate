import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const links = [
  '/debug/001-electron-config',
  '/debug/002-env',
  '/debug/003-prisma-sqlite',
  '/debug/004-timer',
  '/debug/005-suspense',
];

const DebugPage = () => {
  return (
    <div className="m-4">
      <Link to="/">
        <Button variant="link">← Go back home</Button>
      </Link>

      <div className="flex flex-col space-y-4 ">
        {links.map((link) => (
          <Link key={link} to={link}>
            <Button variant="secondary" className="w-full justify-start">
              {link}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DebugPage;
