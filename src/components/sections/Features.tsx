import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Smart Calendar',
      description: 'Intelligent leave management with team awareness'
    },
    {
      title: 'Team Sync',
      description: 'Seamless coordination with your team members'
    },
    {
      title: 'Quick Approval',
      description: 'Streamlined approval process for faster responses'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
