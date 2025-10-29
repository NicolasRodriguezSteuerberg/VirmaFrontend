import { useEffect, useState } from "react";
import type { SerieType } from "../type/Serie";

function SerieHook(serieId: string) {
    const apiUrl: string = import.meta.env.VITE_API_URL;
    const [loading, setLoading] = useState(true);
    const [serieInfo, setSerieInfo] = useState<SerieType | null>(null);
    const [error, setError] = useState<null | string>(null);

    const fetchContent = async () => {
        try {
            const response = await fetch(apiUrl + "/virma/api/catalog/series/info/" + serieId, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                }
            })

            if (!response.ok) throw new Error("No se pudieron recoger los datos");

            const data: SerieType = await response.json();
            console.log(data);
            setSerieInfo(data);
        } catch (err) {
            setError('No se pudieron recoger los datos');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchContent();
    }, [serieId])
    
    return {serieInfo, loading, error}
}

export default SerieHook;