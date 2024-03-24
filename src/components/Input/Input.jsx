/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ placeholder, Icon, error, ...rest }) => {
  const classToRender = error ? styles.error : undefined;
  return (
    <div className={styles.inputWrap}>
      <div className={styles.input}>
        <div className={styles.imgWrap}>
          <Icon />
        </div>
        <input {...rest} className={classToRender} placeholder={placeholder} type="text" required />
      </div>
      {error && <p className={styles.errorTitle}>{error}</p>}
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  error: PropTypes.string,
};
export default Input;

