import { Box, Toolbar, Button } from '@mui/material'
import { useState, useEffect, Dispatch, SetStateAction } from 'react'

interface Props {
    showMenu: boolean
    setShowMenu: Dispatch<SetStateAction<boolean>>
    handleSmoothScroll: (id: string) => void
    currentSection: string
}

export const MenuMobile = ({ showMenu, setShowMenu, handleSmoothScroll, currentSection }: Props) => {
    const [visible, setVisible] = useState<boolean>(false);
    const styles = {
        menuBox: {
            backgroundColor: 'black',
            height: visible ? 'calc(100vh - 70px)' : '0',
            width: '100vw',
            position: 'absolute',
            top: '70px',
            left: 0,
            transition: 'height 0.7s ease',
            overflow: 'hidden',
        },
        toolbar: {
            width: '100%',
            height: '100%',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonMenu: {
            width: '50vw',
            height: '60px',
            maxWidth: '200px',
            minWidth: '100px',
            color: visible ? 'white' : 'black',
            transition: 'color 0.5s ease',
        },
        buttonMenuSelected: {
            color: '#FFFF00',
            filter: 'drop-shadow(0 0 5px rgba(221, 217, 42, 0.4))'
        },
    };

    useEffect(() => {
        if (showMenu) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [showMenu])

    return (
        <Box sx={styles.menuBox}>
            <Toolbar style={styles.toolbar}>
                <Button style={currentSection === 'home' ? { ...styles.buttonMenu, ...styles.buttonMenuSelected } : styles.buttonMenu} color="inherit" onClick={() => {
                    handleSmoothScroll('home')
                    setShowMenu(false)
                }}>
                    Home
                </Button>
                <Button style={currentSection === 'services' ? { ...styles.buttonMenu, ...styles.buttonMenuSelected } : styles.buttonMenu} color="inherit" onClick={() => {
                    handleSmoothScroll('services')
                    setShowMenu(false)
                }}>
                    Our Services
                </Button>
                <Button style={currentSection === 'clients' ? { ...styles.buttonMenu, ...styles.buttonMenuSelected } : styles.buttonMenu} color="inherit" onClick={() => {
                    handleSmoothScroll('clients')
                    setShowMenu(false)
                }}>
                    Our Clients
                </Button>
                <Button style={currentSection === 'about' ? { ...styles.buttonMenu, ...styles.buttonMenuSelected } : styles.buttonMenu} color="inherit" onClick={() => {
                    handleSmoothScroll('about')
                    setShowMenu(false)
                }}>
                    About Us
                </Button>
            </Toolbar>
        </Box>
    )
}