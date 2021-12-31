import { SearchIcon } from "@heroicons/react/outline";
import MarvelApiListCard from "./MarvelApiListCard";

function MarvelApiMain({ HandleSearch, search, marvelList, setSearch }) {
  return (
    <main className="overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-black scrollbar-track-white w-full  ">
      <div className="sticky">
        <form onSubmit={HandleSearch}>
          <div className="flex bg-white mx-10 rounded-3xl items-center px-3 py-1 focus-within:bg-gray-800 focus-within:text-white transition-all ease-in-out duration-500 ">
            <SearchIcon className="h-6" />
            <input
              type="text"
              placeholder="Search for a movie, series, comic...."
              required
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-1 outline-none w-full  focus:text-white focus:bg-gray-800  transition-all ease-in-out duration-500"
            />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 justify-center mt-8 ">
        {marvelList.map((list) => (
          <MarvelApiListCard key={list.id} list={list} />
        ))}
      </div>
    </main>
  );
}

export default MarvelApiMain;
