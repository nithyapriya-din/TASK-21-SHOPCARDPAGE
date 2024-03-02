import React from "react";
import Data from "../data/data.json";
import "./Premium.css";
import { FaCheck } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

const Premium = () => {
  console.log(Data);
  return (
    <div className="Card">
      <div className="CardContents">
        {Data.datas.map((item) => {
          return (
            <div key={item.type} className="CardItems">
              <p className="CardType">{item.type}</p>
              <h1 className="CardTitle">{item.title}</h1>
              <div>
                {item.available.map((items, index) => {
                  return (
                    <div key={index} className="AvailableDetails">
                      <FaCheck />
                      {items}
                    </div>
                  );
                })}
                {item.notavailable.map((items, index) => {
                  return (
                    <div key={index} className="NotAvialableCardDetails">
                      <FaRegTimesCircle />
                      {items}
                    </div>
                  );
                })}
              </div>
              <br />
              <button className="CardBtn">{item.button}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Premium;
