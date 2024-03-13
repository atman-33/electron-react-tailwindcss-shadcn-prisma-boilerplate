import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="m-8 flex flex-col items-center space-y-8">
      <h1 className="text-center text-4xl font-bold">
        Electron React Tailwindcss Shadcn Prisma Boilerplate
      </h1>

      <div>{process.env.NODE_ENV}</div>
      <Link to="/debug">
        <Button variant="secondary" className="w-full justify-start">
          Debug Room
        </Button>
      </Link>

      <h2 className="text-center text-xl font-bold">Sample Applications</h2>

      <Link to="/bulletin">
        <Button variant="default" className="w-full justify-start">
          Bulletin
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
