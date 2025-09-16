import { useState, useEffect } from 'react';

type UseJsonFetchOptions = RequestInit | undefined;

function useJsonFetch<T = any>(
  url: string, 
  options?: UseJsonFetchOptions): [T | null, boolean, Error | null] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!url) return;

    let isCancelled = false;

    async function fetchData() {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        if (!isCancelled) {
          setData(json);
        }
      } catch (err: any) {
        if (!isCancelled) {
          setError(err);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [options, url]);

  return [data, loading, error];
}

export default useJsonFetch;
