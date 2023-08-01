import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function ProductsCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-card">
        <h2 className="product-title">{product.title}</h2>
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
      </div>
    </Link>
  );
}

ProductsCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }),
};

export default ProductsCard;
