import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Overviews from "./pages/overview/Overviews";
import NewCampaign from "./pages/newcampaign/NewCampaign";
import Campaign from "./pages/campaign/Campaign";
import CampaignInfo from "./pages/campain-info/CampaignInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overviews />} />
          <Route path="/new_campaign" element={<NewCampaign />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/campaign_info" element={<CampaignInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
