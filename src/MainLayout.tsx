import React, { lazy, Suspense } from 'react';
import { SectionIdEnum } from './types/section-id';
import { SectionContainer } from './SectionContainer';
import { Box } from '@mui/material';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
const Services = lazy(() => import('./pages/Services'));
const Clients = lazy(() => import('./pages/Clients'));
const About = lazy(() => import('./pages/About'));

const sections = [
  {
    sectionId: SectionIdEnum.home,
    component: <Home/>,
  },
  {
    sectionId: SectionIdEnum.services,
    component: <Services/>,
  },
  {
    sectionId: SectionIdEnum.clients,
    component: <Clients/>,
  },
  {
    sectionId: SectionIdEnum.about,
    component: <About/>,
  },
];

export const MainLayout = () => {
  return (
    <Box height="100vh">
      <Header />
      {sections.map(({ component, sectionId }) => (
        <SectionContainer key={sectionId} sectionId={sectionId}>
          <Suspense fallback={null}>
            {component}
          </Suspense>
        </SectionContainer>
      ))}
      <Box sx={{ width: '100%', marginTop: '10vh' }}>
        <Footer />
      </Box>
    </Box>
  );
};
