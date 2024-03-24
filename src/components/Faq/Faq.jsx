import PropTypes from 'prop-types';
import Accordion from '../Accordion/Accordion';
import Title from '../Title/Title';
import styles from './Faq.module.css';
const Faq = ({ faqRef }) => {
  return (
    <div className={styles.wrap} ref={faqRef}>
      <div className={styles.inner}>
        <Title>FAQ</Title>
        <Accordion />
      </div>
    </div>
  );
};

Faq.propTypes = {
  faqRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
};

export default Faq;
