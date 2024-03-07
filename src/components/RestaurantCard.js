import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
    const { resData } = props;
    //console.log("resData : ", resData);
    const { name, cuisines, avgRating, costForTwo,id } = resData?.info;
    return (
        <div className="res-col">
            <div className="res-card">
                <img className="res-card__logo"
                    src={
                        CDN_URL
                        + resData.info.cloudinaryImageId
                    } />
                <Link to={"/restaurant/"+id}><h3 className="res-card__Title">{name}</h3></Link>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{resData.info.sla.slaString}</h4>
            </div>
        </div>
    )
};

export default RestaurantCard;