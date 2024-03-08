import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantProfile = (props) => {
    const { id } = useParams();
    
    const resInfo = useRestaurantMenu(id);

    if (resInfo === null || resInfo === undefined) {
        return <ShimmerUI />
    }

    const { name, costForTwoMessage, cuisines, sla } = resInfo?.data?.cards[0]?.card?.card?.info;
    console.log("Res name: ", resInfo.data.cards[0].card.card.info.name);
    const itemCards = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    console.log("item cards : ", itemCards);
    return (
        <div>
            <h1>{name}</h1>
            <h2>{costForTwoMessage}  - {sla.slaString}</h2>
            <p>{cuisines.join(", ")}</p>
            <h3>Menu Items</h3>
            <ul>
                {
                    itemCards.map(itemCard => 
                        <li key={itemCard.card.info.id}>{itemCard.card.info.name} - 
                        Rs. {itemCard.card.info.price / 100 || itemCard.card.info.defaultPrice/100}</li>
                    )
                }
            </ul>

        </div>
    )
};

export default RestaurantProfile;

