import {useState,useEffect} from 'react';

const useRestaurantList = () => {
  const [listOfResturants, setListOfResturant] = useState([]);
  const [filterResturantList, setFilterResturantList]=useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json", json);
    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResturantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log("body side",json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  return [listOfResturants,filterResturantList,setFilterResturantList];
};

export default useRestaurantList;
