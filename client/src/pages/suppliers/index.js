import React, { useState, useEffect } from "react";
import PageContainer from "../../components/PageContainer";
import AppTable from "../../components/AppTable";

function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);

  // Get all suppliers when the page is rendered
  useEffect(() => {
    fetch("http://localhost:3090/suppliers")
      .then((response) => response.json())
      .then((data) => {
        setSuppliers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <PageContainer>
      <h2>Suppliers</h2>
      <AppTable tableData={suppliers} />
    </PageContainer>
  );
}
export default Suppliers;
