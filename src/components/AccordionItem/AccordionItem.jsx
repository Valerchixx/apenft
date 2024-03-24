import PropTypes from 'prop-types';
import Text from '../Text/Text';
import Title from '../Title/Title';
import styles from './AccordionItem.module.css';
import { useOnDevice } from '../../hooks/useOnDevice.js';
import AccordionIcon from '../../icons/AccordionIcon.jsx';

const AccordionItem = ({ item, isActive, handleOpenItem, index }) => {
  const onMobile = useOnDevice();
  const { title, content, img } = item;
  return (
    <div className={isActive ? `${styles.wrap} ${styles.active}` : styles.wrap}>
      {isActive && !onMobile && (
        <div className={styles.imgWrap}>
          <img src={img} alt="ape img" />
        </div>
      )}
      <div className={isActive ? `${styles.wrapper} ${styles.active}` : styles.wrapper}>
        <div onClick={() => handleOpenItem(index)} className={styles.titleWrap}>
          <div className={styles.iconWrap}>
            <AccordionIcon />
          </div>
          <div>
            <Title>{title}</Title>
          </div>
        </div>
        <div className={isActive ? `${styles.contentWrap} ${styles.active} ` : styles.contentWrap}>
          <Text color="#ffff">{content}</Text>
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    defaultOpen: PropTypes.bool,
    img: PropTypes.node,
  }),
  isActive: PropTypes.bool,
  handleOpenItem: PropTypes.func,
  index: PropTypes.number,
};

export default AccordionItem;

