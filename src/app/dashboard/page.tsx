import React from "react";
import SideBar from "../component/SideBar";
import Header from "../component/Header";
import Feature from "../component/Feature";
import Filter from "../component/filter";

export const data = {
  featuredEvent: [
    {
      title: "Underground Bull Riders membership",
      company: "Bull Ring",
      validation: "Jan 1 - Dec 31, 2024",
      image:
        "https://t3.ftcdn.net/jpg/03/34/28/72/360_F_334287230_vePVjwHMkgTpEPShmc10tg3SoKzzCX2x.jpg",
    },
    {
      title: "Underground Bull Riders membership",
      company: "Bull Ring",
      validation: "Jan 1 - Dec 31, 2024",
      image:
        "https://t3.ftcdn.net/jpg/03/34/28/72/360_F_334287230_vePVjwHMkgTpEPShmc10tg3SoKzzCX2x.jpg",
    },
    {
      title: "Underground Bull Riders membership",
      company: "Bull Ring",
      validation: "Jan 1 - Dec 31, 2024",
      image:
        "https://t3.ftcdn.net/jpg/03/34/28/72/360_F_334287230_vePVjwHMkgTpEPShmc10tg3SoKzzCX2x.jpg",
    },
    {
      title: "Underground Bull Riders membership",
      company: "Bull Ring",
      validation: "Jan 1 - Dec 31, 2024",
      image:
        "https://t3.ftcdn.net/jpg/03/34/28/72/360_F_334287230_vePVjwHMkgTpEPShmc10tg3SoKzzCX2x.jpg",
    },
    {
      title: "Underground Bull Riders membership",
      company: "Bull Ring",
      validation: "Jan 1 - Dec 31, 2024",
      image:
        "https://t3.ftcdn.net/jpg/03/34/28/72/360_F_334287230_vePVjwHMkgTpEPShmc10tg3SoKzzCX2x.jpg",
    },
    {
      title: "Underground Bull Riders membership",
      company: "Bull Ring",
      validation: "Jan 1 - Dec 31, 2024",
      image:
        "https://t3.ftcdn.net/jpg/03/34/28/72/360_F_334287230_vePVjwHMkgTpEPShmc10tg3SoKzzCX2x.jpg",
    },
  ],
  events: [
    {
      title: "BHA - Kickoff to new Ownership",
      description: "Rim Rock Riders, 17037 Alfaifa Rd, Powell Butte",
      date: "27",
      month: " FEB",
    },
    {
      title: "BHA - Kickoff to new Ownership",
      description: "Rim Rock Riders, 17037 Alfaifa Rd, Powell Butte",
      date: "27",
      month: " FEB",
    },
    {
      title: "BHA - Kickoff to new Ownership",
      description: "Rim Rock Riders, 17037 Alfaifa Rd, Powell Butte",
      date: "27",
      month: " FEB",
    },
    {
      title: "BHA - Kickoff to new Ownership",
      description: "Rim Rock Riders, 17037 Alfaifa Rd, Powell Butte",
      date: "27",
      month: " FEB",
    },
    {
      title: "BHA - Kickoff to new Ownership",
      description: "Rim Rock Riders, 17037 Alfaifa Rd, Powell Butte",
      date: "27",
      month: " FEB",
    },
    {
      title: "BHA - Kickoff to new Ownership",
      description: "Rim Rock Riders, 17037 Alfaifa Rd, Powell Butte",
      date: "27",
      month: " FEB",
    },
    {
      title: "BHA - Kickoff to new Ownership",
      description: "Rim Rock Riders, 17037 Alfaifa Rd, Powell Butte",
      date: "27",
      month: " FEB",
    },
    {
      title: "BHA - Kickoff to new Ownership",
      description: "Rim Rock Riders, 17037 Alfaifa Rd, Powell Butte",
      date: "27",
      month: " FEB",
    },
    {
      title: "BHA - Kickoff to new Ownership",
      description: "Rim Rock Riders, 17037 Alfaifa Rd, Powell Butte",
      date: "27",
      month: " FEB",
    },
  ],
};

function Dashboard() {
  return (
    <div className="h-screen">
      <div className="grid bg-[#fbfbfb] grid-cols-12">
        <div className=" sm:col-span-3 md:col-span-3 lg:col-span-2 hidden sm:block">
          <SideBar />
        </div>
        <div className="col-span-12 sm:col-span-9 md:col-span-9 lg:col-span-10">
          <Header />
          <Feature/>
          <Filter/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
