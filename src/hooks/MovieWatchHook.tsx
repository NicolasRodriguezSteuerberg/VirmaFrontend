import { useEffect, useState } from "react";
import type { MovieWatchType } from "../type/MovieWatch";

function MovieWatchHook(id: string) {
    const apiUrl: string = import.meta.env.VITE_API_URL;
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState<MovieWatchType>();
    const [error, setError] = useState<null | string>(null);
    console.log(apiUrl);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(apiUrl + "/virma/api/catalog/movie/" + id, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json;charset=UTF-8',
                    }
                })
                if (!response.ok) throw new Error("asdjfklasdhfaksldfñs");
                 
                const data = await response.json();
                console.log(data);
                setMovie(data);
            } catch (err) {
                console.log(err);
                setError("ERROR OBTENIENDO LAS COSAS");
            } finally {
                setLoading(false);
            }
        }

        fetchContent();
    }, [])

    return {movie, loading, error}
}

export default MovieWatchHook;