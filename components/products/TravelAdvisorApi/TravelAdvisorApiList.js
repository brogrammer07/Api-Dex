import { createRef, useEffect, useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./styles/selectStyles";
import TravelAdvisorApiCard from "./TravelAdvisorApiCard";
function TravelAdvisorApiList({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className="w-full lg:w-7/12 2xl:w- bg-gray-100 overflow-scroll lg:overflow-hidden lg:h-full">
      <div className="flex flex-col">
        <h1 className="lg:text-xl mx-3 text-base my-3 lg:mx-5 font-semibold lg:w-[20rem] ">
          Restaurants, Hotels & Attractions around you
        </h1>
        {isLoading ? (
          <div className="">
            <CircularProgress size="5rem" />
          </div>
        ) : (
          <>
            <div className="ml-7 lg:space-x-3">
              <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                  <MenuItem className="" value="restaurants">
                    Restaurants
                  </MenuItem>
                  <MenuItem value="hotels">Hotels</MenuItem>
                  <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}>
                  <MenuItem value={0}>All</MenuItem>
                  <MenuItem value={3}>Above 3.0</MenuItem>
                  <MenuItem value={4}>Above 4.0</MenuItem>
                  <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex flex-col overflow-auto lg:h-[30rem] 2xl:h-[21rem] scrollbar-thin scrollbar-thumb-black mx-5 space-y-6 ">
              {places?.map((place, i) => (
                <div className="" key={i} ref={elRefs[i]}>
                  <TravelAdvisorApiCard
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                    place={place}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TravelAdvisorApiList;
