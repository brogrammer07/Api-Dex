import { SearchIcon } from "@heroicons/react/outline";
import JikanApiAnimeCard from "./JikanApiAnimeCard";

function JikanApiMain({ HandleSearch, search, animeList, setSearch }) {
  console.log(animeList);
  console.log(search);
  return (
    <main className="w-full mx-3 max-h-full space-y-4 ">
      <div className="sticky">
        <form onSubmit={HandleSearch}>
          <div className="flex bg-white w-full 2xl:w-2/4 rounded-3xl items-center px-3 py-1 focus-within:bg-black focus-within:text-white transition-all ease-in-out duration-500 ">
            <SearchIcon className="h-6" />
            <input
              type="text"
              placeholder="Search for an anime"
              required
              className="px-4 py-1 outline-none w-full  focus:text-white focus:bg-black  transition-all ease-in-out duration-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 ml-5 gap-5 overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-black scrollbar-track-white h-[25rem] md:pr-4 lg:pr-0 xl:pr-5 2xl:pr-0">
        {animeList.map((anime) => (
          <JikanApiAnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </main>
  );
}

export default JikanApiMain;
