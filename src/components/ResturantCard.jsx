import { CDN_URL } from "../../utils/common";

const ResturantCard = (props) => {
  const { res_data } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    res_data;
  return (
    <div className="m-4 p-4 w-[250px] font-extralight bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    <div>
      <label>Promoted</label>
      <ResturantCard {...props} />
    </div>;
  };
};

export default ResturantCard;
