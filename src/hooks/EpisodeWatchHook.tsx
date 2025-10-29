import { useEffect, useState } from "react";
import type { SerieWatchType } from "../type/SerieWatch";

function EpisodeWatchHook(episodeId: string) {
    const apiUrl: string = import.meta.env.VITE_API_URL;
    const [loading, setLoading] = useState(true);
    const [episode, setEpisode] = useState<SerieWatchType | null>(null);
    const [error, setError] = useState<null | string>(null);
    console.log(apiUrl);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(apiUrl + "/virma/api/catalog/series/episode/" + episodeId, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json;charset=UTF-8',
                    }
                })
                if (!response.ok) throw new Error("asdjfklasdhfaksldfñs");
                 
                const data: SerieWatchType = await response.json();
                console.log(data);
                setEpisode(data);
            } catch (err) {
                console.log(err);
                setError("ERROR OBTENIENDO LAS COSAS");
            } finally {
                setLoading(false);
            }
        }

        fetchContent();
    }, [episodeId])

    return {episode, loading, error}
}

export default EpisodeWatchHook;