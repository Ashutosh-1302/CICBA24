"use client";
import { React, useState } from "react";
import Layout from "@/components/Layout";
import Holder from "@/components/CoverPageComponents/Holder";
import Carousely from "@/components/CoverPageComponents/Carousely";
import Footer from "@/components/CoverPageComponents/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TracksTopic from "@/components/Tracks/Tracks&Topic";
import { Confrence } from "@/components/Confrence";
import Commitee from "@/components/Commitee/Commitee";
import Chairs from "@/components/Commitee/Chairs";
import ProgramCommitee from "@/components/Commitee/ProgramCommitee";
import TPC from "@/components/Commitee/TPC";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="p-3 text-center">
          <a
            className="block text-xl text-orange-900 font-semibold hover:text-blue-900 pt-2"
            target="_blank"
            href="/"
          >
            Presentation Template
          </a>
          <a
            className="block text-xl text-green-500 font-semibold hover:text-blue-900 pt-2"
            target="_blank"
            href="http://www.cicba.in/cicba2023/CICBA%202023%20ORAL%20List.pdf"
          >
            List of papers accepted for oral presentation
          </a>
          <a
            className="block text-xl text-violet-900 font-semibold hover:text-blue-900 pt-2"
            target="_blank"
            href="http://www.cicba.in/cicba2023/CICBA2023_Acceptedand_Registered_Papers.pdf"
          >
            List of Accepted And Registered Papers
          </a>
          <a
            className="block text-xl text-red-600 font-semibold hover:text-blue-900 pt-2"
            target="_blank"
            href="http://www.cicba.in/cicba2023/CICBA%202023%20Program%2027%20Jan.pdf"
          >
            Program Schedule
          </a>
        </div>

        <Carousely />
        <div className="m-auto border-2 text-center w-3/4 lg:w-3/4 md:w-full">
          <div className="text-center">
            <TracksTopic />
          </div>
          <div>
            <Confrence />
          </div>
        </div>
        {/* Additional content specific to the home page */}
      </Layout>
    </>
  );
}
