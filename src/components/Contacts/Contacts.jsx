import PropTypes from 'prop-types';
import Text from '../Text/Text';
import Title from '../Title/Title';
import styles from './Contacts.module.css';
import Form from '../Form/Form';
import CrossIcon from '../../icons/CrossIcon';

const Contacts = ({ mintRef }) => {
  return (
    <div ref={mintRef} className={styles.wrap}>
      <div className={styles.innerWrap}>
        <Title>Are you in?</Title>
        <div className={styles.contentWrap}>
          <div className={styles.descrWrap}>
            <CrossIcon />
            <Text color="#ffff">
              Join the YACHT APE community to be one of the first to receive our limited edition NFT
            </Text>
          </div>
          <div className={styles.formWrap}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  mintRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
};
export default Contacts;

