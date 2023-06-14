import { Toolbar, Button, IconButton, Hidden } from "@material-ui/core";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react'
import { MenuMobile } from "./MenuMobile";

export const AppMenu = () => {
    const [currentSection, setCurrentSection] = useState<string>('home')
    const styles = {
        toolbar: {
            width: 'fit-content',
            padding: 0
        },
        buttonMenu: {
            width: '12vw',
            maxWidth: '250px',
            minWidth: '100px'
        },
        buttonMenuSelected: {
            background:
                'radial-gradient(circle, rgba(11,0,20,1) 0%, rgba(121,0,105,1) 0%, rgba(42,0,61,1) 100%)'
        },
        iconButton: {
            padding: '12px 0'
        }
    }
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    const handleSmoothScroll = (id: string) => {
        setCurrentSection(id)
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
                    <Button 
                        className='link' 
                        style={currentSection === 'home' ? {...styles.buttonMenu, ...styles.buttonMenuSelected} : styles.buttonMenu} 
                        color="inherit" 
                        onClick={() => handleSmoothScroll('home')}
                    >
                        Home
                    </Button>
                    <Button 
                        className='link' 
                        style={currentSection === 'services' ? {...styles.buttonMenu, ...styles.buttonMenuSelected} : styles.buttonMenu} 
                        color="inherit" 
                        onClick={() => handleSmoothScroll('services')}
                    >
                        Our Services
                    </Button>
                    <Button 
                        className='link' 
                        style={currentSection === 'clients' ? {...styles.buttonMenu, ...styles.buttonMenuSelected} : styles.buttonMenu} 
                        color="inherit" 
                        onClick={() => handleSmoothScroll('clients')}
                    >
                        Our Clients
                    </Button>
                    <Button 
                        className='link' 
                        style={currentSection === 'about' ? {...styles.buttonMenu, ...styles.buttonMenuSelected} : styles.buttonMenu} 
                        color="inherit" 
                        onClick={() => handleSmoothScroll('about')}
                    >
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
                <MenuMobile 
                    showMenu={showMenu} 
                    setShowMenu={setShowMenu} 
                    handleSmoothScroll={handleSmoothScroll} 
                    currentSection={currentSection}
                />
            </Hidden>

        </>

    )
}