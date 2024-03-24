import PropTypes from 'prop-types';
import MenuButton from '../MenuButton/MenuButton';
import styles from './SocialMediaMenu.module.css';
import DiscordIcon from '../../icons/DiscordIcon';
import ShipIcon from '../../icons/ShipIcon';
import CrossIcon from '../../icons/CrossIcon';

const SocialMediaMenu = ({ theme }) => {
  return (
    <div className={theme == 'white' ? `${styles.menuWrap} ${styles.white}` : styles.menuWrap}>
      <MenuButton theme={theme}>
        <DiscordIcon fill={theme == 'white' ? '#ffff' : '#1E1E1E'} />
      </MenuButton>
      <MenuButton theme={theme}>
        <ShipIcon fill={theme == 'white' ? '#ffff' : '#1E1E1E'} />
      </MenuButton>
      <MenuButton theme={theme}>
        <CrossIcon fill={theme == 'white' ? '#ffff' : '#1E1E1E'} />
      </MenuButton>
    </div>
  );
};

SocialMediaMenu.propTypes = {
  theme: PropTypes.string,
};

export default SocialMediaMenu;

