import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(
        "https://file.notion.so/f/f/5b638310-5a1e-44da-a320-410c29ac135b/9489b2d7-7a13-4058-8fa1-f79a6f0c5e10/data.json?table=block&id=1948b22a-1b3d-80fa-9c0a-c4820fb4b35d&spaceId=5b638310-5a1e-44da-a320-410c29ac135b&expirationTimestamp=1739368800000&signature=GyAu-uyZtU4l9W-P3w3Pr1AMfwMrL4IoKRUF9PEaSNE&downloadName=data.json"
      );
      const data = await req.json();
      setData(data);
    };

    fetchData();
  }, []);

  return { data };
};
