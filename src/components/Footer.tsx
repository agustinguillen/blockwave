import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material"
import { MainLogo } from "./MainLogo"
import { CustomIcon } from "./CustomIcon"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const styles = {
        footerBox: {
          minHeight: 'fit-content',
          width: '100vw',
          backgroundColor: 'black',
          boxSizing: 'border-box',
          marginTop: 'auto', 
          borderRadius: isMobile ? '0' : '30% / 100% 100% 0% 0%',
        },
        gridContainer: {
          display: 'flex',
          justifyContent: 'center'
        },
        gridItem: {
          height: '100%',
        },
        gridBox: {
          padding: '10%',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center'
        }
    }
    
    return (
        <Box sx={styles.footerBox}>
            <Grid sx={styles.gridContainer} container>
                <Grid sx={styles.gridItem} item lg={3} md={3} xs={12}>
                    <Box sx={styles.gridBox}>
                        <MainLogo width='60px' withBrand withSlogan />
                    </Box>
                </Grid>
                <Grid item lg={3} md={3} xs={12}>
                    <Box sx={styles.gridBox}>
                        <CustomIcon isMobile={isMobile} icon={<LinkedInIcon sx={{ zIndex: 20 }} />} />
                        <CustomIcon isMobile={isMobile} icon={<TwitterIcon sx={{ zIndex: 20 }} />} />
                        <CustomIcon isMobile={isMobile} icon={<InstagramIcon sx={{ zIndex: 20 }} />} />
                    </Box>
                </Grid>
                <Grid item lg={3} md={3} xs={12}>
                <Box sx={{ ...styles.gridBox, flexDirection: 'column', alignItems: 'center' }}>
                        <Typography style={{ fontWeight: '200' }}>hello@blockwave.org</Typography>
                        <Typography style={{ fontWeight: '200' }}>+ 1 545 12345678</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}