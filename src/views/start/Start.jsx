import React, { useState, useEffect } from 'react';
import View from '../../components/common/viewTemplate';

import ProductCard from '../../components/views/start/productCard';

import fetchy from '../../utils/fetchy';
import query from '../../graphql/queries/products';

const Start = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetchy(query);
      if (!res.ok) return;
      setProducts(res.data.data.products);
    };
    fetchProducts();
  }, []);

  const Products = () =>
    products.map(({ _id, productTitle, productDescription, price, shop }) => (
      <ProductCard
        key={_id}
        title={productTitle}
        description={productDescription}
        price={price}
        shop={shop}
        id={_id}
      />
    ));

  return (
    <View>
      <Products />
    </View>
  );
};

export default Start;
