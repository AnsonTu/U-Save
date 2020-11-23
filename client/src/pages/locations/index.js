import React, { useState, useEffect } from "react";
import PageContainer from "../../components/PageContainer";
import AppTable from "../../components/AppTable";

function Locations() {
  const [locations, setLocations] = useState([]);

  // Get all locations when the page is rendered
  useEffect(() => {
    fetch("http://localhost:3090/customers/geographic-info")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <PageContainer>
      <h2>Locations</h2>
      <AppTable tableData={locations} />
    </PageContainer>
  );
}
export default Locations;
