import { useHttp } from '../hooks/http.hook';

const useServices = () => {
  const { request, loading, setLoading } = useHttp();

  const _apiUrl = 'https://6364bf4e7b209ece0f4ce574.mockapi.io/items?';

  const getPizzas = async (
    categoryId = 0,
    currentPage = 0,
    sort = 'rating',
    searchValue = '',
    url = _apiUrl
  ) => {
    const categoryBy = categoryId > 0 ? `&category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const orderBy = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const searchBy = searchValue ? `&search=${searchValue}` : '';

    const res = await request(
      `${url}page=${currentPage}&limit=4${categoryBy}&sortBy=${sortBy}&order=${orderBy}${searchBy}`
    );
    return res.data;
  };

  return {
    getPizzas,
    loading,
    setLoading,
  };
};

export default useServices;