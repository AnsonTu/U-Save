import React, { useState, useEffect } from "react";
import PageContainer from "../../components/PageContainer";
import AppTable from "../../components/AppTable";

function Customers() {
  const [customers, setCustomers] = useState([]);

  // Get all customers when the page is rendered
  useEffect(() => {
    fetch("http://localhost:3090/customers")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <PageContainer>
      <h2>Customers</h2>
      <AppTable tableData={customers} />
    </PageContainer>
  );
}
export default Customers;
