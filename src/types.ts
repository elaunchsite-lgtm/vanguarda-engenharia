export interface Service {
  id: string;
  title: string;
  description: string;
  fullDetails: string;
  icon: string;
  imageUrl: string;
  benefits: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'civil' | 'residencial' | 'industrial' | 'corporativo';
  location: string;
  year: string;
  area: string;
  status: 'concluido' | 'em_andamento' | 'projeto';
  description: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: 'Engenharia' | 'Arquitetura' | 'Sustentabilidade' | 'Materiais' | 'Gestão';
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  role: string;
  rating: number;
}
