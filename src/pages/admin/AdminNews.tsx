import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Pencil, Trash2, Plus, X, LogOut } from 'lucide-react';
import { newsService } from '../../services/newsService';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import type { NewsItem } from '../../types/news';

const newsSchema = z.object({
  title: z.string().min(1, 'El título es requerido'),
  excerpt: z.string().min(1, 'El resumen es requerido'),
  content: z.string().min(1, 'El contenido es requerido'),
  image: z.string().url('Debe ser una URL válida'),
  author: z.string().min(1, 'El autor es requerido'),
  date: z.string().min(1, 'La fecha es requerida')
});

type NewsFormData = z.infer<typeof newsSchema>;

const AdminNews: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>(newsService.getAllNews());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsFormData>({
    resolver: zodResolver(newsSchema)
  });

  const refreshNews = () => {
    setNews(newsService.getAllNews());
  };

  const onSubmit = (data: NewsFormData) => {
    if (editingNews) {
      newsService.updateNews(editingNews.id, data);
    } else {
      newsService.addNews(data);
    }
    refreshNews();
    closeModal();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta noticia?')) {
      newsService.deleteNews(id);
      refreshNews();
    }
  };

  const openModal = (newsItem?: NewsItem) => {
    if (newsItem) {
      setEditingNews(newsItem);
      reset(newsItem);
    } else {
      setEditingNews(null);
      reset({
        title: '',
        excerpt: '',
        content: '',
        image: '',
        author: '',
        date: new Date().toISOString().split('T')[0]
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingNews(null);
    reset();
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Administrar Noticias</h1>
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Nueva Noticia
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Cerrar Sesión
            </motion.button>
          </div>
        </div>

        <div className="grid gap-6">
          {news.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.excerpt}</p>
              </div>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => openModal(item)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Pencil className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {editingNews ? 'Editar Noticia' : 'Nueva Noticia'}
                </h2>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Título
                  </label>
                  <input
                    {...register('title')}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resumen
                  </label>
                  <textarea
                    {...register('excerpt')}
                    rows={2}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  {errors.excerpt && (
                    <p className="text-red-500 text-sm mt-1">{errors.excerpt.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contenido
                  </label>
                  <textarea
                    {...register('content')}
                    rows={6}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  {errors.content && (
                    <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    URL de la Imagen
                  </label>
                  <input
                    {...register('image')}
                    type="url"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  {errors.image && (
                    <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Autor
                  </label>
                  <input
                    {...register('author')}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  {errors.author && (
                    <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha
                  </label>
                  <input
                    {...register('date')}
                    type="date"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                  )}
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    {editingNews ? 'Guardar Cambios' : 'Crear Noticia'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNews;