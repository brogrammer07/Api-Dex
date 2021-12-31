import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Header() {
  const [path, setPath] = useState(null);

  useEffect(() => {
    if (window !== undefined) {
      setPath(window.location.pathname.split("/")[1]);
    }
  }, []);

  const router = useRouter();
  return (
    <div className="flex items-center justify-evenly mt-5 sticky">
      <motion.div
        whileHover={{
          rotateZ: [0, 10, -10, 0],
          transition: { yoyo: Infinity, duration: 2 },
        }}
        initial={{ y: "-100vh", rotateZ: 0 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 0.3, stiffness: 50 }}
        className="hidden items-center justify-center font-bold text-orange-200 sm:hidden md:flex md:space-x-2 lg:space-x-4 text-4xl cursor-pointer">
        <h1 className=" bubble rounded-full px-3 py-3 ">ApiDex</h1>
      </motion.div>
      <div className="flex items-center justify-center sm lg:space-x-4 cursor-pointer">
        <motion.h2
          whileHover={{
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255",
            scale: 1.05,
            color: "#fff",
            backgroundColor: "#111",
            originX: 0,
            transition: { type: "spring", stiffness: 400 },
          }}
          initial={{ y: "-100vh" }}
          animate={{
            y: 0,
            transition: { type: "spring", delay: 0.5, stiffness: 50 },
          }}
          onClick={() => {
            router.push("/");
          }}
          className={`px-3 sm:px-6 md:px-5 lg:px-10 lg:py-2 rounded-3xl ${
            path === "" ? "text-black" : "text-white"
          } font-bold  `}>
          Home
        </motion.h2>

        <motion.h2
          whileHover={{
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255",
            scale: 1.05,
            color: "#fff",
            backgroundColor: "#111",
            originX: 0,
            transition: { type: "spring", stiffness: 400 },
          }}
          initial={{ y: "-100vh" }}
          animate={{
            y: 0,
            transition: { type: "spring", delay: 0.7, stiffness: 50 },
          }}
          onClick={() => {
            router.push("/product/products");
          }}
          className={` font-bold text-xs sm:text-sm md:text-base px-3 sm:px-6 md:px-5 lg:px-10 lg:py-2 rounded-3xl ${
            path === "product" ? "text-black" : "text-white"
          } font-bold text-xs sm:text-sm md:text-base   `}>
          Products
        </motion.h2>

        <motion.h2
          whileHover={{
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255",
            scale: 1.05,
            color: "#fff",
            backgroundColor: "#111",
            originX: 0,
            transition: { type: "spring", stiffness: 400 },
          }}
          initial={{ y: "-100vh" }}
          animate={{
            y: 0,
            transition: { type: "spring", delay: 0.9, stiffness: 50 },
          }}
          className={` px-3 sm:px-6 md:px-5 lg:px-10 lg:py-2 rounded-3xl ${
            path === "about" ? "text-black" : "text-white"
          } font-bold text-xs sm:text-sm md:text-base `}>
          About
        </motion.h2>

        <motion.h2
          whileHover={{
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255",
            scale: 1.05,
            color: "#fff",
            backgroundColor: "#111",
            originX: 0,
            transition: { type: "spring", stiffness: 400 },
          }}
          initial={{ y: "-100vh" }}
          animate={{
            y: 0,
            transition: { type: "spring", delay: 1.1, stiffness: 50 },
          }}
          className={`px-3 sm:px-6 md:px-5 lg:px-10 lg:py-2 rounded-3xl ${
            path === "contact" ? "text-black" : "text-white"
          } font-bold text-xs sm:text-sm md:text-base `}>
          Contact
        </motion.h2>
      </div>
    </div>
  );
}

export default Header;
