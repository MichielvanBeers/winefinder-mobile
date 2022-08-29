// React
import { useState } from "react";

export type requestConfig = {
  method?: string;
  headers?: {};
  body?: string;
};

export type fetchStatus = {
  loading: boolean;
  data?: any;
  error?: string;
};

const useFetch = () => {
  const [fetchStatus, setFetchStatus] = useState<fetchStatus>({
    loading: false,
    data: undefined,
    error: undefined
  });  

  const fetchData = async (url: string, requestConfig: requestConfig) => {
    setFetchStatus({
      loading: true,
    });

    fetch(url, requestConfig)
      .then((response) => {
        if (!response.ok) {return response.json()
          .then((response) => {
            throw new Error(response.detail)
          })
        }
        else {
          return response.json()
        }
      })
      .then((response) => {
        setFetchStatus({
          loading: false,
          data: response,
        });
      })
      .catch((error) => {
        setFetchStatus({
          loading: false,
          error: error,
        }
        )
      });
  };

  return {
    ...fetchStatus,
    fetchData,
  };
};

export default useFetch
