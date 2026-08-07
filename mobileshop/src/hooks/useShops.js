import {useEffect, useState} from "react";
import {getVisitingShops} from "../services/shopService";

export function useShops() {

    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [progress, setProgress] = useState(0.0);


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

    const progress = countProgress(shops);

    return {
        shops,
        loading,
        progress,
    };
}

function countProgress(shops) {
    const totalShops = shops.length;
    const completedShopsCnt = shops.filter((shop) => shop.isVisitCompleted).length;

    return completedShopsCnt / totalShops;
}