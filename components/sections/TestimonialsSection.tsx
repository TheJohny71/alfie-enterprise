import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "HR Director",
      company: "TechCorp Inc",
      image: "/api/placeholder/64/64",
      content: "Alfie transformed how we manage leave. The smart suggestions and team sync features are game-changers."
    },
    {
      name: "James Wilson",
      role: "Engineering Lead",
      company: "DevFlow",
      image: "/api/placeholder/64/64",
      content: "The best leave management tool we've used. It's intuitive, powerful, and actually makes planning time off enjoyable."
    },
    {
      name: "Elena Rodriguez",
      role: "Operations Manager",
      company: "Global Systems",
      image: "/api/placeholder/64/64",
      content: "Enterprise-grade features with a consumer-grade experience. Alfie is exactly what we needed."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Loved by teams worldwide
          </h2>
          <p className="text-gray-600 text-lg">
            Join thousands of teams already managing leave smarter with Alfie
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white rounded-2xl p-8 shadow-xl"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200" />
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-display font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
