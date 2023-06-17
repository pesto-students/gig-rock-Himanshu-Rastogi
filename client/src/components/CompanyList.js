import React from "react";
import netflix from "./../assets/netflix.png";
import hdfc from "./../assets/hdfc.png";
import infosys from "./../assets/infosys.png";
import swiggy from "./../assets/swiggy.png";
import wipro from "./../assets/wipro.png";
import tcs from "./../assets/tcs.jpeg";

const companyList = [
  { icon: netflix, name: "netflix" },
  { icon: hdfc, name: "hdfc" },
  { icon: infosys, name: "infosys" },
  { icon: swiggy, name: "swiggy" },
  { icon: wipro, name: "wipro" },
  { icon: tcs, name: "tcs" },
];

const CompanyList = (props) => {
  const { height, weight } = props;
  const renderImage = () => {};
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: 10,
        gap: 20,
        padding: 5,
      }}
    >
      {companyList?.map((img) => {
        return (
          <div key={img.name}>
            <img
              style={{ borderRadius: 100 }}
              alt={img.name}
              src={img.icon}
              height={height || "60"}
              width={weight || "60"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CompanyList;
