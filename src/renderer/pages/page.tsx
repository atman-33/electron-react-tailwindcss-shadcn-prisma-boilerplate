import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const links = [
  '/debug/001-electron-config',
  '/debug/002-env',
  '/debug/003-prisma-sqlite',
  '/debug/004-timer',
  '/debug/005-suspense',
  '/bulletin',
];

const HomePage = () => {
  return (
    <>
      <h1 className="m-8 text-3xl">
        Electron React Tailwindcss Shadcn Prisma Boilerplate
      </h1>

      <div className="ml-8">{process.env.NODE_ENV}</div>

      <div className="m-8 flex flex-col space-y-4 ">
        {links.map((link) => (
          <Link key={link} to={link}>
            <Button variant="default" className="w-full justify-start">
              {link}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
