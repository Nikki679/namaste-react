import { useState,useEffect } from "react";
import { MENU_API } from "./common";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
    const [itemsCards, setItemsCards] = useState([]);
    const [categories,setCategories] = useState([]);

    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const data = await fetch(
          MENU_API + resId
        );
        const json = await data.json();
        setResInfo(json?.data);
        setItemsCards(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card?.itemCards)
        const categoriesfilter =
            json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
            setCategories(categoriesfilter)
        // console.log(
        //   "Menu item",
        //   json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        //     .itemCards
        // );
        console.log("json menu", json);
        // console.log(
        //   "xyz",
        //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card  ?.card?.itemCards[0]?.card?.info?.name
        // );
      };
    return [resInfo, itemsCards,categories];
}

export default useRestaurantMenu;