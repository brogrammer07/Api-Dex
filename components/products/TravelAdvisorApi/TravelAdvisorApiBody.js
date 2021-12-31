import { SearchIcon } from "@heroicons/react/outline";
import TravelAdvisorApiMap from "./TravelAdvisorApiMap";
import TravelAdvisorApiList from "./TravelAdvisorApiList";
import { getPlacesData } from "./api/apis";
import { useEffect, useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { motion } from "framer-motion";
function TravelAdvisorApiBody() {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [autoComplete, setAutoComplete] = useState(null);
  const onLoad = (autoC) => setAutoComplete(autoC);
  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    setCoordinates({ lat: lat, lng: lng });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places?.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating("");
        setIsLoading(false);
      });
    }
  }, [bounds, type]);

  return (
    <>
      <div className="z-0 h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          className="bg-white h-[90%]  my-10 mx-3 rounded-lg flex flex-col ">
          <motion.div
            whileHover={{ backgroundColor: "#3637a8" }}
            className="bg-[#111] shadow-[inset_0_0_60px_1px_rgba(0,0,0,0.3)] flex justify-between px-6  py-3 items-center rounded-tl-lg rounded-tr-lg">
            <div className="">
              <h1 className="text-white text-lg">Travel Advisor</h1>
            </div>
            <div className="flex space-x-4 ">
              <h1 className="text-white text-lg hidden sm:flex">
                Explore new places
              </h1>
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <div className="flex bg-[#222121] px-2 py-1 rounded-lg space-x-2 focus-within:bg-[#b3adad] focus-within:text-white transition-all ease-in-out duration-500">
                  <SearchIcon className="h-6 text-white " />
                  <input
                    className="bg-[#222121] w-full outline-none text-white focus:text-[#111] focus:bg-[#b3adad]   placeholder:focus:text-[#424242] transition-all ease-in-out duration-500"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </Autocomplete>
            </div>
          </motion.div>
          <div className="flex flex-col-reverse lg:flex-row overflow-auto lg:overflow-hidden h-full">
            <TravelAdvisorApiList
              places={filteredPlaces?.length ? filteredPlaces : places}
              childClicked={childClicked}
              isLoading={isLoading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
            <TravelAdvisorApiMap
              places={filteredPlaces?.length ? filteredPlaces : places}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              setChildClicked={setChildClicked}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default TravelAdvisorApiBody;
