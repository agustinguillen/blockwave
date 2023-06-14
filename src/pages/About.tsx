import { Reveal } from "../components/Reveal";
import { SectionTitle } from "../components/SectionTitle";
import { SectionParagraph } from "../components/SectionParagraph";
import { Box, useMediaQuery, useTheme, Grid } from '@mui/material';
import { crew } from "../fakeApiData/crew";
import { CrewCard } from "../components/CrewCard";
import { Crew } from "../types/crew";
import { StarsCanvas } from "../components/canvas/index";

const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Box style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '300vh',
                left: 0,
            }}>
                <StarsCanvas />
            </Box>
            <Reveal width='100%' delay={0.5}>
                <Box
                    sx={{
                        width: '100%',
                        height: 'calc(100vh - 70px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minHeight: 'fit-content'
                    }}
                >
                    <SectionTitle title={'Meet Our Expert Core Team'} />
                    <SectionParagraph text={'Our dedicated team with a diverse set of skills and expertise, we collaborate to bring your ideas to life. Get to know the talented individuals who make up the BlockWave team and discover how their knowledge and experience drive our success.'} />
                    <Reveal width='100%' delay={1}>
                        <Box
                            sx={{
                                marginTop: isMobile ? '15px' : '3%',
                                width: isMobile ? '100%' : '80%',
                                marginLeft: isMobile ? '0%' : '10%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                '& > *': {
                                    flexBasis: '40%', 
                                    marginBottom: '20px', 
                                },
                                minHeight: 'fit-content'
                            }}
                        >
                            {crew?.map((crewMember: Crew) => (
                                <CrewCard key={crewMember?.name} crewMember={crewMember} />
                            ))}
                        </Box>
                    </Reveal>
                </Box>
            </Reveal>
        </>
    );
};

export default About;
