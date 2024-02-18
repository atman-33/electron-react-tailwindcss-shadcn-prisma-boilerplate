import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const links = [
  '/samples/001-electron-config',
  '/samples/002-env',
  '/samples/003-prisma-sqlite',
  '/samples/004-timer',
  '/samples/101-bulletin',
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
              {link.replace('/samples/', '')}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
