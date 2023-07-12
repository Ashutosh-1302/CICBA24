import React from 'react';

export default function contact() {
  return (
    <div className="flex flex-col bg-gray-50 h-screen">
      <div
        className="p-4 flex items-center justify-center pb-4 shadow-sm"
        style={{ alignItems: "flex-end" }}
      >
        <div className="text-left pl-0">
          <h2 className="text-xl font-semibold">Paper Submission Guideline</h2>
        </div>
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="bg-white p-6">
          <h2>
            Full papers (Up to 15 pages in the one-column page format without author information, must be submitted through Easy Chair portal).
          </h2>
          <a
            className="text-blue-600 text-3xl font-bold pt-6"
            href="http://www.springer.com/computer/lncs?SGWID=0-164-6-793341-0"
          >
            Formatting Guidelines: http://www.springer.com/computer/lncs?SGWID=0-164-6-793341-0
          </a>
        </div>
      </div>
    </div>
  );
}
