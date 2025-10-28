import { Box, Card, CardMedia, Typography } from "@mui/material";
import type { Content } from "../type/Content";
import { useState } from "react";

interface ContentPromp {
    content: Content
    onClick: (content: Content) => void;
}

function ContentCardComponent({content, onClick}: ContentPromp) {
    const [hovered, setHovered] = useState(false);
    return (
        <Card
            elevation={4}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onClick(content)}
            sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'background.paper',
                transition: 'transform 0.4s ease, box-shadow 0.3s ease',
                transform: hovered ? 'scale(1.07)' : 'scale(1)',
                boxShadow: hovered ? 8 : 3,
                cursor: 'pointer'
            }}
        >
            <CardMedia
                component='img'
                image={content.coverUrl}
                alt={content.title || 'Cover'}
                sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover'
                }}
            />
        </Card>
    )
}

export default ContentCardComponent;