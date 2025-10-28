import { Box, CircularProgress } from "@mui/material";
import ContentHook from "../hooks/ContentHook";
import ContentCardComponent from "./ContentCardComponent";
import type { Content } from "../type/Content";
import { useNavigate } from "react-router-dom";

interface ContentListComponentType {
    endpoint: string
}


function ContentListComponent(x: ContentListComponentType) {
    const {contentList, loading, error} = ContentHook(x.endpoint);
    const navigate = useNavigate();

    const handleClick = (content: Content) => {
        if (x.endpoint == "catalog/movie") {
            navigate(`/watch/movie/${content.id}`)
        } else if(x.endpoint == "catalog/series") {
            navigate(`/serie/${content.id}`)
        } else {
            if (content.isSerie) {
                navigate(`/serie/${content.id}}`)
            } else {
                navigate(`/watch/movie/${content.id}`)
            }
        }
    }
    if (loading) return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh'
        }}>
            <CircularProgress/>
        </Box>
    )
    if (error != null) return <h1>{error}</h1>

    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            padding: '16px',
            gap: '16px'
        }}>
            {contentList.map((content) => (
                <ContentCardComponent content={content} onClick={handleClick} key={content.id}/>
            ))}
        </Box>
    )
}


export default ContentListComponent;