import {useEffect, useState} from "react";
import {getVisitingShops} from "../services/shopService";

export function useShops() {

    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        async function loadShops() {

            try {
                const data = await getVisitingShops();
                setShops(data);

            } finally {
                setLoading(false);
            }
        }

        loadShops();

    }, []);


    return {
        shops,
        loading
    };
}