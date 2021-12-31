import { motion } from "framer-motion";
import React from "react";

function MarvelApiListCard({ list }) {
  const imageUrl = `${list.thumbnail.path}/portrait_uncanny.jpg`;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="flex items-center justify-center">
      <motion.a
        whileHover={{ scale: 1.05, color: "#bb3b3b" }}
        className="flex flex-col space-y-3"
        href={list.urls[0].url}
        target="_blank"
        rel="noreferrer">
        <img className="h-80" src={imageUrl} alt="" />
        <h1 className="font-bold text-white">{list.title}</h1>
      </motion.a>
    </motion.div>
  );
}

export default MarvelApiListCard;
