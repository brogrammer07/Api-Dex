import { motion } from "framer-motion"

function JikanApiAnimeCard({anime}) {
    return (
        <motion.article initial='animeInitial' animate='animeAnimate' variants={{
            animeInitial: {
              opacity: 0,
            },
            animeAnimate: {
              opacity: 1,
            },}} className="">
            <a href={anime.url} target="_blank" rel="noreferrer" className="flex flex-col items-start space-y-3">
                <figure>
                    <img className="rounded-xl hover:scale-105 transition-all duration-200 h-[20rem] w-[13rem] object-cover " src={anime.image_url} alt="" />
                </figure>
                <h1 className="text-white w-3/4 font-bold text-base">{anime.title}</h1>
            </a>
        </motion.article>
    )
}

export default JikanApiAnimeCard
