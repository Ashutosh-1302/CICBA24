import React from "react";
import Confrence from "./Confrence";

export default function TracksTopic() {
  return (
    <>
      <div className=" bg-white-200 pl-4 flex flex-row md:flex-row w-full">
        <div className="flex flex-row w-full ">
          <div className="flex flex-row ">
            <div className=" flex-1 text-white text-center overflow-hidden text-5xl mb-2 m-2 mt-11 py-4 rounded-lg ">
              <div className="bg-sky-600 -m-4 rounded-xl " >
                <p className="bg-white-300 text-xl">TRACKS & TOPIC</p>
              </div>
              <div className="text-xl text-bold text-black py-5 flex m-3">
                <div className="flex flex-col">
                  <div className="text-left">
                    Computer Intelligence
                    <div className="text-sm p-2">
                      <ol type="1">
                        <li>Fuzzy Systems</li>
                        <li>Machine Learning</li>
                        <li>Evolutionary Computation</li>
                        <li>Hybridization in Computational Intelligence</li>
                      </ol>
                    </div>
                  </div>
                  <div className="p-4">
                    Theories and Application to Data Communication and Analytics
                  </div>
                </div>
              </div>
            </div>
            <div className=" text-white text-center  mt-11 overflow-hidden text-5xl py-4 pt-px-[169px] px-40 m-4 max-w-fit rounded-xl h-40">
              <div className=" bg-sky-600 -m-4  rounded-xl">
                <p className="bg-white-300 text-xl">NEWS UPDATE</p>
              </div>
              <div className="text-xl m-8 text-black">
                <a href="/">Download Call for Paper of CICBA-2023</a>
              </div>
              <div className="text-xl  text-black">
                <a href="/">Detailed Review Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
