import PropTypes from 'prop-types';
import styles from './SliderButton.module.css';
const SliderButton = ({ children, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};
SliderButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SliderButton;
