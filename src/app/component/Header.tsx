import Image from "next/image";
import React from "react";

import bgImg from "../assits/26488.jpg";

function Header() {
  return (
    <>
      <div className=" relative   ">
        <div className=" bg-black w-full  h-full absolute  p-5 bg-opacity-35">
          <div className=" flex items-center gap-3  mb-3 text-white font-bold">
            <span className="block sm:hidden md:hidden lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"
                />
              </svg>
            </span>
            <div className="flex items-center gap-1">
              <span className=" ">
                <svg
                  className="h-9 w-9"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M23 4c-2.043 0-3.305 1.207-4 2.156V5C3.184 5 3 27.77 3 28h4s-.016-4.875 1.531-9.688c.774-2.406 1.95-4.785 3.625-6.5S15.973 9 19 9h.625l.281-.563S20.793 6.954 22 6.313V9.25l4.094 8.188l.093.156l.125.125c.403.379.555.738.625.968c.055.168.032.165.032.188c-.028.098-.07.309-.25.594c-.219.347-.414.531-.719.531s-.5-.184-.719-.531s-.312-.719-.312-.719l-.219-.844l-.875.094s-.832.098-1.75-.156s-1.785-.703-2.156-2.094l-.344-1.281l-1.125.656c-1.293.758-2.043 1.914-2.188 3.094c-.144 1.18.204 2.316.625 3.437C17.777 23.898 19 26.184 19 28h2c0-2.621-1.465-5.055-2.219-7.063c-.375-1.003-.547-1.851-.468-2.468a1.8 1.8 0 0 1 .468-1c.762 1.191 1.805 2.035 2.813 2.312c.93.258 1.308.176 1.75.157c.09.234.062.292.25.593C24 21.184 24.804 22 26 22c1.195 0 2-.816 2.406-1.469c.407-.652.563-1.281.563-1.281l.031-.094v-.093s.008-.481-.156-1c-.137-.438-.496-.97-.969-1.5h.031L24 8.75V4zm-4.531 3.031c-.004.008-.028.024-.032.032c-.406.019-.8.039-1.187.093c-.313.043-.61.121-.906.188a10 10 0 0 1 .906-.188c.39-.066.8-.105 1.219-.125M22 12c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"
                  />
                </svg>
              </span>
              BRIDLE
            </div>
          </div>
          <div className=" text-white  w-[70%] sm:w-[60%] md:w-[60%]  space-y-2">
            <h1 className="font-semibold text-xl md:text-3xl sm:text-xl">
              Suppercharge your equine business all in one place with Bridle
            </h1>
            <p className="font-thin text-sm md:text-sm ">
              Manage horses & client, streamline finances, automate bookings &
              event, and more.
            </p>
          </div>
        </div>

        <Image
          className="w-full h-60 md:h-60 object-cover "
          src={bgImg}
          alt="asd"
        />
      </div>
      <div className="w-[100%] border-b-2 text-[#525252] font-medium flex items-center text-sm gap-5 px-5 min-h-[40px]">
        <button>All Events</button>
        <button>Save Events (2)</button>
      </div>
    </>
  );
}

export default Header;
