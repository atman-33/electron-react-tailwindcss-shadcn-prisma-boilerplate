import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1 className="text-3xl m-8">
        Electron React Tailwindcss Shadcn Prisma Boilerplate
      </h1>
      <div className="flex flex-col space-y-4 m-8 ">
        <Link to="/001-electron-config">
          <Button variant="default" className="w-full">
            Electron Config
          </Button>
        </Link>
        <Link to="/002-prisma-sqlite">
          <Button variant="default" className="w-full">
            Prisma SQLite
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
