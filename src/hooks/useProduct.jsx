import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";

const useProduct = () => {
  const { data } = useFetch();
  const { id } = useParams();

  if (!data) return { loading: true, product: null };

  const product = data.find((item) => String(item.id) === id);

  return { loading: false, product };
};

export default useProduct;
