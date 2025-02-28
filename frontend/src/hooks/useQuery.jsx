import { useState } from 'react';

const useQuery = (queryFunction) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const executeQuery = async () => {
    setLoading(true);
    try {
      const result = await queryFunction();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, executeQuery };
};

export default useQuery;
