import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0)
  const { resId } = useParams();

  [resInfo, itemsCards, categories] = useRestaurantMenu(resId);

  //console.log("hello", resInfo?.cards[0]?.card?.card?.info?.name);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};
  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || [];
  // setItemsCards(itemCards);
  console.log("itemsCards data", itemsCards);
  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-lg">{name}</h1>
      <p className="font-medium">
        {cuisines} - {costForTwoMessage}
      </p>
      {categories.map((category,index) => (
        <RestaurantCategory data={category?.card.card} showItems={index === showIndex ? true :false} setShowIndex={() => setShowIndex(index)  }/>
      ))}
    </div>
  );
};

export default RestaurantMenu;
