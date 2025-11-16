import type { NextPage } from "next";
import React from "react";

import PortfolioLayout from "../components/PortfolioLayout/PortfolioLayout";
import Resume from "../components/Resume/Resume";

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title="Pranesh | Résumé">
      <Resume />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
