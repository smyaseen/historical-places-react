import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState, AppDispatch } from "./store";
import {
  setPlaces,
  markVisited,
  unmarkVisited,
  setRandomPlace,
} from "./features/places/placesSlice";
import { useGetPlacesQuery } from "./features/places/placesApi";

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data: placesData = [], isLoading } = useGetPlacesQuery();
  const places = useSelector((state: RootState) => state.places.places);
  const visited = useSelector((state: RootState) => state.places.visited);
  const randomPlace = useSelector(
    (state: RootState) => state.places.randomPlace
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
    if (places.length > 0) {
      dispatch(setPlaces(places));
    }
  }, [places, dispatch]);

  const handleVisitedToggle = (id: string) => {
    if (visited.includes(id)) {
      dispatch(unmarkVisited(id));
    } else {
      dispatch(markVisited(id));
    }
  };

  const handleRandomPlace = () => {
    dispatch(setRandomPlace());
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button
        onClick={handleRandomPlace}
        className="mt-4 p-2 bg-blue-500 text-white"
      >
        Suggest a Random Place
      </button>
      {randomPlace && (
        <div className="mt-4 p-4 border">
          <h2 className="text-xl">{randomPlace.name}</h2>
          <img
            src={randomPlace.image}
            alt={randomPlace.name}
            className="w-32 h-32"
          />
          <p>{randomPlace.description}</p>
          <button
            className={`mt-2 p-2 ${
              visited.includes(randomPlace.id) ? "bg-green-500" : "bg-gray-500"
            }`}
            onClick={() => handleVisitedToggle(randomPlace.id)}
          >
            {visited.includes(randomPlace.id)
              ? "Unmark as Visited"
              : "Mark as Visited"}
          </button>
          <Link to={`/place/${randomPlace.id}`} className="ml-4 text-blue-500">
            View Details
          </Link>
        </div>
      )}
      <ul>
        {places.map((place) => (
          <li key={place.id} className="p-4 border-b">
            <h2 className="text-xl">{place.name}</h2>
            <img src={place.image} alt={place.name} className="w-32 h-32" />
            <p>{place.description}</p>
            <button
              className={`mt-2 p-2 ${
                visited.includes(place.id) ? "bg-green-500" : "bg-gray-500"
              }`}
              onClick={() => handleVisitedToggle(place.id)}
            >
              {visited.includes(place.id)
                ? "Unmark as Visited"
                : "Mark as Visited"}
            </button>
            <Link to={`/place/${place.id}`} className="ml-4 text-blue-500">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
