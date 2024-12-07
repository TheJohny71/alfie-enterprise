import Button from '@/components/ui/Button';

const Features: React.FC = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Key Features</h2>
      <p className="mb-8">Discover the amazing features of Alfie Enterprise.</p>
      <Button onClick={() => console.log('Features button clicked!')}>
        Explore Features
      </Button>
    </section>
  );
};

export default Features;
