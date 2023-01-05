import { useEffect, useState } from 'react';
import axios, { isAxiosError } from 'axios';

function createInstance() {
  return axios.create({
    baseURL: 'https://fakestoreapi.com/',
  });
}

export function useAxiosGet<T>(url: string) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const sendRequest = async () => {
    try {
      const response = await createInstance().get(url);
      setData(response.data);
    } catch (err) {
      if (isAxiosError(err)) {
        setError(err.message);
      } else {
        setError(err);
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return { data, loading, error, sendRequest } as const;
}

export function useAxiosPost() {}
