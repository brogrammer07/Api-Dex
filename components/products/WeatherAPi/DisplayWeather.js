import { motion } from "framer-motion";

function DisplayWeather({data}) {
    const iconUrl = "https://openweathermap.org/img/wn/" + `${data.weather[0].icon}` + ".png";
    return (
        <motion.div initial='weatherInitial' animate='weatherAnimate' variants={{
            weatherInitial: {
              opacity: 0,
            },
            weatherAnimate: {
              opacity: 1,
            },}} className="flex flex-col overflow-y-scroll scrollbar-hide">
                <div className="flex flex-col-reverse md:flex-row items-start justify-between mx-6 my-4 py-5">
                <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                        <img className='h-full object-contain bg-white bg-opacity-50 rounded-lg hover:scale-110 transition-all 200ms cursor-pointer' src={iconUrl} alt="" />
                        <h1 className="bg-gray-200 bg-opacity-20 text-2xl text-center py-2 px-5 rounded-lg hover:scale-110 transition-all 200ms cursor-pointer">{Math.floor(data.main.temp -273.15)} <sup>o</sup>C</h1>
                    </div>
                    <p className="text-gray-300 text-base mt-2 capitalize">{data.weather[0].description}</p>
                </div>
                <div className="flex flex-col md:items-end lg:mb-0 mb-5">
                    <h1 className="text-xl font-bold">{data.name},</h1>
                    <h1 className="text-xl font-bold">{data.sys.country}</h1>
                    <p className="text-xl font-medium">{new Date().toLocaleTimeString()}</p>
                    <p className="text-sm">{new Date().toLocaleDateString()}</p>
                    <p className="text-sm">{data.weather[0].main}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-6">
                <div className="flex items-center space-x-3 justify-center bgBlackFlow cursor-pointer">
                    <h1 className="text-base md:text-sm lg:text-base font-bold px-4  md:px-3 lg:px-4 py-2 rounded-lg w-full">High/Low : <span className="text-base font-normal ml-4">{Math.floor(data.main.temp_max -273.15)} /{" "}{Math.floor(data.main.temp_min -273.15)} <sup>o</sup>C</span></h1>
                </div>
                <div className="flex items-center space-x-3 justify-center bgBlackFlow cursor-pointer">
                    <h1 className="text-base md:text-sm lg:text-base font-bold  px-4 md:px-3 lg:px-4  py-2 rounded-lg w-full">Humidity : <span className="text-base font-normal ml-4">{data.main.humidity} %</span></h1>
                </div>
                <div className="flex items-center space-x-3 justify-center bgBlackFlow cursor-pointer">
                    <h1 className="text-base md:text-sm lg:text-base font-bold  px-4 md:px-3 lg:px-4  py-2 rounded-lg w-full">Pressure : <span className="text-base font-normal ml-4">{data.main.pressure} hPa</span></h1>
                </div>
                <div className="flex items-center space-x-3 justify-center bgBlackFlow cursor-pointer">
                    <h1 className="text-base md:text-sm lg:text-base font-bold  px-4 md:px-3 lg:px-4  py-2 rounded-lg w-full">Visibility : <span className="text-base font-normal ml-4">{data.visibility / 1000} Km</span></h1>
                </div>
                <div className="flex items-center space-x-3 justify-center bgBlackFlow cursor-pointer">
                    <h1 className="text-base md:text-sm lg:text-base font-bold  px-4 md:px-3 lg:px-4  py-2 rounded-lg w-full">Wind : <span className="text-base font-normal ml-4">{Math.floor((data.wind.speed * 18)/5)} Km/hr</span></h1>
                </div>
                <div className="flex items-center space-x-3 justify-center bgBlackFlow cursor-pointer">
                    <h1 className="text-base md:text-sm lg:text-base font-bold  px-4 md:px-3 lg:px-4  py-2 rounded-lg w-full">Wind Dir : <span className="text-base font-normal ml-4">{data.wind.deg} <sup>o</sup>deg</span></h1>
                </div>
                <div className="flex items-center space-x-3 justify-center bgBlackFlow cursor-pointer">
                    <h1 className="text-base md:text-sm lg:text-base font-bold  px-4 md:px-3 lg:px-4  py-2 rounded-lg w-full">Sunrise : <span className="text-base font-normal ml-4">{new Date(data.sys.sunrise *1000).toLocaleTimeString()}</span></h1>
                </div>
                <div className="flex items-center space-x-3 justify-center bgBlackFlow cursor-pointer">
                    <h1 className="text-base md:text-sm lg:text-base font-bold  px-4 md:px-3 lg:px-4  py-2 rounded-lg w-full">Sunset : <span className="text-base font-normal ml-4">{new Date(data.sys.sunset *1000).toLocaleTimeString()}</span></h1>
                </div>
            </div>
        </motion.div>
    )
}

export default DisplayWeather
