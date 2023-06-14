import { Reveal } from "../components/Reveal";
import BackgroundCode from '../assets/laptop.webp';
import { SectionTitle } from "../components/SectionTitle";
import { TypingText } from "../components/TypingText";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { SectionParagraph } from "../components/SectionParagraph";
import { CustomIcon } from "../components/CustomIcon";
import { Typography, Box, useMediaQuery, useTheme, Grid } from '@mui/material';
import { Badge } from "../components/Badge";
import { StarsCanvas } from '../components/canvas/index';
import { motion } from 'framer-motion';

const variants = {
    initial: { y: 0 },
    up: { y: -20 },
    down: { y: 20 }
};

const Services = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Box style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '100vh',
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
                        position: 'relative'
                    }}
                >
                    <SectionTitle title={'Take your idea to the next level with our specialized guidance'} />
                    <SectionParagraph text={'Our exceptional team of developers and designers delivers top-notch solutions tailored to your needs. From intuitive UI design to robust web and app development, cloud computing, cybersecurity, and app launch assistance, we´re here to drive your success.'} />
                    <motion.img
                        initial="initial"
                        animate="up"
                        variants={variants}
                        transition={{
                            y: { duration: 0.5, yoyo: Infinity, ease: 'easeInOut', delay: 1 },
                        }}
                        src={BackgroundCode}
                        alt='laptop illustration'
                        style={{
                            filter: 'contrast(1.5) saturate(1.2) hue-rotate(50deg) opacity(0.5)',
                            position: 'absolute',
                            top: isMobile ? '30%' : '15%',
                            left: isMobile ? '10%' : '20%',
                            zIndex: -5,
                            width: isMobile ? '100%' : '60%',
                        }}
                    />
                    {/*<Box style={{ 
                    width:'100%', 
                    height: isMobile ? '40%' : '70%',
                    position: 'absolute',
                    top: isMobile ? '20%' : '17%',
                    left: isMobile ? '10%' : 0,
                    filter: 'contrast(1.2) saturate(0.5) hue-rotate(50deg) opacity(0.9)',
                }}>
                        <ComputersCanvas />
            </Box>*/}
                    <Grid container style={{ marginTop: '3vh' }}>
                        <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{
                                width: '100%',
                                height: '70%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                marginTop: '3%',
                            }}>
                                <TypingText icon={<CustomIcon isMobile={isMobile} icon={<DesignServicesIcon sx={{ zIndex: 20 }} />} />} delay={1.5} text={"UX / UI Design"} />
                                <TypingText icon={<CustomIcon isMobile={isMobile} icon={<AppShortcutIcon sx={{ zIndex: 20 }} />} />} delay={1.75} text={"Web & App Development"} />
                                <TypingText icon={<CustomIcon isMobile={isMobile} icon={<CloudIcon sx={{ zIndex: 20 }} />} />} delay={2} text={"Cloud Computing"} />
                                <TypingText icon={<CustomIcon isMobile={isMobile} icon={<SecurityIcon sx={{ zIndex: 20 }} />} />} delay={2.25} text={"Cybersecurity"} />
                                <TypingText icon={<CustomIcon isMobile={isMobile} icon={<RocketLaunchIcon sx={{ zIndex: 20 }} />} />} delay={2.5} text={"App Launch Assistance"} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{
                                width: '100%',
                                height: '70%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                marginTop: '5%'
                            }}>
                                <Box sx={{
                                    width: isMobile ? '100%' : '300px',
                                    display: 'flex',
                                    flexDirection: isMobile ? 'row' : 'column',
                                    justifyContent: isMobile ? 'space-around' : 'center',
                                    alignItems: 'center'
                                }}>
                                    <Badge
                                        icon={
                                            <Diversity2Icon
                                                sx={{ zIndex: 20, fontSize: isMobile ? '40px' : '70px', color: '#DDD92A', filter: 'drop-shadow(0 0 5px rgba(221, 217, 42, 0.4))', }}
                                            />}
                                        text={"Highly skilled team"}
                                        delay={1}
                                    />
                                    <Badge
                                        icon={
                                            <EmojiObjectsIcon
                                                sx={{ zIndex: 20, fontSize: isMobile ? '40px' : '70px', color: '#DDD92A', filter: 'drop-shadow(0 0 5px rgba(221, 217, 42, 0.4))', }}
                                            />}
                                        text={"Innovative minds"}
                                        delay={1.25}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Reveal>
        </>
    );
};

export default Services;