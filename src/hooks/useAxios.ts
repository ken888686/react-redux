import { useEffect, useState } from 'react';
import axios from 'axios';

function createInstance() {
  return axios.create({
    baseURL: 'https://fakestoreapi.com/',
  });
}

export function useAxiosGet<T>(
  url: string,
  loadOnStart: boolean = true,
): {
  loading: boolean;
  data: T | undefined;
  error: string;
  sendRequest: () => Promise<void>;
} {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState('');

  const sendRequest = async () => {
    setLoading(true);
    try {
      const instance = createInstance();
      const responseData = (await instance.get<T>(url)).data;
      setError('');
      setData(responseData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loadOnStart) {
      sendRequest();
    } else {
      setLoading(false);
    }
    return () => {};
  }, []);

  return {
    loading,
    data,
    error,
    sendRequest,
  };
}

export function useAxiosPost() {}
