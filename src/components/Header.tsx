import { AppBar, Toolbar } from "@material-ui/core"
import { MainLogo } from "./MainLogo"
import { AppMenu } from "./Menu"

export const Header = () => {
    const styles = {
        appbar: {
            backgroundColor: 'black',
            position: 'fixed',
            top: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '0 5vw',
            height: '70px',
        },
        flickeringContainer: {
            position: "absolute",
            bottom: "0px",
            left: 0,
            width: '100%',
            display: 'flex',
        },
        flickeringTube: {
            position: "absolute",
            bottom: "0px",
            left: 0,
            width: "50%",
            height: "2px",
            background:
        "radial-gradient(circle at top left, transparent 2%, #eb00cb 45%, #eb00cb 55%, transparent 95%)",
            boxShadow: "17px 20px 100px #eb00cb",
            animation: "flicker 5s infinite alternate",
            filter: "blur(1px)", 
            backdropFilter: "blur(3px) brightness(1.8)",
        },
        flickeringTube2: {
            position: "absolute",
            bottom: "0px",
            right: 0,
            width: "50%",
            height: "2px",
            background:
        "radial-gradient(circle at top left, transparent 2%, #eb00cb 45%, #eb00cb 55%, transparent 95%)",
            boxShadow: "17px 20px 100px #eb00cb",
            animation: "flicker2 7s infinite alternate",
            filter: "blur(1px)", 
            backdropFilter: "blur(3px) brightness(2)",
        }
    }
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <AppBar style={styles.appbar} className="header">
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleScrollToTop}>
                <MainLogo withBrand />
            </div>
            <AppMenu />
            <div style={styles.flickeringContainer}>
                <div style={styles.flickeringTube} />
                <div style={styles.flickeringTube2} />
            </div>
        </AppBar>
    )
}