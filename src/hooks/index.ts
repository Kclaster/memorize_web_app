// External Dependencies
import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

// Local Typings
export interface UseTextFieldProps {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  value: string;
}

// Exports
export const useTextField = (initialValue = ''): UseTextFieldProps => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const handleReset = () => {
    setValue(initialValue);
  };

  return {
    onChange: handleChange,
    onReset: handleReset,
    value,
  };

};

// TODO: Add password validation here
export const usePasswordField = (initialValue = ''): UseTextFieldProps => {
  const textField = useTextField(initialValue);

  return {
    ...textField,
  };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
interface UseFetcherOptions<Response> {
  apiRequest: (...args: any) =>
    Promise<AxiosResponse<Response>> | AxiosResponse<Response>;
  onError?: (err: any) => void;
  onSuccess?: (response: Response) => void;
  stopLoadingOnError?: boolean;
  stopLoadingOnSuccess?: boolean;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

interface UseFetcherWithErrorHandlingOptions<Response> extends UseFetcherOptions<Response> {
  expectedErrorKeys?: string[];
  itemId?: string;
}

export interface UseFetcher<Response> {
  data: Response | null;
  error: object | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchData: (...args: any) => Promise<void>;
  loading: boolean;
}

export function useFetcher<Response>({
  stopLoadingOnError = true,
  stopLoadingOnSuccess = true,
  ...options
}: UseFetcherOptions<Response>): UseFetcher<Response> {
  const [data, setData] = useState<Response | null>(null);
  const [error, setError] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function fetchData(...args: any) {
    setLoading(true);

    try {
      const response = await options.apiRequest(...args);
      setData(response.data);

      if (options.onSuccess) {
        await options.onSuccess(response.data);
      }

      if (stopLoadingOnSuccess) {
        setLoading(false);
      }
    } catch (err) {
      setError(err);

      if (options.onError) {
        await options.onError(err);
      }

      if (stopLoadingOnError) {
        setLoading(false);
      }
    }
  }

  return {
    data,
    error,
    fetchData,
    loading,
  };
}

export function useFetcherWithErrorHandling<Response>(
  {
    ...fetcherOptions
  }: UseFetcherWithErrorHandlingOptions<Response>
): UseFetcher<Response> {
  const data = useFetcher<Response>(fetcherOptions);

  useEffect(() => {
    if (data.error) {
      // TODO: Add an error handler.
      console.error(data.error);
    }
  }, [data.error]);

  return data;
}