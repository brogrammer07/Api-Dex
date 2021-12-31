import { Rating } from "@material-ui/lab";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { Chip } from "@material-ui/core";
import useStyles from "./styles/selectStyles";
function TravelAdvisorApiCard({ place, selected, refProp }) {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const classes = useStyles();

  return (
    <div className="flex flex-col mr-5 bg-white shadow-[0px_0_30px_-15px_rgba(0,0,0,0.5)] rounded-lg  ">
      <img
        className="h-[15rem] rounded-t-lg object-cover   "
        src={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        alt=""
      />
      <div className=" space-y-3 mx-3 my-4 ">
        <h1 className="text-lg">{place.name}</h1>
        <div className="flex justify-between text-sm">
          <h3>Price</h3>
          <p>{place.price_level}</p>
        </div>
        <div className="flex justify-between text-sm">
          <Rating value={Number(place.rating)} readOnly />
          <p>
            out of <span>{place.num_reviews}</span> reviews
          </p>
        </div>
        <div className="hidden md:flex justify-between text-sm">
          <h3>Ranking</h3>
          <p>{place.ranking}</p>
        </div>
        {place?.awards?.map((award) => (
          <div className="flex justify-between my-1">
            <img src={award.images.small} alt="award.display_name" />
            <p className="text-gray-600 text-sm">{award.display_name}</p>
          </div>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <div className="flex justify-between">
            <LocationOnIcon className="text-gray-600" />
            <p className="text-xs text-gray-500">{place.address}</p>
          </div>
        )}
        {place?.phone && (
          <div className="flex justify-between">
            <PhoneIcon className="text-gray-600" />
            <p className="text-xs text-gray-500">{place.phone}</p>
          </div>
        )}
        <div className=" space-x-3">
          <button
            className="text-sm hover:bg-gray-400 rounded-lg px-2 py-1 hover:scale-105 transition-all duration-200"
            onClick={() => window.open(place.web_url, "_blank")}>
            Trip Advisor
          </button>
          <button
            className="text-sm hover:bg-gray-400 rounded-lg px-2 py-1 hover:scale-105 transition-all duration-200"
            onClick={() => window.open(place.website, "_blank")}>
            Website
          </button>
        </div>
      </div>
    </div>
  );
}

export default TravelAdvisorApiCard;
