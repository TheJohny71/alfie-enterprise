export interface NavItem {
  title: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: any; // You might want to make this more specific based on your icon library
}

export interface Testimonial {
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
}
