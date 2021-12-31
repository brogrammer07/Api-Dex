import { SearchIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { useState } from "react";
import Api from "./api";

const productData = [
  {
    header: "Weather Api",
    img: "https://media.istockphoto.com/photos/black-brick-wall-background-texture-dark-masonry-picture-id915097804?b=1&k=20&m=915097804&s=170667a&w=0&h=tWu_L3KysRE2q63VYx0LVkPojHmTKTj5TITlh2wMI7g=",
    para: "Retrieve instant, accurate weather information for any location in the world in lightweight JSON format",
    lnk: "/product/api/weatherapi",
    delay: 1.7,
  },
  {
    header: "Jikan Api",
    img: "https://media.istockphoto.com/photos/black-brick-wall-picture-id680888484?b=1&k=20&m=680888484&s=170667a&w=0&h=NPMFEcHoTZ8oVWQDGcH5FcCJSzck1Pel2HBeEvnSJBI=",
    para: "Jikan (時間) is an open-source PHP & REST API for the “most active online anime + manga community and database” — MyAnimeList.net.",
    lnk: "/product/api/jikanapi",
    delay: 2.1,
  },
  {
    header: "Travel Advisor Api",
    img: "https://media.istockphoto.com/photos/brick-wall-picture-id457551271?b=1&k=20&m=457551271&s=170667a&w=0&h=hXyRt_9Z5dcpHO6rr5XV2iumCBPS9TGomKrPbFvF-LM=",
    para: "This API helps to query realtime Flights prices, Hotels booking, Restaurants, Attracting locations, etc… to create a travelling site like tripadvisor.com",
    lnk: "/product/api/travelAdvisorapi",
    delay: 2.5,
  },
  {
    header: "Marvel Api",
    img: "https://media.istockphoto.com/photos/modern-futuristic-neon-lights-on-old-grunge-brick-wall-room-3d-picture-id1151380473?b=1&k=20&m=1151380473&s=170667a&w=0&h=Lxnh4XAlt7nwKyXtxsF0bIICAJjDT5spu3X4AB17qhI=",
    para: "The Marvel Comics API allows developers everywhere to access information about Marvel's vast library of comics—from what's coming up, to 70 years ago.",
    lnk: "/product/api/marvelapi",
    delay: 1.3,
  },
];

function ProductBody() {
  const [search, setSearch] = useState("");
  return (
    <div className="h-full mx-auto mt-16  md:mx-5 lg:mx-16 space-y-16 z-0 overflow-y-scroll scrollbar-hide">
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 1.3, duration: 3 }}
        className="space-x-2 flex mx-2 sm:mx-auto lg:mx-2">
        <motion.div className="flex rounded-md px-3 bg-white py-2 w-9/12 lg:w-11/12">
          <SearchIcon className="h-6 pr-2 bg-white" />
          <input
            type="text"
            className="w-full outline-none"
            placeholder="Search a product..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </motion.div>
        <button className="bg-red-500 px-2 py-1 w-3/12 lg:w-1/12 rounded-md cursor-pointer hover:scale-110 transition-all duration-200 text-white">
          Search
        </button>
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:mx-2">
        {productData
          .filter((product) => {
            if (search == "") {
              return product;
            } else if (
              product.header.toLowerCase().includes(search.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => {
            return (
              <motion.div
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  delay: product.delay,
                  duration: 3,
                }}
                className="">
                <Api
                  header={product.header}
                  img={product.img}
                  para={product.para}
                  lnk={product.lnk}
                />
              </motion.div>
            );
          })}
      </motion.div>
    </div>
  );
}

export default ProductBody;
