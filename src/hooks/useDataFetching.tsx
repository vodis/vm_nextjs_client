import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { origin } from "../../config/host.json";

const useDataFetching = (url: string, method: string, headers: any) => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      switch (method) {
        case "POST":
          console.log(url);
          try {
            const data = await fetch(`${origin}/${url}`, {
              method,
              headers
            });
            const json = await data.json();
            setResults(json);
          } catch (error) {
            setLoading(false);
            setError(error.message);
          }
        default:
          setLoading(true);
      }

      setLoading(false);
    }

    fetchData();
  }, [url]);

  return {
    loading,
    results,
    error
  };
};

export default useDataFetching;
