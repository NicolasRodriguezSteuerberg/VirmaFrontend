import { Box, CircularProgress, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import MovieWatchHook from '../hooks/MovieWatchHook'
import { useParams } from 'react-router-dom';

export default function WatchPage() {
    const { id } = useParams<{ id: string }>();
    const {movie, loading, error} = MovieWatchHook(id!);
    
    return (
        <Box
            sx={{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh'
            }}>
                {loading?
                    <CircularProgress/>
                : error != null?
                    <Typography>error</Typography>
                :
                    <ReactPlayer
                    src={movie?.fileUrl}
                    controls
                    autoPlay
                    width="50%"
                    height="50%"
                />
                } 
        </Box>
    )
}