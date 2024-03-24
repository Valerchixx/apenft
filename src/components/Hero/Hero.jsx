import PropTypes from 'prop-types';
import styles from './Hero.module.css';
import apeImage from '../../assets/ape.png';
import Text from '../Text/Text';
import Button from '../Button/Button';

const Hero = ({ goToMint }) => {
  return (
    <div className={styles.content}>
      <div className={styles.inner}>
        <p className={styles.subTitle}>diD yOu seE iT ?</p>
        <h1 className={styles.title}>YACHT APES</h1>
        <p className={styles.subTitle}>Apes aRe eveRywhere</p>
        <div className={styles.imageWrap}>
          <img src={apeImage} alt="ape" />
        </div>
        <div className={styles.meetupsWrap}>
          <Button onClick={goToMint}>MEET APS</Button>
          <Text>Yacht Ape is a collection of unique digital apes that you can own in NFT format</Text>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  goToMint: PropTypes.func,
};

export default Hero;

