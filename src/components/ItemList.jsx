import { useDispatch } from "react-redux";
import { addItem } from "../../utils/slice/cartSlice";
import { CDN_URL } from "../../utils/common";

const ItemList = ({ itemCards }) => {
  const dispatch = useDispatch();

 // console.log("i", itemCards);
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {itemCards.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 text-left border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-medium">{item?.card?.info?.name}</span>
              <span className="">- ₹{item?.card?.info?.price / 100}</span>
            </div>
            <p>{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div>
              <button
                className=" bg-black text-white shadow-md rounded"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
