import React from "react";
import NewCampaign from ''


const CampaignBase = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewCampaign />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CampaignBase;
