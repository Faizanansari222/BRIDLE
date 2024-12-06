import { data } from "@/app/dashboard/page";
import React from "react";
import BadgeBtn from "@/app/component/badgeBtn";

function Filter() {
  return (
    <>
      <div className="hidden mx-5 md:flex lg:flex item-center text-sm text-[#434343] gap-1  my-7">
        <div className="flex text-sm  rounded-md">
          <button className="border-2 px-2 rounded-l-md hover:bg-[#f7f6f7] transition-all transform ease-in-out duration-100">
            All
          </button>
          <button className="border-t-2  px-2 border-b-2 border-r-2 hover:bg-[#f7f6f7] transition-all transform ease-in-out duration-100">
            Live
          </button>
          <button className="border-2 px-2 border-l-0 rounded-l-none  rounded-md hover:bg-[#f7f6f7] transition-all transform ease-in-out duration-100">
            Upcomming
          </button>
        </div>
        <div className="flex    rounded-md">
          <button className="border-2 px-2  rounded-md flex items-center font-semibold">
            Location{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m7 10l5 5l5-5"
              />
            </svg>
          </button>
        </div>
        <div className="flex   rounded-md">
          <button className="border-2  px-2 rounded-md flex justify-center items-center font-semibold gap-1">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7 14v-2h10v2zm0 4v-2h7v2zm-2 4q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"
              />
            </svg>
            Event Date
          </button>
        </div>
        <div className="flex items-center gap-1 bg-white  text-smp-2  px-2 border-2 rounded-md">
          <svg
            className="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none" fillRule="evenodd">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"
              />
            </g>
          </svg>
          <input
            className="outline-none w-full"
            type="text"
            placeholder="search by event name.."
            name=""
            id=""
          />
        </div>
      </div>
      <div className="mt-10 p-3">
      {data.events.map((item) => {
        return (
          <>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-7  items-center ">
              <div className="flex mb-5  items-center m-auto justify-around">
                <div className="flex items-center gap-10 sm:gap-16    md:justify-around w-full">
                  <div className="flex items-center gap-2">
                    <div className=" w-12 h-12  flex-col text-center items-center justify-center bg-[#ededed] rounded-lg text-black">
                      <div className="font-semibold text-sm text-purple-600">
                        {item.month}
                      </div>
                      <span className="font-semibold text-xl">{item.date}</span>
                    </div>
                    <div>
                      <h1 className="font-semibold text-sm md:text-base">{item.title}</h1>
                      <p className="text-xs md:text-sm text-[#7a7a7a]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <BadgeBtn />
                </div>
              </div>
              <div className="flex mb-5  items-center m-auto justify-around">
                <div className="flex items-center gap-10 sm:gap-16  md:justify-around w-full">
                  <div className="flex items-center gap-2">
                    <div className=" w-12 h-12  flex-col text-center items-center justify-center  bg-[#f7f6f7] lg:bg-[#ededed] rounded-lg text-black">
                      <div className="font-semibold text-sm text-green-600">
                        {item.month}
                      </div>
                      <span className="font-semibold text-xl">{item.date}</span>
                    </div>
                    <div>
                      <h1 className="font-semibold text-sm md:text-base">{item.title}</h1>
                      <p className="text-xs md:text-sm text-[#7a7a7a]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <BadgeBtn />
                </div>
              </div>
            </div>
          </>
        );
      })}
      </div>
    </>
  );
}

export default Filter;
