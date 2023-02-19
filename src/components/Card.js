import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPlusbtn from "../Assets/cardPlusBtn.png";

const Card = () => {
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
    <div className="flex gap-2 flex-wrap">
      {data.slice(1, 4).map((item) => {
        return (
          <div className="flex flex-col w-[191px] gap-1 ">
            <div className="flex  h-[131px] w-[131px]">
              <img src={item.picture} className="" />
            </div>
            <p>{item.name}</p>
            <p>Price ${item.price}</p>
            <div className="flex justify-between">
              <p className="text-[#38FF4C]">* {item.ratting}</p>
              <button className=" bg-[#38FF4C] rounded">
                <img src={CardPlusbtn} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
