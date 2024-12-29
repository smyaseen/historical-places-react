import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { RootState, AppDispatch } from "./store";
import { markVisited, setPlaces } from "./features/places/placesSlice";
import { useGetPlacesQuery } from "./features/places/placesApi";

interface RouteParams {
  id: string;
}

const PlaceDetails: React.FC = () => {
  const { id } = useParams() as unknown as RouteParams;
  const dispatch: AppDispatch = useDispatch();
  const { data: placesData = [], isLoading } = useGetPlacesQuery();
  const places = useSelector((state: RootState) => state.places.places);
  const place = useSelector((state: RootState) =>
    state.places.places.find((p) => p.id === id)
  );

  useEffect(() => {
    if (!places.length) {
      if (placesData.length > 0) {
        dispatch(setPlaces(placesData));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placesData, dispatch]);

  useEffect(() => {
    if (place) {
      dispatch(markVisited(place.id));
    }
  }, [place, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!place) {
    return <div>Place not found</div>;
  }

  return (
    <div>
      <h2 className="text-2xl">{place.name}</h2>
      <img src={place.image} alt={place.name} className="w-64 h-64" />
      <p>{place.description}</p>
      <Link to="/" className="text-blue-500">
        Back to Home
      </Link>
    </div>
  );
};

export default PlaceDetails;
