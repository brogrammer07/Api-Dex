import Typical from "react-typical";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://devresourc.es/static/f40e7204ecb371cd8c2809791b405218/c87c1/openweathermap.webp",
  "https://devresourc.es/static/fb3c25b5a584a2fbc7b7c999eeecf1e1/c87c1/jikan.webp",
  "https://devresourc.es/static/253e4ce8096004b1dd7f0fda709de25f/c87c1/google-maps.webp",
  "https://devresourc.es/static/e499bd32b4b0628deba148dfeebcfe08/c87c1/marvel.webp",
];
let count = 0;
let slideInterval;
function Body() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOnNextClick = () => {
    count = (count + 1) % images.length;
    setCurrentIndex(count);
    slideRef?.current?.classList?.add("fade-anim");
  };

  const slideRef = useRef();

  const handleOnPrevClick = () => {
    const imageLength = images.length;
    count = (currentIndex + imageLength - 1) % imageLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);
    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };
  return (
    <div className="flex-1 pt-16 sm:pt-0 sm:flex-none grid grid-cols-1 lg:grid-cols-2 overflow-y-scroll lg:overflow-hidden z-0">
      <div className="flex flex-col space-y-16 lg:space-y-7 items-center  lg:mt-8 h-full">
        <div className="md:hidden  flex items-center justify-center font-bold text-orange-200 md:space-x-2 lg:space-x-4 text-4xl">
          <h1 className="avatar">ApiDex</h1>
        </div>
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { type: "spring", delay: "1.5" },
          }}
          className="hidden md:block text-4xl font-bold  lg:text-8xl text-white">
          API DEX
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { type: "spring", delay: "1.7" },
          }}
          className="text-purple-200 text-lg lg:text-2xl font-semibold text-center">
          Take a look at different APIs
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { type: "spring", delay: "1.9" },
          }}
          className="text-gray-200 text-lg lg:text-2xl">
          <Typical
            loop={Infinity}
            steps={[
              "Anime Finder 😳",
              2000,
              "Check Weather ☁",
              2000,
              "Travel Advisor 🗺",
              2000,
              "Marvel Series 🎬",
              2000,
              "News 📰",
              2000,
            ]}
          />
        </motion.h2>
      </div>
      <div className="flex lg:items-center justify-center space-x-4 lg:mr-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2, delay: "2" } }}
          ref={slideRef}
          className="w-full select-none relative ">
          <motion.div
            whileHover={{ boxShadow: "0px 0px 20px rgb(255,255,255)" }}
            className="aspect-w-16 rounded-2xl my-6 aspect-h-9">
            <img src={images[currentIndex]} className="rounded-2xl" alt="" />
          </motion.div>
          <div className="absolute w-full  top-[29%] sm:top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
            <ChevronLeftIcon
              onClick={handleOnPrevClick}
              className="h-8 cursor-pointer border rounded-full bg-black hover:scale-110 transition-all duration-200 bg-opacity-50 hover:bg-opacity-100 text-white border-none"
            />
            <ChevronRightIcon
              onClick={handleOnNextClick}
              className="h-8 cursor-pointer border rounded-full bg-black hover:scale-110 transition-all duration-200 bg-opacity-50 hover:bg-opacity-100 text-white border-none"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Body;
