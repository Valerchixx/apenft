import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, ...rest }) => {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;

