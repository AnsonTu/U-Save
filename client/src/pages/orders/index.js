import React, { useState, useEffect } from "react";
import PageContainer from "../../components/PageContainer";
import AppTable from "../../components/AppTable";

function Orders() {
  const [orders, setOrders] = useState([]);

  // Get all orders when the page is rendered
  useEffect(() => {
    fetch("http://localhost:3090/orders")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <PageContainer>
      <h2>Orders</h2>
      <AppTable tableData={orders} />
    </PageContainer>
  );
}
export default Orders;
