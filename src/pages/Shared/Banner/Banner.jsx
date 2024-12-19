import React from "react";
import "./Banner.css";
import { motion } from "framer-motion";
import { IoMailOpenOutline } from "react-icons/io5";
// import photo1 from "../../../assets/photo1.png"

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen banner ">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="grid grid-cols-2">
          <div className=" pl-10 text-white w-9/12 my-auto ">
            <div className=" text-left  ">
              {/* <h1 className="mb-5 text-5xl font-bold">
                To Choose Your Level Best <br />{" "}
                <span className="text-[#137a88]">Dream Career</span>.
              </h1> */}
              <motion.h1
              animate={{x:[0,50,0], color:['#ecff33',"#33ffe3",'#ff6133']}}
              
              transition={{ duration: 2, delay: 3, ease: "backInOut" ,repeat:Infinity }}
              // animate={}
              className="mb-5 text-5xl font-bold">
                To Choose Your Level Best <br />{" "}
                <span className="text-[#137a88]">Dream Career</span>.
              </motion.h1>
              <p className="mb-5">
                P2400 Peoples are daily search in this portal, 100 user added
                job portal!
              </p>
              <div className="flex gap-5  p-4 rounded-lg">
                <div className="flex items-center gap-2 border-[1px] p-2 rounded-md">
                  <span className="text-[#1edbbc] border-r-2 pr-2">
                    <IoMailOpenOutline />
                  </span>
                  <input
                    type="text"
                    placeholder="What Jobs you looking for?"
                    name="email"
                    className="input bg-transparent"
                    required
                  />
                </div>
                <div className="flex items-center gap-2 border-[1px] p-2 rounded-md">
                  <span className="text-[#1edbbc] border-r-2 pr-2">
                    <IoMailOpenOutline />
                  </span>
                  <input
                    type="text"
                    placeholder="Category"
                    name="email"
                    className="input bg-transparent "
                    required
                  />
                </div>

                {/* <input type="text" placeholder='What Jobs you looking for?' /> */}
                {/* <input type="text" placeholder="Category" /> */}
                <button className="btn">Search</button>
              </div>
            </div>
          </div>
          <div className="p-10 ">
            <div className="grid grid-cols-10 grid-rows-10 gap-4  mt-24 h-[600px]">
              {/* <!-- Photo 1 --> */}
              <motion.div
              animate={{y:[0,50,0]}} 
              transition={{ duration: 5, delay: 0, ease: "backOut" ,repeat:Infinity }}
              className="col-span-3 row-span-6 col-start-1 row-start-2">
                <img
                  src="/src/assets/photo1.jpg"
                  alt="Person 1"
                  class="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
              {/* <!-- Photo 2 --> */}
              <div className="col-span-3 row-span-2 col-start-1 row-start-8">
                <img
                  src="/src/assets/pexels-shkrabaanthony-8192195.jpg"
                  alt="Person 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* <!-- Photo 3 --> */}
              <div className="col-span-4 row-span-8 col-start-4 row-start-1">
                <img
                  src="/src/assets/photo2.jpg"
                  alt="Person 3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* <!-- Photo 4 --> */}
              <div className="bg-gray-200 rounded-lg  col-span-4 row-span-2 col-start-4 row-start-9">
                <img
                  src="/src/assets/user.jpg"
                  alt="Users Joined"
                  className="h-[107px] w-full mb-4 rounded-lg object-cover"
                />
                <p className=" relative -top-11 font-semibold text-black px-3">
                  21k Peoples Joined!
                </p>
              </div>
              {/* <!-- Statistic 1 --> */}
              <div className="bg-gray-200 text-center  rounded-lg col-span-3 row-span-3 col-start-8 row-start-2">
                <h3 className="text-2xl font-bold text-gray-800">2400+</h3>
                <p class="text-gray-600">New Job Listed!</p>
              </div>
              {/* <!-- Statistic 2 --> */}
              <div className=" rounded-lg col-span-3 row-span-5 col-start-8 row-start-5">
                <img
                  src="/src/assets/photo3.jpg"
                  alt="Person 4"
                  className="w-full h-full object-cover rounded-lg"
                />

                {/* <img
                src="/src/assets/user.jpg"
                alt="Users Joined"
                className="w-12 h-12 mb-4 rounded-lg object-cover"
              />
              <p className="text-gray-600 ">21k Peoples Joined!</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
