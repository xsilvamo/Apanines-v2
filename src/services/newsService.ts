import { NewsItem } from '../types/news';

// Simulating a backend service with localStorage
const STORAGE_KEY = 'apanines_news';

const defaultNews: NewsItem[] = [
  {
    id: '1',
    title: 'Nueva Sala de Terapias',
    excerpt: 'Inauguramos una nueva sala equipada con tecnología de última generación.',
    content: `Nos complace anunciar la inauguración de nuestra nueva sala de terapias, 
    equipada con la más moderna tecnología para brindar el mejor servicio a nuestras familias.
    
    Esta nueva instalación cuenta con:
    - Equipos de estimulación sensorial
    - Área de fisioterapia
    - Espacios adaptados para terapia ocupacional
    - Zona de integración sensorial
    
    La inversión en esta nueva sala representa nuestro compromiso continuo con la calidad 
    de atención y el desarrollo integral de nuestros niños.`,
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80',
    author: 'María Rodríguez'
  },
  {
    id: '2',
    title: 'Programa de Verano 2024',
    excerpt: 'Actividades especiales y talleres para nuestras familias durante el verano.',
    content: `El programa de verano 2024 está diseñado para mantener el desarrollo y 
    aprendizaje de nuestros niños durante las vacaciones escolares.
    
    Actividades programadas:
    - Talleres de arte y creatividad
    - Sesiones de musicoterapia
    - Actividades deportivas adaptadas
    - Excursiones familiares
    
    Las inscripciones están abiertas para todas las familias de Apanines.`,
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80',
    author: 'Juan Pérez'
  },
  {
    id: '3',
    title: 'Alianza Estratégica',
    excerpt: 'Nueva colaboración con importantes instituciones educativas.',
    content: `Hemos establecido una alianza estratégica con las principales instituciones 
    educativas de la región para mejorar la inclusión y el apoyo a nuestras familias.
    
    Esta colaboración incluye:
    - Programas de capacitación para profesionales
    - Intercambio de mejores prácticas
    - Desarrollo de nuevos protocolos de atención
    - Investigación conjunta
    
    Esta alianza nos permitirá expandir nuestros servicios y mejorar la calidad de atención.`,
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80',
    author: 'Ana Martínez'
  }
];

export const newsService = {
  initialize: () => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultNews));
    }
  },

  getAllNews: (): NewsItem[] => {
    const news = localStorage.getItem(STORAGE_KEY);
    return news ? JSON.parse(news) : [];
  },

  getNewsById: (id: string): NewsItem | undefined => {
    const news = newsService.getAllNews();
    return news.find(item => item.id === id);
  },

  addNews: (newsItem: Omit<NewsItem, 'id'>): NewsItem => {
    const news = newsService.getAllNews();
    const newItem = {
      ...newsItem,
      id: Date.now().toString()
    };
    news.unshift(newItem);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(news));
    return newItem;
  },

  updateNews: (id: string, updatedItem: Partial<NewsItem>): NewsItem | null => {
    const news = newsService.getAllNews();
    const index = news.findIndex(item => item.id === id);
    if (index === -1) return null;

    news[index] = { ...news[index], ...updatedItem };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(news));
    return news[index];
  },

  deleteNews: (id: string): boolean => {
    const news = newsService.getAllNews();
    const filteredNews = news.filter(item => item.id !== id);
    if (filteredNews.length === news.length) return false;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredNews));
    return true;
  }
};