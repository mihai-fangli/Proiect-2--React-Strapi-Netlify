import axios from 'axios';

const strapiApi = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337',
  headers: {
    'Content-Type': 'application/json',
    ...(import.meta.env.VITE_STRAPI_TOKEN && {
      Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
    }),
  },
});

export const getArticles = async () => {
  const response = await strapiApi.get('/api/articles?populate=*');
  return response.data;
};

export const getAbout = async () => {
  const response = await strapiApi.get('/api/about?populate=*');
  return response.data;
};

export const getArticleBySlug = async (slug) => {
  const response = await strapiApi.get(`/api/articles?filters[slug][$eq]=slug&populate=*`);
  return response.data;
};
export const getCategories = async () => {
  const response = await strapiApi.get('/api/categories?populate=*');
  return response.data;
};

export default strapiApi;
