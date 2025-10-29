import { Box, CardMedia, Typography } from "@mui/material";
import type { SerieInfoType } from "../type/Serie";

interface SerieHeaderComponentProps {
  serieInfo: SerieInfoType
}


function SerieHeaderComponent({serieInfo}: SerieHeaderComponentProps) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4
        }}>
            <CardMedia
                component='img'
                src={serieInfo.coverUrl}
                alt="Cover of the serie"
                sx={{
                    width: { xs: '100%', md: 250 },
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1
            }}>
                <Typography 
                    variant="h4"
                    fontWeight="bold"
                >
                    {serieInfo.title}
                </Typography>
                <Typography variant="body1">
                    {serieInfo.description}
                </Typography>
                {serieInfo.releaseDate != null?
                    <Typography variant="body2">
                        Fecha de salida: {serieInfo.releaseDate.toString()}
                    </Typography>
                : <div/>
                }
            </Box>
        </Box>
    )
}

export default SerieHeaderComponent;