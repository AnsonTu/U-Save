import React from "react";
import PageContainer from "../../components/PageContainer";
import GoalsCard from "../../components/Cards/GoalsCard";
import NameCard from "../../components/Cards/NameCard";
import MembersCard from "../../components/Cards/MembersCard";
import TechCard from "../../components/Cards/TechCard";
function Home() {
  return (
    <PageContainer>
      <h2>Home</h2>
      <NameCard />
      <br />
      <MembersCard />
      <br />
      <GoalsCard />
      <br />
      <TechCard />
    </PageContainer>
  );
}

export default Home;
