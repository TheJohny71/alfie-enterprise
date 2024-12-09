import { Button } from '../ui/Button';

const Header: React.FC = () => {
  return (
    <header className="p-4 shadow-md flex items-center justify-between">
      <h1 className="text-xl font-bold">Alfie Enterprise</h1>
      <Button onClick={() => console.log('Header button clicked!')}>
        Log In
      </Button>
    </header>
  );
};

export default Header;
