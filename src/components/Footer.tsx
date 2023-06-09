import { Box, Grid } from "@mui/material"
import { MainLogo } from "./MainLogo"

export const Footer = () => {
    const styles = {
        footerBox: {
          minHeight: 'fit-content',
          width: '100vw',
          backgroundColor: 'black',
          borderRadius: '50px 50px 0 0',
          borderTop: '1px solid #212121',
          boxSizing: 'border-box',
          marginTop: 'auto', // Pushes the footer to the bottom
        },
        gridItem: {
          height: '100%',
        },
        gridBox: {
          padding: '50px',
          boxSizing: 'border-box',
        }
    }
    
    return (
        <Box sx={styles.footerBox}>
            <Grid container>
                <Grid sx={styles.gridItem  } item lg={4} xs={12}>
                    <Box sx={styles.gridBox}>
                        <MainLogo width='80px' />
                    </Box>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Box sx={styles.gridBox}>
                        <MainLogo width='80px' />
                    </Box>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Box sx={styles.gridBox}>
                        <MainLogo width='80px' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}