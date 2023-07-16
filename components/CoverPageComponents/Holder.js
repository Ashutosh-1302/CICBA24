import React from "react";

export default function Holder() {
  return (
    <div
    className="flex justify-center items-flex-end "
    >
      <div
        className="pt-6 p-4 shadow-sm shadow-gray-800 justify-center mx-auto relative flex flex-row  flex-wrap flex-auto gap-x-44 sm:gap-y-44"
        style={{ display: "inline-flex" }}
      >
        <div>
          <img
            src="./Assets/springer-logo.png"
            alt="Springer Logo"
          />
        </div>
        <div
          className="flex flex-row pr-4"
          style={{ textAlign: "center", border: "none", paddingRight: "25px" }}
        >
          <img
            src="./Assets/cicba.png"
            alt="CICBA Logo"
            style={{ height: "100px", width: "101px" }}
          />
          <img
            src="./Assets/logo.png"
            alt="NITP Logo"
            style={{ height: "108px", width: "105px" }}
          />
        </div>
        <div>
          <img
            src="./Assets/ccis_logo.png"
            alt="CCIC Image"
          />
        </div>
      </div>
    </div>
  );
}
