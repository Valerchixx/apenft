import PropTypes from 'prop-types';
import MenuButton from '../MenuButton/MenuButton';
import SocialMediaMenu from '../SocialMediaMenu/SocialMediaMenu';
import styles from './MobileMenu.module.css';
import Footer from '../Footer/Footer';
import Logo from '../../icons/Logo';

const MobileMenu = ({ isActive, mobile, menuHandler, goToMint, goToArts, goToAbout, goToMind, goToFaq }) => {
  const classToRender = isActive && mobile ? `${styles.menuWrap} ${styles.active} ` : styles.menuWrap;
  return (
    <div className={classToRender}>
      <div className={styles.inner}>
        <div className={styles.logoWrap}>
          <a href="https://ape-nft-iota.vercel.app/" target="_blank">
            <Logo />
          </a>
        </div>
        <div className={styles.menu}>
          <MenuButton className={styles.menuBtn} theme="white" onClick={menuHandler}>
            CLOSE
          </MenuButton>
          <SocialMediaMenu theme="white" />
        </div>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.links}>
          <button
            onClick={() => {
              menuHandler();
              goToAbout();
            }}
          >
            ABOUT
          </button>
          <button
            onClick={() => {
              menuHandler();
              goToMind();
            }}
          >
            M-MAP
          </button>
          <button
            onClick={() => {
              menuHandler();
              goToFaq();
            }}
          >
            FAQ
          </button>
          <button
            onClick={() => {
              menuHandler();
              goToArts();
            }}
          >
            ARTS
          </button>
          <button
            onClick={() => {
              menuHandler();
              goToMint();
            }}
          >
            MINT
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  goToMind: PropTypes.func,
  goToArts: PropTypes.func,
  goToAbout: PropTypes.func,
  goToMint: PropTypes.func,
  goToFaq: PropTypes.func,
  isActive: PropTypes.bool,
  mobile: PropTypes.bool,
  menuHandler: PropTypes.func,
};

export default MobileMenu;

