import React from "react";
import Confrence from "../Confrence";

export default function TracksTopic() {
  return (
    <>
      <div className="bg-white flex flex-row md:flex-col w-full">
        <div className="flex flex-row md:flex-col  w-full ">
          <div className="flex flex-row ">
            <div className=" flex flex-col text-white text-left overflow-hidden text-4xl mb-2 m-2 mt-11 py-4 ">
              <div className="bg-sky-600">
                <p className="bg-white-300 text-2xl pl-3">
                  Tracks of conference(Not Limited To)
                </p>
              </div>
              <div className="text-xl font-medium text-black py-5 flex m-3">
                <div className="flex flex-col">
                  <div className="text-left">Computer Intelligence</div>
                  <div className="text-sm py-2 text-left">
                    <ol type="1">
                      <li>Fuzzy Systems</li>
                      <li>Machine Learning</li>
                      <li>Evolutionary Computation</li>
                      <li>Hybridization in Computational Intelligence</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="text-left">
                Theories and Application to Data Communication and Analytics
              </div>
            </div>
            <div className=" text-white text-center  mt-11 overflow-auto text-5xl py-4 pt-px-[169px] px-40 m-4 max-w-fit rounded-xl h-40">
              <div className=" bg-sky-600 -m-4  rounded-xl">
                <p className="bg-white-300 text-xl">NEWS UPDATE</p>
              </div>
              <div className="text-sm py-4 text-black">
                <a href="/">Download Call for Paper of CICBA-2023</a>
              </div>
              <div className="text-sm  text-black">
                <a href="/">Detailed Review Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
