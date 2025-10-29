import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import type { SeasonEpisodeType } from "../type/Serie";
import EpisodeContentComponent from "./EpisodeContentComponent";
import { ExpandMore } from "@mui/icons-material";

interface SerieContentComponentProps {
    seasons: Array<SeasonEpisodeType>
    onClick: (episodeId: number) => void;
}

function SerieContentComponent({seasons, onClick}: SerieContentComponentProps) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
        }}>
            {seasons.map(season => (
                <Accordion key={season.number} elevation={2} sx={{borderRadius:2}}>
                    <AccordionSummary expandIcon={<ExpandMore/>}>
                        <Typography fontWeight='bold' variant="h6">Temporada {season.number}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2
                        }}>
                            {season.episodeList.map(episode => (
                                <EpisodeContentComponent episode={episode} onClick={onClick}/>
                            ))}
                        </Box>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>

    )

}

export default SerieContentComponent;