"use client"
import React, { useState } from "react";
import Confrence from "../Conference";
import ExpandableList from "./ExpandableList";

export default function TracksTopic() {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-row lg:flex-row md:flex-col items-start w-full space-x-10">
      <div className="flex flex-row lg:flex-row md:flex-col items-center w-full space-x-10 pl-3 pr-3 lg:w-full md:w-1/2">
        <div className="w-full" style={{ border: "1px solid" }}>
          <div
            className="p-2 items-center bg-green-800 rounded-sm w-full flex flex-row space-x-5 lg:flex-row md:flex-col"
          >
            <div className="justify-left h-15">
              <img src="./Assets/qrcode.png" className="h-8 w-15 pl-5" />
            </div>
            <div className="h-15">
              <h2 className="text-xl font-semibold text-white text-center">
                TRACKS & TOPICS
              </h2>
            </div>
          </div>
          <div className="p-1 items-center text-left w-full flex-row space-y-3">
            <ExpandableList />
            <div className="flex flex-row">
              <div className="justify-left h-15 pt-2 pr-4">
                <img src="./Assets/rightarrow.png" className="w-8 pl-5" />
              </div>
              <div className="pb-3">
                <a className="text-blue-500 font-semibold text-l">
                  Theories and Applications to Data Communications and Analytics
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row lg:flex-row md:flex-col items-start w-full space-x-10 pl-3 pr-3 lg:w-full md:w-1/2">
        <div className="w-full" style={{ border: "1px solid" }}>
          <div
            className="p-2 items-center bg-green-800 rounded-sm w-full flex flex-row space-x-5 lg:flex-row md:flex-col"
          >
            <div className="justify-left h-15">
              <img src="./Assets/information.png" className="h-8 w-15 pl-5" />
            </div>
            <div className="h-15">
              <h2 className="text-xl font-semibold text-white text-center">
                NEWS UPDATE
              </h2>
            </div>
          </div>
          <div className="p-1 items-center text-left w-full flex-row space-y-3" style={{ position: "sticky", top: 0 }}>
            <div className="flex flex-row">
              <div className="justify-left h-15 pt-2 pr-4">
                <img src="./Assets/rightarrow.png" className="w-8 pl-5" />
              </div>
              <div>
                <a href="/CallForPaper" className="text-blue-500 font-semibold text-l"> Download Call for Paper of CICBA-2023</a>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="justify-left h-15 pt-2 pr-4">
                <img src="./Assets/rightarrow.png" className="w-8 pl-5" />
              </div>
              <div>
                <a className="text-blue-500 font-semibold text-l" href ="http://www.cicba.in/cicba2023/review_process.pdf">
                  Detailed Review Process
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
