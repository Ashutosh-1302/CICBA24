"use client"
import { React, useState } from "react";
import Layout from "@/components/Layout";
import Holder from "@/components/CoverPageComponents/Holder";
import Carousely from "@/components/CoverPageComponents/Carousely";
import TracksTopic from "@/components/Tracks/Tracks&Topic";
import { Conference } from "@/components/Conference";

export default function Home() {
  return (
    <>
      <Layout>
        
<div className="flex flex-col items-center">
         
          <div className="w-full md:w-5/6 lg:w-3/4">
            <div className="m-auto text-center">
              <TracksTopic />
              <Conference />
            </div>
          </div>
        </div>

        {/* Additional content specific to the home page */}
      </Layout>
    </>
  );
}
