import { motion } from "framer-motion";

function JikanApiSidebar({ topAnime }) {
  let x = 0;
  return (
    <aside className="max-w-[25%] bg-gray-600 bg-opacity-40 backdrop-blur px-4 rounded-xl ml-2 max-h-full sticky overflow-y-scroll scrollbar-hide hidden md:flex">
      <nav>
        <h3 className="text-2xl font-bold my-3">Top Anime</h3>
        <div className="space-y-3 mb-2">
          {topAnime.map((anime) => (
            <motion.a
              initial={{ y: "200vh" }}
              whileHover={{
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255",
                scale: 1.1,
                backgroundColor: "#111",
                originX: 0,
                transition: { type: "spring", stiffness: 300 },
              }}
              animate={{
                y: 0,
                transition: {
                  delay: (x = x + 0.4),
                  type: "spring",
                  stiffness: 40,
                  duration: 1,
                },
              }}
              href={anime.url}
              key={anime.mal_id}
              className="flex  w-11/12 max-w-[11/12] bg-gray-600 bg-opacity-60 text-white px-3 py-1 rounded-lg "
              target="_blank"
              rel="noreferrer">
              <h1>{anime.title}</h1>
            </motion.a>
          ))}
        </div>
      </nav>
    </aside>
  );
}

export default JikanApiSidebar;
