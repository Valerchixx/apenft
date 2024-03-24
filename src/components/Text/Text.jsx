import PropTypes from 'prop-types';
import styles from './Text.module.css';
const Text = ({ children, size, color = 'black' }) => {
  const styleToRender = { fontSize: size, color: color };
  return (
    <p className={styles.text} style={styleToRender}>
      {children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Text;
