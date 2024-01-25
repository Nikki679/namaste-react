import { useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../../utils/useRestaurantList";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listOfResturants, filterResturantList, setFilterResturantList] =
    useRestaurantList();
  const [searchText, setSearchText] = useState("");
 // const RestaurantCardPromoted = withPromotedLabel(ResturantCard);

  console.log("listOfResturants", listOfResturants)

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline... please check your internet connection!!!!
      </h1>
    );
  }

  const filterResturant = () => {
    const filterResturantList = listOfResturants.filter(
      (resturant) => resturant.info.avgRating > 4.4
    );
    setFilterResturantList(filterResturantList);
  };

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {console.log(searchText)}
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredResturant = listOfResturants.filter((resturant) => {
                return resturant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log("filterResturant", filteredResturant);
              setFilterResturantList(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-100 rounded-lg"
            onClick={filterResturant}
          >
            Top Rated Resturant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterResturantList.map((resturant) => (
          <Link
            className="link"
            key={resturant.info.id}
            to={"/restaurant/" + resturant.info.id}
          >
           <ResturantCard res_data={resturant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
