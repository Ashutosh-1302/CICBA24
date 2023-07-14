"use client"
import { React, useState } from "react";
import Layout from "@/components/Layout";
import Holder from "@/components/CoverPageComponents/Holder";
import Carousely from "@/components/CoverPageComponents/Carousely";
import TracksTopic from "@/components/Tracks/Tracks&Topic";
import { Confrence } from "@/components/Confrence";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="p-3 text-center">
          {/* Links */}
        </div>

        <Carousely />

        <div className="m-auto text-center w-5/6 lg:w-5/6 md:w-full ">
          <TracksTopic />
          <Confrence />
        </div>

        {/* Additional content specific to the home page */}
      </Layout>
    </>
  );
}
