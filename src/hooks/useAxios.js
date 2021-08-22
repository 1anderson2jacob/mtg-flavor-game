
import { useState, useEffect } from "react";
import axios from "axios";

function useApi(updateCount, url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async() => {
        try {
            // const res = await axios.get(`https://api.magicthegathering.io/v1/cards?random=true&pageSize=${numCards}&flavor=.&imageUrl=.`);
            const res = await axios.get(url);
            setData(res.data.cards);
            setIsLoading(false);
        } catch (err) {
            setError("Something went wrong");
        }
    }
    fetchData();

  }, [updateCount, url]);
// });
  return [isLoading, error, data];
//   return [isLoading, error, data];
};

export default useApi;

