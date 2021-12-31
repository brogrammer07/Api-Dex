import { data } from "autoprefixer";
import { motion } from "framer-motion";
import { useState } from "react";
import DisplayWeather from "./DisplayWeather";
function WeatherApiBody() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState([]);

  async function weatherData(e) {
    e.preventDefault();
    if (city === "") {
      alert("Add Values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setWeather({ data: data }));
    }
  }
  console.log("hey");
  return (
    <div className="h-full flex items-center justify-center text-white text-4xl font-bold z-0">
      {weather.data === undefined ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              delay: 1.5,
              mass: 0.6,
              damping: 6,
            },
          }}
          className="flex flex-col items-center justify-center h-3/4 lg:w-5/12 lg:h-3/4 shadow-2xl shadow-black rounded-xl bg-cover bg-no-repeat relative">
          <img
            className="absolute h-full w-full object-cover -z-[1] rounded-xl brightness-75"
            src="https://images.unsplash.com/photo-1542662565-7e4b66bae529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h1 className="text-gray-100 text-3xl lg:text-4xl xl:text-5xl">
            Weather App
          </h1>
          <p className="text-gray-400 text-xs lg:text-sm xl:text-base my-3 mb-7">
            Check Weather of any place
          </p>
          <form className="flex flex-col items-center">
            <div className="flex mx-3">
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-3/4 mx-2 text-sm py-2 px-3 align-middle text-black outline-none rounded-xl shadow-black shadow-xl  "
                type="text"
                placeholder="Enter City..."
              />
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-3/4 mx-2 text-sm py-1 px-3 align-middle text-black outline-none rounded-xl"
                type="text"
                placeholder="Enter Country..."
              />
            </div>
            <button
              onClick={weatherData}
              className="text-white bgFlow bg-black w-2/4 sm:w-[33%] md:w-2/4 mt-5 py-1 text-sm md:text-lg text-center rounded-3xl hover:scale-110 transition-all duration-300">
              Check
            </button>
          </form>
        </motion.div>
      ) : weather.data.cod != 404 ? (
        <motion.div
          initial={{ scale: 0, x: -100, y: 100 }}
          animate={{
            scale: 1,
            x: 0,
            y: 0,
            transition: { type: "spring", delay: 1.5 },
          }}
          className=" relative flex flex-col h-3/4 w-full sm:w-9/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12 lg:h-3/4 shadow-2xl shadow-black rounded-xl justify-between">
          <img
            className="absolute h-full w-full object-cover -z-[1] rounded-xl brightness-75"
            src="https://images.unsplash.com/photo-1542662565-7e4b66bae529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <DisplayWeather data={weather.data} />
          <button
            onClick={() => setWeather([])}
            className="text-white bgFlow bg-black px-4 sm:px-0 py-2 sm:py-1 text-xs sm:text-sm md:text-lg text-center rounded-3xl hover:scale-110 transition-all duration-300 my-6 -2/4 sm:w-[33%] md:w-2/4 m-auto">
            Check Another
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0, x: -100, y: 100 }}
          animate={{
            scale: 1,
            x: 0,
            y: 0,
            transition: { type: "spring", delay: 1.5 },
          }}
          className=" relative flex flex-col items-center justify-center h-3/4 lg:w-5/12 lg:h-3/4 shadow-2xl shadow-black rounded-xl ">
          <img
            className="absolute h-full w-full object-cover -z-[1] rounded-xl brightness-75"
            src="https://images.unsplash.com/photo-1542662565-7e4b66bae529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h1 className="text-center mx-4">No such City Found!</h1>
          <button
            onClick={() => setWeather([])}
            className="text-white bgFlow bg-black  py-1 text-lg text-center rounded-3xl hover:scale-110 transition-all duration-300 my-6 w-2/4 m-auto">
            Check Again
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default WeatherApiBody;
