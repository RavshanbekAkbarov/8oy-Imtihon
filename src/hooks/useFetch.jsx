import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch("http://localhost:3000/data");
      const data = await req.json();
      setData(data);
    };

    fetchData();
  }, []);

  return { data };
};
