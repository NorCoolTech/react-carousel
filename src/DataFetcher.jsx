// DataFetcher.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetcher = ({ onDataFetched, accessKey }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.unsplash.com/photos/", {
          params: {
            client_id: accessKey,
            count: 10,
          },
        });

        const formattedData = response.data.map((item) => ({
          id: item.id,
          image: item.urls.regular,
          name: item.user.name,
          title: item.user.name,
          quote:
            item.user.bio || item.description || "No description available",
        }));

        onDataFetched(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return null;
};

export default DataFetcher;
