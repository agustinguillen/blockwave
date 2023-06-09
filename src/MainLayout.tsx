import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Clients } from "./pages/Clients";
import { SectionIdEnum } from "./types/section-id";
import { SectionContainer } from "./SectionContainer";
import { Box } from "@mui/material";
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const sections = [
    {
        sectionId: SectionIdEnum.home,
        component: <Home />
    },
    {
        sectionId: SectionIdEnum.services,
        component: <Services />
    },
    {
        sectionId: SectionIdEnum.clients,
        component: <Clients />
    },
    {
        sectionId: SectionIdEnum.about,
        component: <About />
    }
]

export const MainLayout = () => {
    return (
        <Box height='100vh'>
            <Header />
            {
                sections.map(({component, sectionId}) => {
                    return <SectionContainer key={sectionId} sectionId={sectionId}>{component}</SectionContainer>
                })
            }
            <Footer />
        </Box>
    )
}