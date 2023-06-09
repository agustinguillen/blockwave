import { Toolbar, Menu, MenuItem, Button, IconButton, Hidden } from "@material-ui/core";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react'
import { MenuMobile } from "./MenuMobile";

export const AppMenu = () => {
    const styles = {
        toolbar: {
            width: 'fit-content',
            padding: 0
        },
        buttonMenu: {
            width: '10vw',
            maxWidth: '200px',
            minWidth: '100px'
        },
        iconButton: {
            padding: '12px 0'
        }
    }
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    const handleSmoothScroll = (id) => {
        const target = document.getElementById(id);
        const targetPosition = target?.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 500;

        let startTimestamp: number | null = null;

        const scrollStep = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = timestamp - startTimestamp;
            const ease = easeOutQuad(progress, startPosition, distance, duration);
            window.scrollTo(0, ease);

            if (progress < duration) {
                window.requestAnimationFrame(scrollStep);
            }
        };

        window.requestAnimationFrame(scrollStep);
    };

    const easeOutQuad = (t, b, c, d) => {
        t /= d;
        return -c * t * (t - 2) + b;
    };

    return (
        <>
            <Hidden xsDown>
                <Toolbar style={styles.toolbar}>
                    <Button className='link' style={styles.buttonMenu} color="inherit" onClick={() => handleSmoothScroll('home')}>
                        Home
                    </Button>
                    <Button className='link' style={styles.buttonMenu} color="inherit" onClick={() => handleSmoothScroll('services')}>
                        Our Services
                    </Button>
                    <Button className='link' style={styles.buttonMenu} color="inherit" onClick={() => handleSmoothScroll('clients')}>
                        Our Clients
                    </Button>
                    <Button className='link' style={styles.buttonMenu} color="inherit" onClick={() => handleSmoothScroll('about')}>
                        About Us
                    </Button>
                </Toolbar>
            </Hidden>
            <Hidden smUp>
                <Toolbar style={styles.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuClick}
                        style={styles.iconButton}
                    >
                        <MenuRoundedIcon />
                    </IconButton>
                </Toolbar>
                <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu} handleSmoothScroll={handleSmoothScroll} />
            </Hidden>

        </>

    )
}