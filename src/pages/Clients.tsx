import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper';
import { Reveal } from "../components/Reveal";
import { SectionTitle } from "../components/SectionTitle";
import { SectionParagraph } from "../components/SectionParagraph";
import { Box, useMediaQuery, useTheme } from '@mui/material';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { companies } from '../fakeApiData/companies';
import { ClientCard } from '../components/ClientCard';
import { MainButton } from '../components/MainButton';
import { StarsCanvas } from '../components/canvas/index';

const Clients = () => {
  const swiperRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [autoplayEnabled, setAutoplayEnabled] = useState<boolean>(true);

  const carouselItems = companies.map((company, index) => ({
    key: index + 1,
    content: <ClientCard company={company} />,
  }));

  const [index, setIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setIndex(swiper.activeIndex);
  };

  const autoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    let interval;

    if (autoplayEnabled) {
      interval = setInterval(autoplay, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoplayEnabled]);

  const handleSlideStart = () => {
    setAutoplayEnabled(false);
  };

  const handleSlideEnd = () => {
    setAutoplayEnabled(true);
  };

  return (
    <>
      <Box style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '200vh',
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
          }}
        >
          <SectionTitle title={'Trusted Collaborations: Our Impressive Client Roster'} />
          <SectionParagraph text={'Blockwave´s proven track record of successful collaborations and satisfied clients speaks volumes about our commitment to excellence. We are passionate about driving the success of our clients by delivering high-quality solutions that not only meet but exceed their expectations.'} />
          <Reveal width='100%' delay={1}>
            <Box sx={{ width: '100%', height: 'fit-content', minHeight: '250px', marginTop: '3vh' }}>
              <Swiper
                ref={swiperRef}
                modules={[EffectCoverflow]}
                effect='coverflow'
                loop={true}
                slidesPerView={isMobile ? 1.2 : 2.5}
                centeredSlides={true}
                spaceBetween={30}
                initialSlide={index}
                onSlideChange={handleSlideChange}
                grabCursor={true}
                className="swiper-navigation"
                onTouchStart={handleSlideStart}
                onTouchEnd={handleSlideEnd}
                onDragStart={handleSlideStart}
                onDragEnd={handleSlideEnd}
              >
                {carouselItems.map((item, i) => (
                  <SwiperSlide key={item.key}>{item.content}</SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Reveal>
          <Box style={{ marginTop: '3vh', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <MainButton>Join us today</MainButton>
          </Box>
        </Box>
      </Reveal>
    </>
  );
};

export default Clients;
