import React from "react";
import HomeTripData from "../components/Home/HomeTripData";
import { TodayTripChart } from "../components/Home/TodayTripChart";
import { WeeklyBarChart } from "../components/Home/WeeklyBarChart";
import TripDataTable from "../components/Trip/TripDataTable";
import Layout from "../Layout/Layout";

function Home() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:gap-3">
        <div className="w-full md:w-[420px] border-1 shadow-lg bg-white p-2 m-1 rounded-xl">
          <TodayTripChart />
        </div>
        <div className="w-full md:w-[572px] border-1 shadow-lg bg-white p-2 rounded-xl mt-2 md:mt-0">
          <div className="py-6 item-center flex flex-col justify-center items-center gap-8">
            <WeeklyBarChart />
          </div>
        </div>
        <div className="w-full md:w-[380px] border-1 shadow-lg bg-white p-2 rounded-xl mt-2">
          <HomeTripData />
        </div>
      </div>
      <TripDataTable />
    </Layout>
  );
}

export default Home;
