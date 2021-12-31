import { SearchIcon } from "@heroicons/react/outline";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import MarvelApiListCard from "./MarvelApiListCard";
import MarvelApiMain from "./MarvelApiMain";
function MarvelApiBody() {
  const [marvelList, setMarvelList] = useState([]);
  const [search, setSearch] = useState("");
  const HandleSearch = (e) => {
    e.preventDefault();
    FetchMarvel(search);
  };

  const FetchMarvel = async (query) => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/series?title=${query}&ts=1&apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY}&hash=5bc5651c68b34b21e75514b05a3badc8`
      )
      .then((res) => setMarvelList(res.data.data.results));
  };

  return (
    <div className="flex z-0 h-full my-10 items-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className="relative w-11/12 mx-auto h-full  rounded-xl shadow-2xl shadow-black">
        <img
          className="absolute h-full w-full rounded-xl brightness-[.2] object-cover  -z-[1] "
          src="https://wallpaperaccess.com/full/1835991.jpg"
          alt=""
        />
        <div className="text-white flex justify-center opacity-95 my-5">
          <motion.h1
            whileHover={{
              color: "#c91b1b",
              transition: { type: "tween", stiffness: 400 },
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="font-bold text-4xl cursor-pointer">
            Marvel Api
          </motion.h1>
        </div>

        <div className="flex h-[40rem] md:h-[37rem] xl:h-[37rem] 2xl:h-[29rem]">
          <MarvelApiMain
            HandleSearch={HandleSearch}
            search={search}
            marvelList={marvelList}
            setSearch={setSearch}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default MarvelApiBody;
