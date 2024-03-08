import { useEffect, useState } from "react";
import { RES_INFO_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchResData();
    },[]);

    const fetchResData = async () => {
        const data = await fetch(RES_INFO_API+resId);
        const jsonData = await data.json();
        
        setResInfo(jsonData);
    }

    return resInfo;
};

export default useRestaurantMenu;