// React
import { useState } from "react";

// export type requestConfig = {
//   url: RequestInfo;
//   method: string;
//   headers?: {};
//   body?: string;
// };

export type fetchStatus = {
  loading: boolean;
  error?: boolean;
  data?: any;
};

const useFetch = () => {
  const [fetchStatus, setFetchStatus] = useState<fetchStatus>({
    loading: false,
    data: "",
    error: false
  });  

  const fetchData = async (url: string) => {
    setFetchStatus({
      loading: true,
    });

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setFetchStatus({
          loading: false,
          data: response.fact,
          error: false
        });
      })
      .catch((error) => {
        // console.log(error)
        setFetchStatus({
          loading: false,
          error: true,
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
