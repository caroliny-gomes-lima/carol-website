import React from "react";
import { useGlobalLoading } from "context/loading/LoadingContext";

export function useFetch<T>(request: () => Promise<T>) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<Boolean>(false);
  const [error, setError] = React.useState<String | null>(null);
  const { startLoading, stopLoading } = useGlobalLoading();

  const execute = async () => {
    try {
      startLoading();
      setLoading(true);
      setError(null);

      const response = await request();
      setData(response);
    } catch (err: any) {
      const message =
        err?.response?.data?.message || err?.message || "Erro inesperado!";
      setError(message);
    } finally {
      stopLoading();
      setLoading(false);
    }
  };

  React.useEffect(() => {
    execute();
  }, []);

  return { data, loading, error, refetch: execute };
}
