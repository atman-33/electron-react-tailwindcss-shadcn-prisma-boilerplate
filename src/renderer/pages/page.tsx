import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const links = [
  '/samples/001-electron-config',
  '/samples/002-env',
  '/samples/003-prisma-sqlite',
  '/samples/004-timer',
  '/samples/100-bulletin-board',
];

const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl m-8">
        Electron React Tailwindcss Shadcn Prisma Boilerplate
      </h1>

      <div className="ml-8">{process.env.NODE_ENV}</div>

      <div className="flex flex-col space-y-4 m-8 ">
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
