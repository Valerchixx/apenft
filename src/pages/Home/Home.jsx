import { createRef } from 'react';
import About from '../../components/About/About';
import Arts from '../../components/Arts/Arts';
import Contacts from '../../components/Contacts/Contacts';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import MindMap from '../../components/MindMap/MindMap';
import Header from '../../components/Header/Header';
import styles from './Home.module.css';
import Faq from '../../components/Faq/Faq';

const Home = () => {
  const mintRef = createRef(null);
  const aboutRef = createRef(null);
  const mindMapRef = createRef(null);
  const artsRef = createRef(null);
  const faqRef = createRef(null);
  const headerRef = createRef(null);

  const handleGoToSection = (section) => {
    if (section.current) {
      section.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={styles.wrap}>
      <Header
        headerRef={headerRef}
        goToMint={() => handleGoToSection(mintRef)}
        goToArts={() => handleGoToSection(artsRef)}
        goToAbout={() => handleGoToSection(aboutRef)}
        goToMind={() => handleGoToSection(mindMapRef)}
        goToFaq={() => handleGoToSection(faqRef)}
      >
        <Hero goToMint={() => handleGoToSection(mintRef)} />
      </Header>
      <About aboutRef={aboutRef} goToHeader={() => handleGoToSection(headerRef)} />
      <MindMap mindMapRef={mindMapRef} />
      <Faq faqRef={faqRef} />
      <Arts artsRef={artsRef} />
      <Contacts mintRef={mintRef} />
      <Footer />
    </div>
  );
};

export default Home;

