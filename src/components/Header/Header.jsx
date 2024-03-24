import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';
import styles from './Header.module.css';
import Logo from '../../icons/Logo';

const Header = ({ children, headerRef, goToMint, goToArts, goToAbout, goToMind, goToFaq }) => {
  return (
    <div ref={headerRef} className={styles.header}>
      <div className={styles.headerWrap}>
        <div className={styles.logoWrap}>
          <a href="https://ape-nft-iota.vercel.app/" target="_blank">
            <Logo />
          </a>
        </div>
        <div className={styles.wrapMenu}>
          <Menu goToMind={goToMind} goToArts={goToArts} goToMint={goToMint} goToAbout={goToAbout} goToFaq={goToFaq} />
        </div>
      </div>
      {children}
    </div>
  );
};

Header.propTypes = {
  goToMind: PropTypes.func,
  goToArts: PropTypes.func,
  goToAbout: PropTypes.func,
  goToMint: PropTypes.func,
  goToFaq: PropTypes.func,
  children: PropTypes.node.isRequired,
  headerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
};

export default Header;

