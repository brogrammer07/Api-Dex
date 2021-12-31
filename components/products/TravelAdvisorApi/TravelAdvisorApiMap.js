import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles/style";
import mapStyles from "./styles/mapStyles";
import { LocationOnOutlined } from "@material-ui/icons";
function TravelAdvisorApiMap({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:768px)");
  return (
    <div className="h-[15rem] lg:h-full w-[70rem] lg:w-[40rem] 2xl:w-full ">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}>
        {places?.length &&
          places?.map((place, i) => (
            <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}>
              {!matches ? (
                <LocationOnOutlined
                  className=""
                  color="primary"
                  fontSize="large"
                />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    className={classes.typography}
                    variant="subtitle2"
                    gutterBottom>
                    {" "}
                    {place.name}
                  </Typography>
                  <img
                    className="cursor-pointer object-cover"
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </Paper>
              )}
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
}

export default TravelAdvisorApiMap;
