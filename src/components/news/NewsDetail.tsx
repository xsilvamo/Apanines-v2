import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { newsService } from '../../services/newsService';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const news = id ? newsService.getNewsById(id) : null;

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Noticia no encontrada</h2>
          <button
            onClick={() => navigate('/noticias')}
            className="text-blue-600 hover:text-blue-800 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a noticias
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <button
          onClick={() => navigate('/noticias')}
          className="text-blue-600 hover:text-blue-800 flex items-center mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a noticias
        </button>

        <motion.img
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          src={news.image}
          alt={news.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
          
          <div className="flex items-center space-x-6 text-gray-500 mb-8">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {format(new Date(news.date), "d 'de' MMMM, yyyy", { locale: es })}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {news.author}
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {news.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.article>
    </div>
  );
};

export default NewsDetail;