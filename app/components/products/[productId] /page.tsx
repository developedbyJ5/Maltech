import { useRouter } from 'next/router';
import jsonData from '../data/data.json'; // Assuming your JSON data is in a file called data.json

const ProductDetailPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  // Find the product in JSON data based on productId
  const product = jsonData.find(item => item.id === parseInt(productId));

  return (
    <div>
      {product && (
        <div className="">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
