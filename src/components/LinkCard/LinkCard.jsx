import styles from './LinkCard.module.css';
import ArrowIcon from '../../icons/ArrowIcon';

const LinkCard = () => {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.imgWrap}>
        <a target="_blank" href="https://opensea.io/collection/boredapeyachtclub">
          <ArrowIcon />
        </a>
      </div>
      <div className={styles.title}>
        <h2>Learn more in mind map</h2>
      </div>
    </div>
  );
};

export default LinkCard;

