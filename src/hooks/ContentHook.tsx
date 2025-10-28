import { useEffect, useState } from "react";
import type { Content } from "../type/Content";

function ContentHook(endpoint: string) {
    const apiUrl: string = import.meta.env.VITE_API_URL;
    const [loading, setLoading] = useState(true);
    const [contentList, setContentList] = useState<Content[]>([]);
    const [error, setError] = useState<null | string>(null);
    console.log(apiUrl);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(apiUrl + "/virma/api/" + endpoint + "?page=0&size=10", {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json;charset=UTF-8',
                    }
                })
                if (!response.ok) throw new Error("asdjfklasdhfaksldfñs");
                 
                const data = await response.json();
                console.log(data);
                setContentList(data['content']);
            } catch (err) {
                console.log(err);
                setError("ERROR OBTENIENDO LAS COSAS");
            } finally {
                setLoading(false);
            }
        }

        fetchContent();
    }, [])

    return {contentList, loading, error}
}

export default ContentHook;