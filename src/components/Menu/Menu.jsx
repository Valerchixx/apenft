import PropTypes from 'prop-types';
import { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import MobileMenu from '../MobileMenu/MobileMenu';
import DesktopMenu from '../DesktopMenu/DesktopMenu';
import styles from './Menu.module.css';
import SocialMediaMenu from '../SocialMediaMenu/SocialMediaMenu';
import { useOnDevice } from '../../hooks/useOnDevice';

const Menu = ({ goToMint, goToArts, goToAbout, goToMind, goToFaq }) => {
  const [isActive, setIsActive] = useState(false);
  const onMobile = useOnDevice();
  console.log(onMobile);

  const menuHandler = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.menuWrap}>
          {isActive && !onMobile && (
            <DesktopMenu
              goToMind={goToMind}
              goToArts={goToArts}
              goToMint={goToMint}
              goToAbout={goToAbout}
              goToFaq={goToFaq}
            />
          )}
          <MenuButton
            className={isActive ? `${styles.menuBtn} ${styles.active}` : styles.menuBtn}
            onClick={menuHandler}
          >
            {isActive ? 'CLOSE' : 'MENU'}
          </MenuButton>
        </div>
        <SocialMediaMenu />
      </div>
      <MobileMenu
        mobile={onMobile}
        goToMind={goToMind}
        goToArts={goToArts}
        goToMint={goToMint}
        goToAbout={goToAbout}
        goToFaq={goToFaq}
        isActive={isActive}
        menuHandler={menuHandler}
      />
    </>
  );
};

Menu.propTypes = {
  goToMind: PropTypes.func,
  goToArts: PropTypes.func,
  goToAbout: PropTypes.func,
  goToMint: PropTypes.func,
  goToFaq: PropTypes.func,
};

export default Menu;

