import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [productId]);
  console.log(product);
  return (
    <>
      {product ? (
        <div className="product-card-details">
          <h2 className="product-title-details">{product.title}</h2>
          <img
            className="product-image-details"
            src={product.image}
            alt={product.title}
          />
          <div>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>
              Rating: {product.rating?.rate} (from {product.rating?.count}{" "}
              reviews)
            </p>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}{" "}
    </>
  );
}
export default ProductDetails;
