import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { useNavigate, useParams } from 'react-router-dom';
import EpisodeWatchHook from '../hooks/EpisodeWatchHook';

export default function WatchEpisodePage() {
    const { episodeId } = useParams<{ episodeId: string }>();
    const navigate = useNavigate();
    const {episode, loading, error} = EpisodeWatchHook(episodeId!);

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

    if (error != null) return <Typography>error</Typography>


    return (
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            px: 4,
            py: 2,
            alignItems: 'center'
        }}>
        
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold">{episode?.serieTitle}</Typography>
                <Typography variant="h6">
                    Temporada {episode?.seasonNumber} - Episodio {episode?.number}{episode?.episodeTitle ? `: ${episode.episodeTitle}` : ''}
                </Typography>
            </Box>

            <Box sx={{ width: '100%', maxWidth: 960 }}>
                <ReactPlayer
                    src={episode?.fileUrl}
                    controls
                    autoPlay
                    width="100%"
                    height="540px"
                />
            </Box>

            <Stack direction="row" spacing={2}>
                {/* Botón siguiente episodio */}
                {episode?.nextEpisode && (
                <Button
                    variant="contained"
                    onClick={() => navigate(`/watch/serie/${episode.nextEpisode.id}`)}
                >
                    Siguiente episodio ({episode.nextEpisode.number}{episode.nextEpisode.title ? `: ${episode.nextEpisode.title}` : ''})
                </Button>
                )}
            
                <Button
                    variant="outlined"
                    onClick={() => navigate(`/serie/${episode?.serieId}`)}
                >
                    Ver serie
                </Button>
            </Stack>
        </Box>
    )
}