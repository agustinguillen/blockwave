import { AnimatePresence } from 'framer-motion';
import { MainLayout } from './MainLayout';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css'

function App() {

  return (
    <AnimatePresence>
      <MainLayout />
    </AnimatePresence>
  )
}

export default App
