import React, { useState, useEffect } from "react";
import PageContainer from "../../components/PageContainer";
import AppTable from "../../components/AppTable";

function Products() {
  const [products, setProducts] = useState([]);

  // Get all products when the page is rendered
  useEffect(() => {
    fetch("http://localhost:3090/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <PageContainer>
      <h2>Products</h2>
      <AppTable tableData={products} />
    </PageContainer>
  );
}

export default Products;
