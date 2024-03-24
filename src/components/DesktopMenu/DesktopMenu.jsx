import PropTypes from 'prop-types';
import MenuButton from '../MenuButton/MenuButton';
import styles from './DesktopMenu.module.css';

const DesktopMenu = ({ goToMint, goToArts, goToAbout, goToMind, goToFaq }) => {
  return (
    <div className={styles.wrap}>
      <MenuButton onClick={goToAbout}>ABOUT</MenuButton>
      <MenuButton onClick={goToMind}>M-MAP</MenuButton>
      <MenuButton onClick={goToFaq}>FAQ</MenuButton>
      <MenuButton onClick={goToArts}>ARTS</MenuButton>
      <MenuButton onClick={goToMint}>MINT</MenuButton>
    </div>
  );
};

DesktopMenu.propTypes = {
  goToMind: PropTypes.func,
  goToArts: PropTypes.func,
  goToAbout: PropTypes.func,
  goToMint: PropTypes.func,
  goToFaq: PropTypes.func,
};

export default DesktopMenu;
