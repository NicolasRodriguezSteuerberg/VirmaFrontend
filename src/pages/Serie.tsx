import { Box, CircularProgress, Typography } from "@mui/material";
import SerieHeaderComponent from "../components/SerieHeaderComponent";
import SerieHook from "../hooks/SerieHook";
import { useNavigate, useParams } from "react-router-dom";
import SerieContentComponent from "../components/SerieContentComponent";

function SeriePage() {
    const {id} = useParams<{id: string}>();
    const {serieInfo, loading, error} = SerieHook(id!);
    const navigate = useNavigate()

    const handleClick = (episodeId: number) => {
        navigate(`/watch/serie/${episodeId}`)
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
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '32px',
                gap: '32px',
                width: '100vw'
            }}
        >
            <SerieHeaderComponent serieInfo={serieInfo!.info}/>
            <SerieContentComponent seasons={serieInfo!.seasons} onClick={handleClick}/>
        </Box>
    )
}

export default SeriePage;