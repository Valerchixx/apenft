import PropTypes from 'prop-types';
import styles from './MindCard.module.css';
const MindCard = ({ card }) => {
  const { description, title } = card;
  return (
    <div className={styles.cardWrap}>
      <div className={styles.descriptionWrap}>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

MindCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default MindCard;
