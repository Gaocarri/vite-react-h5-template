import { useCallback, useState } from "react";

/**
 * 使用axios的钩子函数
 * fn为axios方法，如()=>axios.get('/a/b')
 */
const useAxios = <T extends object>(fun: () => Promise<T>, deps: any[]) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const doAxios = useCallback(async () => {
    try {
      const data = (await fun()) as any;
      setResponse(data.data);
    } catch (error: any) {
      setError(error.toString());
    }
  }, [...deps]);
  return {
    doAxios,
    error,
    response,
  };
};

export default useAxios;
