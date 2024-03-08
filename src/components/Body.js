import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mock-data";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [FilteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();

        //console.log("Swiggy data : ", jsonData);
        const cards = jsonData.data.cards;
        const resultCard = cards.filter(cardItem => cardItem.card.card.id === "restaurant_grid_listing");
        const resultResList = resultCard[0].card.card.gridElements.infoWithStyle.restaurants;
        console.log("res : ", resultResList);
        setListOfRestaurants(resultResList);
        setFilteredListOfRestaurants(resultResList);
        //restaurant_grid_listing
        //setListOfRestaurants(jsonData.)
    };

    // if(ListOfRestaurants.length === 0){
    //     return <ShimmerUI />;
    // }

    // if(ListOfRestaurants.length === 0){
    //     return (
    //         <div class="loader">
    //             <img src="https://miro.medium.com/v2/resize:fit:679/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"/>
    //         </div>
    //     )
    // }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus===false){
        return <h1>Looks like you're offline. Please check your internet connection.</h1>
    }

    return (ListOfRestaurants.length === 0) ? <ShimmerUI /> :
        (
            <div className="body">
                <div className="filter">
                    <div className="search-section">
                        <input type="text" value={searchText} onChange={(e) => {
                            setSearchText(e.target.value);
                            setFilteredListOfRestaurants(ListOfRestaurants);
                        }} />
                        <button className="search-btn" onClick={() => {
                            //console.log("searched text: ",searchText);
                            const filteredRes = FilteredListOfRestaurants.filter(
                                res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredListOfRestaurants(filteredRes);
                        }}>
                            Search
                        </button>
                    </div>
                    <button className="filter-btn"
                        onClick={
                            () => {

                                let filteredList = FilteredListOfRestaurants.filter(res => res.info.avgRating > 4.2);
                                console.log("Filtered list: ", filteredList);
                                setFilteredListOfRestaurants(filteredList);
                                console.log("FilteredListOfRestaurants: ", FilteredListOfRestaurants);
                            }
                        }>
                        Top rated restaurant
                    </button>
                </div>
                <div className="restaurant-container">
                    {
                        FilteredListOfRestaurants.map(restaurant =>
                            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                        )
                    }
                </div>
            </div>
        )
};

export default Body;