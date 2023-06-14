import { Card, CardContent, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { Crew } from '../types/crew';

export const CrewCard = ({ crewMember }: { crewMember: Crew }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const styles = {
        card: {
            background:
                'radial-gradient(circle, rgba(11,0,20,1) 0%, rgba(121,0,105,1) 0%, rgba(42,0,61,1) 100%)',
            color: 'white',
            minWidth: isMobile ? '40vw' : '250px',
            border: '1px solid #eb00cb',
            filter: 'drop-shadow(0 0 5px rgba(235, 0, 203, 0.4))',
            transition: 'filter 0.3s ease-in-out'
        },
        cardContent: {
            background:
                'radial-gradient(circle, rgba(11,0,20,1) 0%, rgba(121,0,105,1) 0%, rgba(42,0,61,1) 100%)',
            textAlign: 'center'
        },
    };

    const handleMouseEnter = (event: Event) => {
        event.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(235, 0, 203, 0.8))';
    };

    const handleMouseLeave = (event: Event) => {
        event.currentTarget.style.filter = 'drop-shadow(0 0 5px rgba(235, 0, 203, 0.4))';
    };

    return (
        <Card
            sx={styles.card}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <CardContent sx={styles.cardContent}>
                <Box
                    width="100%"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={crewMember?.photo}
                        alt={crewMember?.name}
                        width="60"
                        height="60"
                        style={{
                            borderRadius: '100%',
                            marginBottom: '3px',
                        }}
                    />
                </Box>
                <Typography gutterBottom variant="h6" component="div" color="white" style={{ fontSize: isMobile && '0.9rem', marginBottom: '3px' }}>
                    {crewMember?.name}
                </Typography>
                <Typography variant="body2" color="white" style={{ fontSize: isMobile && '0.7rem', textAlign: !isMobile && 'start' }}>
                    {crewMember?.position}
                </Typography>
                <Typography variant="body2" color="#ADB9E3" style={{ fontSize: '0.7rem', textAlign: 'start', display: isMobile && 'none' }}>
                    {crewMember?.bio}
                </Typography>
            </CardContent>
        </Card>
    );
};
