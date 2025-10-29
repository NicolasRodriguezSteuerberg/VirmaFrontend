import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import type { EpisodeInfoType } from "../type/Serie";

interface EpisodePromp {
    episode: EpisodeInfoType
    onClick: (episodeId: number) => void;
}


function EpisodeContentComponent({episode, onClick}: EpisodePromp) {
    const [hovered, setHovered] = useState(false);

    function formatDuration(seconds: number): string {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        const paddedMins = String(mins).padStart(2, '0');
        const paddedSecs = String(secs).padStart(2, '0');

        if (hrs > 0) {
            const paddedHrs = String(hrs).padStart(1, '0'); // opcional: 2 dígitos si quieres 01:23:45
            return `${paddedHrs}:${paddedMins}:${paddedSecs}`;
        } else {
            return `${paddedMins}:${paddedSecs}`;
        }
    }


    return (
        <Card
            elevation={4}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onClick(episode.id)}
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                cursor: 'pointer',
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                transform: hovered ? 'scale(1.03)' : 'scale(1)',
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '16px'
            }}>
                <CardMedia
                    component='img'
                    image={episode.coverUrl}
                    alt={'Imagen episodio ' + episode.number}
                    sx={{
                        width: 150,
                        height: 'auto',
                        objectFit: 'cover'
                    }}
                />
                <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="subtitle1" fontWeight='bold'>
                        {episode.number}. {episode.title == null? `Capitulo ${episode.number}`: episode.title}
                    </Typography>
                    <Typography variant="body2" color='text.secondary'>
                        {formatDuration(episode.durationSeconds)}
                    </Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default EpisodeContentComponent;