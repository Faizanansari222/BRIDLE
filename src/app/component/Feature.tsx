import React from "react";
import { data } from "../dashboard/page";

function Feature() {
  return (
    <>
      {" "}
      <div className="mx-8">
        <h1 className="text-xl  font-semibold mt-10  ">
          Featured Events
        </h1>
        <div className="flex flex-row  justify-center">
          <div className=" flex flex-row overflow-y-auto scrollbar-thin  gap-3 py-4">
            {data.featuredEvent.map((item) => {
              return (
                <>
                  <div className=" flex items-center ">
                    <a
                      href="#"
                      className="flex w-64 flex-row h-28 bg-white items-center border border-gray-200 rounded-lg shadow   dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="w-24">
                        <img
                          className=" w-full rounded-t-lg  "
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-between p-5">
                        <h5 className=" mb-1 font-semibold tracking-tight text-sm  text-gray-900 dark:text-white">
                          {item.title}
                        </h5>
                        <span className="mb-1 text-gray-500 flex text-xs gap-1 items-center">
                          <svg
                            className=" w-4 h-4 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill="currentColor"
                              d="M8.5 2a.5.5 0 0 1 .5.5v4.025A5 5 0 0 1 13.475 11H17.5a.5.5 0 0 1 0 1h-4.025A5 5 0 0 1 9 16.475V17.5a.5.5 0 0 1-1 0v-1.025A5 5 0 0 1 3.525 12H2.5a.5.5 0 0 1 0-1h1.025A5 5 0 0 1 8 6.525V2.5a.5.5 0 0 1 .5-.5M4.531 12A4 4 0 0 0 8 15.47V12zM8 11V7.531A4 4 0 0 0 4.531 11zm1 1v3.47A4 4 0 0 0 12.47 12zm3.47-1A4 4 0 0 0 9 7.531V11z"
                            />
                          </svg>
                          <p className="">{item.company}</p>
                        </span>
                        <span className="text-gray-500 flex text-xs gap-1 items-center">
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M9 11H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V9h14z"
                            />
                          </svg>
                          <p className="">{item.validation}</p>
                        </span>
                      </div>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
