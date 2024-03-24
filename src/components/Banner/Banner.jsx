import CrossAboutIcon from '../../icons/CrossAboutIcon';
import styles from './Banner.module.css';
const Banner = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.item}>
        <CrossAboutIcon />
        <h1>Destroy stereotypes</h1>
      </div>
      <div className={styles.item}>
        <CrossAboutIcon />
        <h1>HAVE NO LIMITS</h1>
      </div>
      <div className={styles.item}>
        <CrossAboutIcon />
        <h1>Break rules</h1>
      </div>
    </div>
  );
};

export default Banner;

