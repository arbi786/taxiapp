import React from "react";
import Navbar from "../components/Navbar";
import Analytics from "../components/Analytics";

import FAQ from "../components/FAQ";

import Earning from "../components/Earning";
import Profile from "../components/Profiel";
import Transfer from "../components/Transfer";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Section>
      <Navbar />

      <div className="grid">
        <div className="row_one">
          <Analytics />
          <FAQ />
        </div>

        <div className="row_two">
          <Earning />
          <Transfer />

          <Profile />
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin-left: 20vw;
  padding: 3rem;
  height: 100%;
  background-color: black;
`;

export default Dashboard;
