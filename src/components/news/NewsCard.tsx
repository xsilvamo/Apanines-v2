import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { NewsItem } from '../../types/news';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <motion.article
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <Link to={`/noticias/${news.id}`}>
        <div className="h-48 overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <Calendar className="w-4 h-4 mr-2" />
            {format(new Date(news.date), "d 'de' MMMM, yyyy", { locale: es })}
          </div>
          <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
          <p className="text-gray-600 mb-4">{news.excerpt}</p>
          <p className="text-sm text-gray-500">Por {news.author}</p>
        </div>
      </Link>
    </motion.article>
  );
};

export default NewsCard;