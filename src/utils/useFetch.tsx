import { useState, useEffect } from "react";
import { IData, IError, IMeta } from "../interfaces";
import { requestWithAuth, requestWithoutAuth } from "./requestMethods";

const useFetch = (url: string, isAdmin: boolean = false) => {
  const [data, setData] = useState<IData[]>([] as IData[]);
  const [meta, setMeta] = useState<IMeta>({} as IMeta);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<IError>({} as IError);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        if (isAdmin) {
          const tempData = await requestWithAuth(url);
          setData(tempData.data.data);
          setMeta(tempData.data.meta);
        } else {
          const tempData = await requestWithoutAuth(url);
          setData(tempData.data.data);
          setMeta(tempData.data.meta);
        }
        setError((prevState) => ({ ...prevState, message: "" }));
        setIsLoading(false);
      } catch (err: any) {
        setIsLoading(false);
        setError((prevState) => ({ ...prevState, message: err.message }));
      }
    };

    fetchPosts();
  }, [isAdmin, url]);
  return { meta, data, isLoading, error };
};

export default useFetch;
