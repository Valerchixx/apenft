import PropTypes from 'prop-types';
import styles from './FormButton.module.css';
const FormButton = ({ children, ...rest }) => {
  return (
    <button className={styles.button} type="submit" {...rest}>
      {children}
    </button>
  );
};

FormButton.propTypes = {
  children: PropTypes.node.isRequired,
};
export default FormButton;

