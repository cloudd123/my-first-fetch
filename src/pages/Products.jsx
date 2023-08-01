import  { useEffect, useState } from 'react';
import ProductsCard from '../components/ProductsCard'; 

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        setProducts(data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='product-container'>
      <h1>Products</h1>
      <div className='product-card-container'>
        {products.map(product => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
