import React, { useEffect, useState } from "react";
import "./Campaign.scss";
import CampaignHeader from "../../component/campaign-header/CampaignHeader";
import axios from "axios";

const Campaign = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://infinion-test-int-test.azurewebsites.net/api/Campaign")
      .then((res) => {
        setData(res.data); // set the API response data to state
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch campaign data");
      });
  }, []);
  return (
    <section>
      <CampaignHeader />
      <div>
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Campaign Name</th>
                <th>Start Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((campaign, index) => (
                <tr key={campaign.id}>
                  <td>{index + 1}</td>
                  <td>{campaign.campaignName}</td>
                  <td>{campaign.startDate}</td>
                  <td>{campaign.status}</td>
                  <td>
                    <button>View</button>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </section>
  );
};

export default Campaign;
