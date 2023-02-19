import axios from "axios";
import React, { useEffect, useState } from "react";

const DailyDeals = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    async function getResults() {
      const result = await axios(
        "https://api.hiring.masterkey.tech/api/v1/product/get"
      );
      setData(result.data.products);
    }
    getResults();
  }, []);
  return (
    <div>
      <div>
        {data.map((item) => {
          return (
            <div className="flex">
              <img src={item.picture} className="w-12 h-12" />
              <p>{item.name}</p>
              <p>Price ${item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyDeals;
