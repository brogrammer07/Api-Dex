import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import JikanApiMain from "./JikanApiMain";
import JikanApiSidebar from "./JikanApiSidebar";

function JikanApiBody() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/tv`).then(
      (res) => res.json()
    );
    setTopAnime(temp.top.slice(0, 6));
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());
    setAnimeList(temp.results);
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <div className="flex z-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className="flex flex-col h-full lg:w-11/12 mx-auto shadow-2xl shadow-black rounded-xl  relative">
        <img
          className="absolute h-full w-full object-center -z-[1] rounded-xl brightness-75"
          src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80"
          alt=""
        />
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-4xl mt-5 backdrop-blur-sm text-black drop-shadow-2xl bg-gray-400 bg-opacity-40 py-3 px-4 rounded-xl text-center headingBgFlow hover:text-white transition-all duration-300 cursor-pointer font-semibold hover:scale-105">
            The <span className="text-white font-bold">Anime</span> Database
          </h1>
        </div>

        <div className="flex h-[27rem] my-2 ">
          <JikanApiSidebar topAnime={topAnime} />
          <JikanApiMain
            HandleSearch={HandleSearch}
            search={search}
            animeList={animeList}
            setSearch={setSearch}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default JikanApiBody;
