import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems, setShowIndex }) => {
//     const [show,setShow]=useState(false)
//   console.log(data);

  const handleClick = () => {
   setShowIndex()
  }

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50  p-4 shadow-lg ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-md">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
      { showItems && <ItemList itemCards={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
