import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import NewsCard from '../components/news/NewsCard';
import NewsDetail from '../components/news/NewsDetail';
import { newsService } from '../services/newsService';

const NewsPage: React.FC = () => {
  useEffect(() => {
    newsService.initialize();
  }, []);

  const news = newsService.getAllNews();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="pt-20">
            {/* Hero Section */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative h-[40vh] bg-gradient-to-r from-indigo-600 to-blue-600"
            >
              <div className="h-full flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                  >
                    Noticias
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl max-w-2xl mx-auto"
                  >
                    Mantente al día con nuestras últimas novedades y eventos
                  </motion.p>
                </div>
              </div>
            </motion.section>

            {/* News Grid */}
            <section className="py-20">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                  {news.map((item) => (
                    <NewsCard key={item.id} news={item} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        }
      />
      <Route path=":id" element={<NewsDetail />} />
    </Routes>
  );
};

export default NewsPage;