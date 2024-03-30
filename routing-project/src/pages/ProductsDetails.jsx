import { useParams,Link } from "react-router-dom";
const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <>
      <h2>Products Details !{productId}</h2>
      <button><Link to={'..'}>Back To Home</Link></button>
    </>
  );
};
export default ProductDetails;
